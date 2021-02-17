import Admin_nav from "../components/Admin_nav";
import React, { useState, useEffect } from "react";
import HeaderNav from "../components/HeaderNav";

import api from "../services/Api";

import Footer from "../components/Footer";
import useAuth, { ProtectRoute } from "../contexts/auth.js";
import { useAlert } from "react-alert";
import EditableImage2 from "./EditableImage2";
import ButtonUploadImage from "./ButtonUpload";
import Cookies from "js-cookie";

import axios from "axios";

import { useRouter } from "next/router";
// react plugin used to create charts

//import "chartjs-top-round-bar";

function UpdateProfileForm() {
  const [first_name, setfirst_name] = useState(Cookies.get("first_name"));
  const [last_name, setlast_name] = useState(Cookies.get("last_name"));
  const [profile_pic, setprofile_pic] = useState(false);

  const alert = useAlert();
  const router = useRouter();
  const token = Cookies.get("token");
  const siteUrl = Cookies.get("siteUrl");
  const [XML, setXML] = useState(false);

  const { toggler, settoggler, loading } = useAuth();
  const [spinner, setspinner] = useState(false);

  /*
  const { data, isLoading, isError } = GetCategories();

  const results = isLoading ? false : data.data;
  const showSkeleton = isLoading || loading;
*/

  function handleThumbnailProduct(file) {
    let imageObj = {
      id: file.name,
      name: file.name,
      isUloading: true,
      imageObject: file,
    };
    console.log(imageObj);
    setprofile_pic(imageObj);

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

  const onSubmit = () => {
    let formdata = { first_name, last_name, profile_pic: XML };
    setspinner(true);
    console.log(formdata);

    api
      .post("api/UpdateUserProfile", formdata)
      .then((res) => {
        console.log(res.data);
        setspinner(false);

        if (res.data > 0) {
          alert.show("تم بنجاح", {
            timeout: 2000,
            type: "success",
          });
          if (XML) {
            Cookies.set("profile_pic", XML, { expires: 60 });
          }

          Cookies.set("first_name", first_name, { expires: 60 });
          Cookies.set("last_name", last_name, { expires: 60 });

          if (Cookies.get("UserType") == "admin") {
            router.push("/UpdateProfileA");
          } else if (Cookies.get("UserType") == "mandobe") {
            router.push("/UpdateProfileM");
          } else if (Cookies.get("UserType") == "Company") {
            router.push("/UpdateProfileC");
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setspinner(false);
      });
  };

  return (
    <>
      <body className="rtl g-sidenav-show g-sidenav-pinned" dir="rtl">
        <div>
          {/* Sidenav */}

          {toggler ? <Admin_nav /> : ""}
          {/* Main content */}

          <div className="main-content" id="panel">
            {/* Topnav */}
            <HeaderNav />

            <div className="container-fluid mt--6">
              <div className="row justify-content-center">
                <div className=" col ">
                  <div className="card">
                    <div className="card-header bg-transparent">
                      <h3 className="mb-0">تعديل الملف الشخصي</h3>
                    </div>
                    <div className="card-body">
                      <div>
                        <div dir="rtl" className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-control-label">
                                الإسم الأول
                              </label>
                              <input
                                type="text"
                                name="first_name"
                                onChange={(e) => {
                                  setfirst_name(e.target.value);
                                }}
                                value={first_name}
                                className="form-control"
                                placeholder="الإسم الأول"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-control-label">
                                الإسم الإخير
                              </label>
                              <input
                                type="text"
                                name="last_name"
                                onChange={(e) => {
                                  setlast_name(e.target.value);
                                }}
                                value={last_name}
                                className="form-control"
                                placeholder="الإسم الإخير"
                              />
                            </div>
                          </div>

                          <div className="col-6">
                            <div className="form-group">
                              <label
                                style={{ float: "right" }}
                                className="form-control-label"
                              >
                                صورة الملف الشخصي
                              </label>
                              <div
                                style={{ width: "140px", margin: "2em auto" }}
                              >
                                {profile_pic ? (
                                  <EditableImage2
                                    imageObject={profile_pic}
                                    removeImageFunc={() =>
                                      setprofile_pic(false)
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

                        {spinner ? (
                          <button
                            className="btn btn-default"
                            disabled
                            style={{ float: "left" }}
                          >
                            <span className="spinner-grow spinner-grow-sm"></span>
                            جاري الإرسال ..
                          </button>
                        ) : (
                          <button
                            style={{ float: "left" }}
                            type="submit"
                            className="btn btn-default"
                            onClick={() => {
                              onSubmit();
                            }}
                          >
                            إرسال
                          </button>
                        )}
                      </div>
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

export default UpdateProfileForm;
