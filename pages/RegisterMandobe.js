import Admin_nav from "../components/Admin_nav";
import React, { useState, useEffect } from "react";
import HeaderNav from "../components/HeaderNav";

import api from "../services/Api";

import Footer from "../components/Footer";
import { GetFullCCAs } from "../services/api_get";
import useAuth, { ProtectRoute } from "../contexts/auth.js";
import { useAlert } from "react-alert";
import Router from "next/router";

function Table() {
  const alert = useAlert();

  //const [project,setProject] = useState(false);

  const { toggler, settoggler, loading } = useAuth();
  const [spinner, setspinner] = useState(false);

  const { data, isLoading, isError } = GetFullCCAs();

  const results = isLoading ? false : data.data;
  console.log(results);

  const showSkeleton = isLoading || loading;
  const [CCAs, setCCAs] = useState([]);

  const [citys, setcitys] = useState([]);
  const [aeras, setaeras] = useState([]);

  const [TheSelectedCountry, setTheSelectedCountry] = useState("");
  const [TheSelectedCity, setTheSelectedCity] = useState("");
  const [TheSelectedaera, setTheSelectedaera] = useState("all");
  const [firstTime, setfirstTime] = useState(true);
  const [categories, setcategories] = useState([]);

  if (firstTime && results) {
    setCCAs(results.options.CCAs);

    setTheSelectedCity(results.options.CCAs[0].data[0].name);

    setTheSelectedCountry(results.options.CCAs[0].name);

    setcitys(results.options.CCAs[0].data);
    setaeras(results.options.CCAs[0].data[0].data);

    setfirstTime(false);
  }

  const [familyType, setfamilyType] = useState("family");
  const [priority, setpriority] = useState("normal");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [mempersCount, setmempersCount] = useState(0);
  const [share, setshare] = useState(0);

  const [oldWoman, setOldWoman] = useState(0);
  const [oldMan, setOldMan] = useState(0);
  const [accibilityPerson, setAccibilityPerson] = useState(0);
  const [baby, setBaby] = useState(0);
  const [orphanGirls, setOrphanGirls] = useState(0);
  const [orphanBoys, setOrphanBoys] = useState(0);
  const [girls, setGirls] = useState(0);
  const [guys, setGuys] = useState(0);
  const [women, setWomen] = useState(0);
  const [men, setMen] = useState(0);
  const [widows, setWidows] = useState(0);
  const [girl, setgirl] = useState(0);
  const [boy, setboy] = useState(0);

  const [personNeeds, setPersonNeeds] = useState("");

  const [step, setStep] = useState(1);
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

  function mysubmit() {
    let checke = true;
    let data = {
      TheSelectedCity,
      TheSelectedaera,
      FirstName,
      LastName,
      email,
      phone,

      TheSelectedCountry,
    };

    console.log(data);

    if (FirstName == "") {
      checke = false;
      alert.show("الرجاء كتابة الإسم ", {
        timeout: 2000,
        type: "error",
      });
    }

    if (phone == "") {
      checke = false;
      alert.show("الرجاء كتابة رقم الجوال", {
        timeout: 2000,
        type: "error",
      });
    }

    setspinner(true);
    if (checke) {
      api
        .post("api/CreatNewMandob", data)
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

          if (res.data > 0) {
            alert.show("تم بنجاح", {
              timeout: 2000,
              type: "success",
            });
            Router.push("/Mandobes");
            //GoBackAndTriggerMutation();
            //router.push("/companys/[name]", "/companys/" + formdata.companyName);
          }
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

  let step2 = step;
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
                      <h3 class="mb-0">تسجيل جمعية جديدة</h3>
                    </div>
                    <div class="card-body">
                      {/* Light table */}
                      {step == 1 ? (
                        <div>
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label className="form-control-label">
                                الدولة
                              </label>
                              <select
                                name="county"
                                onChange={(e) => {
                                  let selectedCounty = e.target.value;
                                  setTheSelectedCountry(selectedCounty);
                                  /*if (firstTime) {
                                      setfirstTime(false);
                                    }*/
                                  for (
                                    let index = 0;
                                    index < CCAs.length;
                                    index++
                                  ) {
                                    const tempconunty = CCAs[index];
                                    if (tempconunty.name === selectedCounty) {
                                      setcitys(tempconunty.data);

                                      if (tempconunty.data[0]) {
                                        setTheSelectedCity(
                                          tempconunty.data[0].name
                                        );
                                        setaeras(tempconunty.data[0].data);
                                      } else {
                                        setaeras([]);
                                      }
                                    }
                                  }
                                }}
                                class="form-control"
                              >
                                {CCAs
                                  ? CCAs.map((county, index) => {
                                      return <option>{county.name}</option>;
                                    })
                                  : ""}
                              </select>
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <div className="form-group">
                              <label className="form-control-label">
                                المدينة
                              </label>
                              <select
                                id="mycity"
                                name="city"
                                onChange={(e) => {
                                  let selectedcity = e.target.value;
                                  setTheSelectedCity(e.target.value);
                                  /*if (firstTime) {
                                      setfirstTime(false);
                                    }*/
                                  for (
                                    let index = 0;
                                    index < citys.length;
                                    index++
                                  ) {
                                    const tempcity = citys[index];
                                    if (tempcity.name === selectedcity) {
                                      setaeras(tempcity.data);
                                    }
                                  }
                                }}
                                class="form-control"
                              >
                                {citys.length > 0
                                  ? citys.map((city, index) => {
                                      return (
                                        <option value={city.name}>
                                          {city.name}
                                        </option>
                                      );
                                    })
                                  : ""}
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label className="form-control-label">
                                المنطقة
                              </label>
                              <select
                                name="aeras"
                                onChange={(e) => {
                                  setTheSelectedaera(e.target.value);
                                }}
                                class="form-control"
                              >
                                {aeras.length > 0
                                  ? aeras.map((aeras, index) => {
                                      return (
                                        <option value={aeras.name}>
                                          {aeras.name}
                                        </option>
                                      );
                                    })
                                  : ""}
                              </select>
                            </div>
                          </div>
                          <h6 className="heading-small text-muted mb-4">
                            معلومات الجمعية
                          </h6>

                          <div className="col-lg-12">
                            <div className="form-group">
                              <label className="form-control-label">
                                الإسم
                              </label>
                              <input
                                type="text"
                                name="FirstName"
                                onChange={(e) => {
                                  setFirstName(e.target.value);
                                }}
                                value={FirstName}
                                className="form-control"
                                placeholder="الإسم "
                              />
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="form-group">
                              <label className="form-control-label">
                                رقم الجوال
                              </label>
                              <input
                                type="number"
                                name="phone"
                                onChange={(e) => {
                                  setphone(e.target.value);
                                }}
                                value={phone}
                                className="form-control"
                                placeholder="96650xxxxx"
                              />
                            </div>
                          </div>

                          <hr />

                          <hr />
                        </div>
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

export default ProtectRoute(Table);
