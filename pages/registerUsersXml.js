import Admin_nav from "../components/Admin_nav";
import React, { useState, useEffect } from "react";
import HeaderNav from "../components/HeaderNav";
import PersonNeeds from "../components/PersonNeeds";
import api from "../services/Api";
import EditableImage from "../Components/editable-image/EditableImage";
import ButtonUploadImage from "../Components/button-upload/ButtonUpload";
import axios from "axios";

import Footer from "../components/Footer";
import { GetC } from "../services/api_get";
import useAuth, { ProtectRoute } from "../contexts/auth.js";
import { useAlert } from "react-alert";
import Cookies from "js-cookie";

function Table() {
  const token = Cookies.get("token");
  const siteUrl = Cookies.get("siteUrl");
  const [ProductImage, setProductImage] = useState();

  const alert = useAlert();

  //const [project,setProject] = useState(false);

  const { toggler, settoggler, loading } = useAuth();
  const [spinner, setspinner] = useState(false);

  const { data, isLoading, isError } = GetC();

  const results = isLoading ? false : data.data;
  console.log(results);

  const showSkeleton = isLoading || loading;

  const [firstTime, setfirstTime] = useState(true);
  const [categories, setcategories] = useState([]);
  const [registerResults, setregisterResults] = useState([]);

  if (firstTime && results) {
    setcategories(results.options.categories);

    setfirstTime(false);
  }

  const [XML, setXML] = useState("");

  const [step, setStep] = useState(1);
  const [step2, setStep2] = useState(0);
  const [list, updateList] = useState([]);
  const [allowed, setallowed] = useState(false);

  function updateArray(data) {
    let favorite = list;
    favorite.push(data);

    updateList(favorite);
    setallowed(true);

    //  setPersonNeeds((PersonNeeds) => PersonNeeds.concat(data));
    // setPersonNeeds((PersonNeeds) => [...PersonNeeds, data]);
  }

  function handleThumbnailProduct(file) {
    let imageObj = {
      id: file.name,
      name: file.name,
      isUloading: true,
      imageObject: file,
    };
    console.log(imageObj);
    setProductImage(imageObj);

    let formData = new FormData();

    formData.append("file", file);

    axios
      .post(siteUrl + "wp/v2/media", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result.data.source_url);
        setXML(result.data.source_url);
      });
  }

  async function removeUser(id) {
    let favorite = list;
    if (list.length == 1) {
      setallowed(false);
    }
    favorite = await favorite.filter((e) => e.id !== id);
    updateList(favorite);
  }

  function mysubmit() {
    let data = {
      XML,
      categories: list,
    };
    let checke = true;

    console.log(data);

    if (data.XML == "") {
      checke = false;
      alert.show("الرجاء رفع الملف ", {
        timeout: 2000,
        type: "error",
      });
    }
    if (data.categories.length == 0) {
      checke = false;
      alert.show("الرجاء إختيار إحتياج واحد أو أكثر ", {
        timeout: 2000,
        type: "error",
      });
    }

    setspinner(true);
    if (checke) {
      api
        .post("rabwa/CreatNewUserXml", data)
        .then((res) => {
          setspinner(false);
          console.log(res.data);

          if (res.data == "already exists") {
            alert.show("إسم الكوبون موجود مسبقا ", {
              timeout: 2000,
              type: "error",
            });
          }
          if (res.data == "phone") {
            alert.show("رقم الجوال مستخدم مسبقا", {
              timeout: 2000,
              type: "error",
            });
          }
          if (res.data == "email") {
            alert.show("الإيميل مستخدم مسبقا", {
              timeout: 2000,
              type: "error",
            });
          }

          if (res.data.length > 0) {
            setregisterResults(res.data);
            setStep2(3);
            alert.show("تم بنجاح", {
              timeout: 2000,
              type: "success",
            });
            //GoBackAndTriggerMutation();
            //router.push("/companys/[name]", "/companys/" + formdata.companyName);
          }
          //console.log(res.data);
        })
        .catch((err) => {
          alert.show("حصل خطأ", {
            timeout: 2000,
            type: "error",
          });
          setspinner(false);
          console.log(err);
        });
    }
  }

  return (
    <>
      <body className="rtl g-sidenav-show g-sidenav-pinned" dir="rtl">
        <div>
          {/* Sidenav */}
          <Admin_nav />
          {/* Main content */}

          <div class="main-content" id="panel">
            {/* Topnav */}
            <HeaderNav />
            {/* Header */}
            {/* Header */}

            <div class="container-fluid mt--6">
              <div class="row justify-content-center">
                <div class=" col ">
                  <div class="card">
                    <div class="card-header bg-transparent">
                      <h3 class="mb-0">تسجيل مجموعة مستفيدين</h3>
                    </div>
                    <div class="card-body">
                      {/* Light table */}
                      {step == 1 ? (
                        <div>
                          {" "}
                          <h6 className="heading-small text-muted mb-4">
                            رفع الملف
                          </h6>
                          <div className="pl-lg-4">
                            <div className="row">
                              <div className="col-lg-6">
                                <div
                                  style={{ width: "140px", margin: "2em auto" }}
                                >
                                  {ProductImage ? (
                                    <EditableImage
                                      imageObject={ProductImage}
                                      removeImageFunc={() =>
                                        setProductImage(false)
                                      }
                                    />
                                  ) : (
                                    <ButtonUploadImage
                                      typeImage="thumbnail"
                                      onChange={(thumbnail) =>
                                        handleThumbnailProduct(
                                          thumbnail.target.files[0]
                                        )
                                      }
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      {step == 2 ? (
                        step2 == 0 ? (
                          <div>
                            <div className="table-responsive">
                              <div>
                                <table className="table align-items-center">
                                  <thead className="thead-light">
                                    <tr>
                                      <th
                                        scope="col"
                                        className="sort"
                                        data-sort="name"
                                      >
                                        الإحتياج
                                      </th>
                                      <th
                                        scope="col"
                                        className="sort"
                                        data-sort="budget"
                                      >
                                        اختيار
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="list">
                                    {categories.length > 0
                                      ? categories.map((data, i) => {
                                          return (
                                            <PersonNeeds
                                              data={data}
                                              updateArray={updateArray}
                                              removeUser={removeUser}
                                            />
                                          );
                                        })
                                      : ""}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="table-responsive">
                              <div>
                                <table className="table align-items-center">
                                  <thead className="thead-light">
                                    <tr>
                                      <th
                                        scope="col"
                                        className="sort"
                                        data-sort="name"
                                      >
                                        الإسم
                                      </th>
                                      <th
                                        scope="col"
                                        className="sort"
                                        data-sort="budget"
                                      >
                                        الإيميل
                                      </th>
                                      <th
                                        scope="col"
                                        className="sort"
                                        data-sort="budget"
                                      >
                                        رقم الجوال
                                      </th>
                                      <th
                                        scope="col"
                                        className="sort"
                                        data-sort="budget"
                                      >
                                        الحالة
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="list">
                                    {registerResults.length > 0
                                      ? registerResults.map((data, i) => {
                                          return (
                                            <tr>
                                              <td className="budget">
                                                {data.FirstName[0] +
                                                  " " +
                                                  data.LastName[0]}
                                              </td>
                                              <td className="budget">
                                                {data.Email[0]}
                                              </td>
                                              <td className="budget">
                                                {data.Phone[0]}
                                              </td>
                                              <td className="budget">
                                                {data.res == "phone" ? (
                                                  <p style={{ color: "red" }}>
                                                    رقم الجوال مستخدم مسبقا
                                                  </p>
                                                ) : data.res == "email" ? (
                                                  <p style={{ color: "red" }}>
                                                    الإيميل مستخدم مسبقا{" "}
                                                  </p>
                                                ) : data.res ? (
                                                  <p style={{ color: "green" }}>
                                                    تم بنجاح{" "}
                                                  </p>
                                                ) : (
                                                  ""
                                                )}
                                              </td>
                                            </tr>
                                          );
                                        })
                                      : ""}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        )
                      ) : (
                        ""
                      )}

                      <div>
                        <div
                          style={{
                            margin: "0 auto",
                            textAlign: "center",
                            marginTop: "9em",
                          }}
                        >
                          {step == 1 ? (
                            ""
                          ) : step2 == 0 ? (
                            <button
                              type="button"
                              class="btn btn-lg btn-primary"
                              disabled={step == 1 ? true : false}
                              onClick={() => {
                                step == 1 ? false : setStep(step - 1);
                              }}
                            >
                              السابق
                            </button>
                          ) : (
                            ""
                          )}
                          {"     "}
                          {step == 2 ? (
                            ""
                          ) : (
                            <button
                              type="button"
                              class="btn btn-lg btn-primary"
                              disabled={step == 2 ? true : false}
                              onClick={() => {
                                step == 2 ? false : setStep(step + 1);
                              }}
                            >
                              التالي
                            </button>
                          )}
                        </div>
                      </div>

                      {step == 2 ? (
                        step2 == 0 ? (
                          <div>
                            <hr />

                            <div style={{ textAlign: "left" }}>
                              <button
                                class="btn btn-icon btn-success"
                                onClick={() => {
                                  mysubmit();
                                }}
                                type="button"
                              >
                                <span
                                  style={{
                                    marginLeft: ".75em",
                                    marginRight: "auto",
                                  }}
                                  class="btn-inner--text"
                                >
                                  إنشاء
                                </span>
                                {"     "}
                                <span class="btn-inner--icon">
                                  <i class="ni ni-send"></i>
                                </span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <Footer />
            </div>
          </div>

          {/* Argon Scripts */}
          {/* Core */}
          {/* Optional JS */}
          {/* Argon JS */}
        </div>
      </body>
    </>
  );
}

export default ProtectRoute(Table);
