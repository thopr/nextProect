import React, { useState } from "react";
import Admin_nav from "../components/Admin_nav";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import Add_Contery from "../components/Add_Contery";
import Add_City from "../components/Add_City";
import Add_aera from "../components/Add_aera";
import Edit_Contery from "../components/Edit_Contery";
import Edit_City from "../components/Edit_City";
import Edit_aera from "../components/Edit_aera";

import api from "../services/Api";
import { useAlert } from "react-alert";

import useAuth, { ProtectRoute } from "../contexts/auth.js";
import { mutate } from "swr";

import Skeleton from "react-loading-skeleton";
import { GetFullCCAs } from "../services/api_get";

function CCA() {
  const alert = useAlert();

  const { user, isAuthenticated, loading, toggler } = useAuth();
  const [pageup, setpageup] = useState(0);
  const [Parent_id, setparent_id] = useState(0);

  const [step, setStep] = useState(1);
  const [catName, setCatName] = useState("");

  const [firstTime, setfirstTime] = useState(true);
  const [Categories, setCategories] = useState([]);
  const [ModelData, setModelData] = useState([]);
  const [EditCategory, setEditCategory] = useState([]);
  const [EditService, setEditService] = useState([]);
  const [EditCity, setEditCity] = useState([]);
  const [Editaera, setEditaera] = useState([]);

  const [modalType, setmodalType] = useState("");
  const [CCAs, setCCAs] = useState([]);

  const [citys, setcitys] = useState([]);
  const [aeras, setaeras] = useState([]);
  const [des, setdes] = useState("");

  const [TheSelectedCountry, setTheSelectedCountry] = useState("");
  const [TheSelectedCity, setTheSelectedCity] = useState("");
  const [TheSelectedaera, setTheSelectedaera] = useState("all");
  const [categories, setcategories] = useState([]);
  const { data, isLoading, isError } = GetFullCCAs(pageup);

  const results = isLoading ? false : data.data;
  console.log(results);
  const showSkeleton = isLoading || loading;

  function GoBackAndTriggerMutation() {
    // mutate("rabwa/GetCategories?pageup=" + pageup);

    setpageup(pageup + 1);
    setfirstTime(true);
    setStep(1);
  }

  function openModal(ModelData, type) {
    setmodalType(type);
    setModelData(ModelData);
  }

  function Delete_Service2(Service_id) {
    let formdata = { id: Service_id };

    api
      .post("rabwa/Delete_area", formdata)
      .then((res) => {
        console.log(res.data);

        if (res.data > 0) {
          alert.show("تم بنجاح", {
            timeout: 2000,
            type: "success",
          });
          GoBackAndTriggerMutation();
          //router.push("/companys/[name]", "/companys/" + formdata.companyName);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function Delete_Service(Service_id) {
    let formdata = { id: Service_id };

    api
      .post("rabwa/Delete_City", formdata)
      .then((res) => {
        console.log(res.data);

        if (res.data > 0) {
          alert.show("تم بنجاح", {
            timeout: 2000,
            type: "success",
          });
          GoBackAndTriggerMutation();
          //router.push("/companys/[name]", "/companys/" + formdata.companyName);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function Delete_Category(id) {
    let formdata = { id: id };

    api
      .post("rabwa/Delete_Contery", formdata)
      .then((res) => {
        console.log(res.data);

        if (res.data > 0) {
          alert.show("تم بنجاح", {
            timeout: 2000,
            type: "success",
          });
          GoBackAndTriggerMutation();
          //router.push("/companys/[name]", "/companys/" + formdata.companyName);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
                      <h4 style={{ float: "right" }} className="mb-0">
                        الدول والمدن والمناطق
                      </h4>
                    </div>
                    {results ? (
                      <div className="card-body">
                        {step == 1 ? (
                          <>
                            <div
                              class="col-xl-12 col-md-12"
                              style={{ height: "50px" }}
                            ></div>

                            <>
                              <div className="row">
                                <table className="table align-items-center table-flush">
                                  <thead className="thead-light">
                                    <tr>
                                      <th scope="col" data-sort="name">
                                        #
                                      </th>
                                      <th scope="col" data-sort="name">
                                        الدولة
                                      </th>

                                      <th scope="col" data-sort="status">
                                        المفتاح
                                      </th>

                                      <th scope="col" data-sort="completion">
                                        إدارة وإضافة مدن
                                      </th>
                                      <th scope="col" data-sort="name"></th>
                                    </tr>
                                  </thead>
                                  <tbody className="list">
                                    {results.options.CCAs.map(
                                      (Contery, index) => {
                                        return (
                                          <>
                                            <tr>
                                              <td>
                                                <h4
                                                  style={{
                                                    TextAlign: "center",
                                                  }}
                                                >
                                                  {index + 1}
                                                </h4>
                                              </td>
                                              <td>
                                                <h4
                                                  style={{
                                                    TextAlign: "center",
                                                  }}
                                                >
                                                  {Contery.name}
                                                </h4>
                                              </td>

                                              <td>
                                                <h4>{Contery.code}</h4>
                                              </td>

                                              <td>
                                                <button
                                                  type="button "
                                                  class="btn btn-info"
                                                  onClick={() => {
                                                    setEditCategory(Contery);
                                                    setStep(5);
                                                  }}
                                                >
                                                  إدارة وإضافة المدن
                                                </button>
                                              </td>
                                              <td className="budget">
                                                <div class="dropdown">
                                                  <a
                                                    class="btn btn-sm btn-icon-only text-light"
                                                    href="#"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                  >
                                                    <i class="fas fa-ellipsis-v"></i>
                                                  </a>
                                                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                    <a
                                                      onClick={() => {
                                                        setStep(4);
                                                        setEditCategory(
                                                          Contery
                                                        );
                                                      }}
                                                      class="dropdown-item"
                                                    >
                                                      تعديل الدولة
                                                    </a>

                                                    <a
                                                      onClick={() => {
                                                        openModal(
                                                          Contery,
                                                          "conformDelete"
                                                        );
                                                      }}
                                                      class="dropdown-item"
                                                      data-toggle="modal"
                                                      data-target="#modal-default"
                                                      style={{
                                                        color: "red",
                                                      }}
                                                    >
                                                      حذف الدولة
                                                    </a>
                                                  </div>
                                                </div>
                                              </td>
                                            </tr>
                                          </>
                                        );
                                      }
                                    )}

                                    <tr>
                                      <td>
                                        <button
                                          type="button"
                                          class="btn btn-outline-warning"
                                          onClick={() => {
                                            setStep(2);
                                          }}
                                        >
                                          <span class="btn-inner--text">
                                            دولة جديدة
                                          </span>
                                          <span class="btn-inner--icon">
                                            <i class="ni ni-fat-add"></i>
                                          </span>
                                        </button>
                                      </td>
                                      <td></td>

                                      <td></td>

                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </>
                          </>
                        ) : step == 5 ? (
                          <>
                            <div
                              style={{ float: "right", marginBottom: "10px" }}
                            >
                              <button
                                onClick={() => {
                                  setStep(1);
                                }}
                                class="btn btn-icon btn-primary"
                                type="button"
                              >
                                <span class="btn-inner--icon">
                                  <i
                                    class="fa fa-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </button>
                              <h4
                                style={{
                                  marginRight: "0.8em",
                                  display: "inline",
                                }}
                              >
                                العودة الى الخلف
                              </h4>

                              <div style={{ clear: "both" }}></div>
                            </div>
                            <div
                              class="col-xl-12 col-md-12"
                              style={{ height: "50px" }}
                            ></div>

                            <>
                              <div className="row">
                                <div
                                  className="card"
                                  style={{ width: " 100%" }}
                                >
                                  {" "}
                                  <div
                                    className="card-body"
                                    style={{ backgroundColor: "#e3e8ec" }}
                                  >
                                    <h4 style={{ textAlign: "center" }}>
                                      {EditCategory.name}
                                    </h4>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <table className="table align-items-center table-flush">
                                  <thead className="thead-light">
                                    <tr>
                                      <th scope="col" data-sort="name">
                                        #
                                      </th>
                                      <th scope="col" data-sort="name">
                                        إسم المدينة
                                      </th>

                                      <th scope="col" data-sort="completion">
                                        إدارة وإضافة مناطق
                                      </th>

                                      <th scope="col" data-sort="name"></th>
                                    </tr>
                                  </thead>
                                  <tbody className="list">
                                    {EditCategory.data.map((City, index) => {
                                      return (
                                        <>
                                          <tr>
                                            <td>
                                              <h4
                                                style={{
                                                  TextAlign: "center",
                                                }}
                                              >
                                                {index + 1}
                                              </h4>
                                            </td>
                                            <td>
                                              <h4
                                                style={{
                                                  TextAlign: "center",
                                                }}
                                              >
                                                {City.name}
                                              </h4>
                                            </td>

                                            <td>
                                              <button
                                                type="button "
                                                class="btn btn-info"
                                                onClick={() => {
                                                  setEditCity(City);
                                                  setStep(9);
                                                }}
                                              >
                                                إدارة وإضافة مناطق
                                              </button>
                                            </td>

                                            <td className="budget">
                                              <div class="dropdown">
                                                <a
                                                  class="btn btn-sm btn-icon-only text-light"
                                                  href="#"
                                                  role="button"
                                                  data-toggle="dropdown"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                                >
                                                  <i class="fas fa-ellipsis-v"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                  <a
                                                    onClick={() => {
                                                      setStep(7);
                                                      setEditCity(City);
                                                    }}
                                                    class="dropdown-item"
                                                  >
                                                    تعديل المدينة
                                                  </a>

                                                  <a
                                                    onClick={() => {
                                                      openModal(
                                                        City,
                                                        "conformDeleteServeice"
                                                      );
                                                    }}
                                                    class="dropdown-item"
                                                    data-toggle="modal"
                                                    data-target="#modal-default"
                                                    style={{
                                                      color: "red",
                                                    }}
                                                  >
                                                    حذف المدينة
                                                  </a>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                        </>
                                      );
                                    })}

                                    <tr>
                                      <td>
                                        <button
                                          type="button"
                                          class="btn btn-outline-warning"
                                          onClick={() => {
                                            console.log(EditCategory);
                                            setStep(3);
                                            setparent_id(EditCategory.id);

                                            setCatName(EditCategory.name);
                                          }}
                                        >
                                          <span class="btn-inner--text">
                                            مدينة جديدة
                                          </span>
                                          <span class="btn-inner--icon">
                                            <i class="ni ni-fat-add"></i>
                                          </span>
                                        </button>
                                      </td>
                                      <td></td>

                                      <td></td>

                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </>
                          </>
                        ) : step == 9 ? (
                          <>
                            <div
                              style={{ float: "right", marginBottom: "10px" }}
                            >
                              <button
                                onClick={() => {
                                  setStep(5);
                                }}
                                class="btn btn-icon btn-primary"
                                type="button"
                              >
                                <span class="btn-inner--icon">
                                  <i
                                    class="fa fa-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </button>
                              <h4
                                style={{
                                  marginRight: "0.8em",
                                  display: "inline",
                                }}
                              >
                                العودة الى الخلف
                              </h4>

                              <div style={{ clear: "both" }}></div>
                            </div>
                            <div
                              class="col-xl-12 col-md-12"
                              style={{ height: "50px" }}
                            ></div>

                            <>
                              <div className="row">
                                <div
                                  className="card"
                                  style={{ width: " 100%" }}
                                >
                                  {" "}
                                  <div
                                    className="card-body"
                                    style={{ backgroundColor: "#e3e8ec" }}
                                  >
                                    <h4 style={{ textAlign: "center" }}>
                                      {EditCity.name}
                                    </h4>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <table className="table align-items-center table-flush">
                                  <thead className="thead-light">
                                    <tr>
                                      <th scope="col" data-sort="name">
                                        #
                                      </th>
                                      <th scope="col" data-sort="name">
                                        إسم المنطقة
                                      </th>

                                      <th scope="col" data-sort="name"></th>
                                    </tr>
                                  </thead>
                                  <tbody className="list">
                                    {EditCity.data.map((aera, index) => {
                                      return (
                                        <>
                                          <tr>
                                            <td>
                                              <h4
                                                style={{
                                                  TextAlign: "center",
                                                }}
                                              >
                                                {index + 1}
                                              </h4>
                                            </td>
                                            <td>
                                              <h4
                                                style={{
                                                  TextAlign: "center",
                                                }}
                                              >
                                                {aera.name}
                                              </h4>
                                            </td>

                                            <td className="budget">
                                              <div class="dropdown">
                                                <a
                                                  class="btn btn-sm btn-icon-only text-light"
                                                  href="#"
                                                  role="button"
                                                  data-toggle="dropdown"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                                >
                                                  <i class="fas fa-ellipsis-v"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                  <a
                                                    onClick={() => {
                                                      setEditaera(aera);
                                                      setStep(10);
                                                    }}
                                                    class="dropdown-item"
                                                  >
                                                    تعديل المنطقة
                                                  </a>

                                                  <a
                                                    onClick={() => {
                                                      openModal(
                                                        aera,
                                                        "conformDeleteServeice2"
                                                      );
                                                    }}
                                                    class="dropdown-item"
                                                    data-toggle="modal"
                                                    data-target="#modal-default"
                                                    style={{
                                                      color: "red",
                                                    }}
                                                  >
                                                    حذف المنطقة
                                                  </a>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                        </>
                                      );
                                    })}

                                    <tr>
                                      <td>
                                        <button
                                          type="button"
                                          class="btn btn-outline-warning"
                                          onClick={() => {
                                            setStep(6);
                                          }}
                                        >
                                          <span class="btn-inner--text">
                                            منطقة جديدة
                                          </span>
                                          <span class="btn-inner--icon">
                                            <i class="ni ni-fat-add"></i>
                                          </span>
                                        </button>
                                      </td>
                                      <td></td>

                                      <td></td>

                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </>
                          </>
                        ) : step == 2 ? (
                          <>
                            <div
                              style={{ float: "right", marginBottom: "10px" }}
                            >
                              <button
                                onClick={() => {
                                  setStep(1);
                                }}
                                class="btn btn-icon btn-primary"
                                type="button"
                              >
                                <span class="btn-inner--icon">
                                  <i
                                    class="fa fa-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </button>
                              <h4
                                style={{
                                  marginRight: "0.8em",
                                  display: "inline",
                                }}
                              >
                                العودة الى الخلف
                              </h4>

                              <div style={{ clear: "both" }}></div>
                            </div>
                            <Add_Contery
                              GoBackAndTriggerMutation={
                                GoBackAndTriggerMutation
                              }
                              Parent_id={0}
                            />
                          </>
                        ) : step == 3 ? (
                          <>
                            <div
                              style={{ float: "right", marginBottom: "10px" }}
                            >
                              <button
                                onClick={() => {
                                  setStep(1);
                                }}
                                class="btn btn-icon btn-primary"
                                type="button"
                              >
                                <span class="btn-inner--icon">
                                  <i
                                    class="fa fa-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </button>
                              <h4
                                style={{
                                  marginRight: "0.8em",
                                  display: "inline",
                                }}
                              >
                                العودة الى الخلف
                              </h4>

                              <div style={{ clear: "both" }}></div>
                            </div>
                            <Add_City
                              GoBackAndTriggerMutation={
                                GoBackAndTriggerMutation
                              }
                              Parent_id={EditCategory.id}
                              setStep={setStep}
                            />
                          </>
                        ) : step == 6 ? (
                          <>
                            <div
                              style={{ float: "right", marginBottom: "10px" }}
                            >
                              <button
                                onClick={() => {
                                  setStep(9);
                                }}
                                class="btn btn-icon btn-primary"
                                type="button"
                              >
                                <span class="btn-inner--icon">
                                  <i
                                    class="fa fa-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </button>
                              <h4
                                style={{
                                  marginRight: "0.8em",
                                  display: "inline",
                                }}
                              >
                                العودة الى الخلف
                              </h4>

                              <div style={{ clear: "both" }}></div>
                            </div>
                            <br />

                            <Add_aera
                              GoBackAndTriggerMutation={
                                GoBackAndTriggerMutation
                              }
                              Parent_id={EditCity.id}
                            />
                          </>
                        ) : step == 4 ? (
                          <>
                            <div
                              style={{ float: "right", marginBottom: "10px" }}
                            >
                              <button
                                onClick={() => {
                                  setStep(1);
                                }}
                                class="btn btn-icon btn-primary"
                                type="button"
                              >
                                <span class="btn-inner--icon">
                                  <i
                                    class="fa fa-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </button>
                              <h4
                                style={{
                                  marginRight: "0.8em",
                                  display: "inline",
                                }}
                              >
                                العودة الى الخلف
                              </h4>

                              <div style={{ clear: "both" }}></div>
                            </div>
                            <br />

                            <Edit_Contery
                              GoBackAndTriggerMutation={
                                GoBackAndTriggerMutation
                              }
                              Category={EditCategory}
                            />
                          </>
                        ) : step == 7 ? (
                          <>
                            <div
                              style={{ float: "right", marginBottom: "10px" }}
                            >
                              <button
                                onClick={() => {
                                  setStep(5);
                                }}
                                class="btn btn-icon btn-primary"
                                type="button"
                              >
                                <span class="btn-inner--icon">
                                  <i
                                    class="fa fa-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </button>
                              <h4
                                style={{
                                  marginRight: "0.8em",
                                  display: "inline",
                                }}
                              >
                                العودة الى الخلف
                              </h4>

                              <div style={{ clear: "both" }}></div>
                            </div>
                            <br />

                            <Edit_City
                              GoBackAndTriggerMutation={
                                GoBackAndTriggerMutation
                              }
                              Service={EditCity}
                            />

                            {showSkeleton ? (
                              <Skeleton height={10} count={2} />
                            ) : (
                              ""
                            )}
                          </>
                        ) : step == 10 ? (
                          <>
                            <div
                              style={{ float: "right", marginBottom: "10px" }}
                            >
                              <button
                                onClick={() => {
                                  setStep(1);
                                }}
                                class="btn btn-icon btn-primary"
                                type="button"
                              >
                                <span class="btn-inner--icon">
                                  <i
                                    class="fa fa-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </button>
                              <h4
                                style={{
                                  marginRight: "0.8em",
                                  display: "inline",
                                }}
                              >
                                العودة الى الخلف
                              </h4>

                              <div style={{ clear: "both" }}></div>
                            </div>
                            <br />

                            <Edit_aera
                              GoBackAndTriggerMutation={
                                GoBackAndTriggerMutation
                              }
                              Service={Editaera}
                            />
                          </>
                        ) : step == 11 ? (
                          <>
                            <div
                              style={{ float: "right", marginBottom: "10px" }}
                            >
                              <button
                                onClick={() => {
                                  setStep(1);
                                }}
                                class="btn btn-icon btn-primary"
                                type="button"
                              >
                                <span class="btn-inner--icon">
                                  <i
                                    class="fa fa-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </button>
                              <h4
                                style={{
                                  marginRight: "0.8em",
                                  display: "inline",
                                }}
                              >
                                العودة الى الخلف
                              </h4>

                              <div style={{ clear: "both" }}></div>
                            </div>
                            <br />

                            <Edit_Service
                              GoBackAndTriggerMutation={
                                GoBackAndTriggerMutation
                              }
                              Service={EditService}
                            />
                          </>
                        ) : (
                          ""
                        )}
                        {showSkeleton ? <Skeleton height={10} count={2} /> : ""}
                      </div>
                    ) : (
                      <div className="card-body">
                        <div
                          class="col-xl-12 col-md-12"
                          style={{ height: "50px" }}
                        ></div>
                        {showSkeleton ? (
                          <Skeleton height={100} count={4} />
                        ) : (
                          ""
                        )}
                      </div>
                    )}
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
        {/* Argon MODEL */}
        <div
          class="modal fade"
          id="modal-default"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modal-default"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal- modal-dialog-centered modal-"
            role="document"
          >
            {modalType == "stats" ? (
              <div class="modal-content"></div>
            ) : modalType == "conformDeleteServeice2" ? (
              <div class="modal-content">
                <div class="modal-header">
                  <h6 class="modal-title" id="modal-title-default">
                    تأكيد الحذف
                  </h6>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>

                <div class="modal-body" style={{ textAlign: "right" }}>
                  {ModelData ? <h1> سيتم حذف : {ModelData.name}</h1> : ""}
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                    style={{ float: "left" }}
                    onClick={() => {
                      Delete_Service2(ModelData.id);
                    }}
                  >
                    تأكيد الحذف
                  </button>

                  <button
                    type="button"
                    class="btn btn-secondary "
                    data-dismiss="modal"
                    style={{ float: "right" }}
                    onClick={() => {
                      setmodalType("stats");
                    }}
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            ) : modalType == "conformDeleteServeice" ? (
              <div class="modal-content">
                <div class="modal-header">
                  <h6 class="modal-title" id="modal-title-default">
                    تأكيد الحذف
                  </h6>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>

                <div class="modal-body" style={{ textAlign: "right" }}>
                  {ModelData ? <h1> سيتم حذف : {ModelData.name}</h1> : ""}
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                    style={{ float: "left" }}
                    onClick={() => {
                      Delete_Service(ModelData.id);
                    }}
                  >
                    تأكيد الحذف
                  </button>

                  <button
                    type="button"
                    class="btn btn-secondary "
                    data-dismiss="modal"
                    style={{ float: "right" }}
                    onClick={() => {
                      setmodalType("stats");
                    }}
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            ) : modalType == "conformDelete" ? (
              <div class="modal-content">
                <div class="modal-header">
                  <h6 class="modal-title" id="modal-title-default">
                    تأكيد الحذف
                  </h6>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>

                <div class="modal-body" style={{ textAlign: "right" }}>
                  {ModelData ? <h1> سيتم حذف : {ModelData.name}</h1> : ""}
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                    style={{ float: "left" }}
                    onClick={() => {
                      Delete_Category(ModelData.id);
                    }}
                  >
                    تأكيد الحذف
                  </button>

                  <button
                    type="button"
                    class="btn btn-secondary "
                    data-dismiss="modal"
                    style={{ float: "right" }}
                    onClick={() => {
                      setmodalType("stats");
                    }}
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* Argon MODEL */}
      </body>
    </>
  );
}

export default ProtectRoute(CCA);
