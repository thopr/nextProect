import React, { useState, useEffect } from "react";
import Admin_nav from "./Admin_nav";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import NewCoubonForm from "./NewCoubonForm";
import AddCoubonsForm from "./AddCoubonsForm";
import api from "../services/Api";

import useAuth, { ProtectRoute } from "../contexts/auth.js";
import { GetCouponsBybranch } from "../services/api_get";

import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import { useAlert } from "react-alert";

import { mutate } from "swr";

const BranchCoubonTable = ({
  branch_id,
  BracnhCode,
  companyName,
  Branchname,
  setChoose,
  listOfBranches,
  FullDesc,
  logo,
  bname,
  bphone,
}) => {
  const router = useRouter();
  const alert = useAlert();

  const { user, isAuthenticated, loading } = useAuth();

  useEffect(() => {
    localStorage.Currentcategory = "";
    if (!isAuthenticated && !loading) Router.push("/login");
  }, [loading, isAuthenticated]);

  console.log("heeere");
  console.log(companyName);

  console.log(listOfBranches);
  console.log("company branches");

  const [theSection_id, settheSection_id] = useState(0);
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const [uppage, setuppage] = useState("t");
  const { data, isLoading, isError } = GetCouponsBybranch(branch_id, uppage);

  const results = isLoading ? false : data.data;

  console.log(results);
  const showSkeleton = isLoading || loading;

  const [newCompany, setnewCompany] = useState(false);
  const [Section_id, setSection_id] = useState(false);
  const [value, setvalue] = useState(false);
  const [coubonName, setcoubonName] = useState("");
  const [coubonType, setcoubonType] = useState(false);

  const [ModelState, setModelState] = useState(false);
  const [finalBranches, setfinalBranches] = useState([]);
  //const [theCouponBranches, settheCouponBranches] = useState([]);

  const [edit, setedit] = useState(false);
  const [editModel, seteditModel] = useState(false);

  const [Company, setCompany] = useState([]);

  function GoBackAndTriggerMutation() {
    //mutate("api/GetCouponsBybranch?branch_id=" + branch_id);
    setuppage(uppage + "q");
    setedit(false);
    setnewCompany(false);
    //setnewCompany(false);
  }

  function changenewCompany() {
    setedit(false);
    setnewCompany(false);
  }

  function changeBranches(value, id) {
    let favorite = finalBranches;
    console.log(favorite);
    let f = [];
    for (let index = 0; index < favorite.length; index++) {
      let ss = favorite[index].status;
      if (favorite[index].id == id) {
        ss = value;
      }

      var tempbranch = {
        id: favorite[index].id,
        branch_name: favorite[index].branch_name,
        status: ss,
        Section_id: favorite[index].Section_id,
      };
      f.push(tempbranch);
    }
    setfinalBranches(f);
  }

  function UpdateCoubontName() {
    console.log("-----------------------------");
    console.log(data);
    console.log("-----------------------------");
    let dd = {
      Section_id,
      coubonName,
    };
    api.post("api/UpdateCoubontName", dd).then((res) => {
      console.log(res.data);
      alert.show("تم بنجاح", {
        timeout: 2000,
        type: "success",
      });
      GoBackAndTriggerMutation();
    });
  }

  function SaveBranches(data) {
    console.log("-----------------------------");
    console.log(data);
    console.log("-----------------------------");
    let dd = {
      data: data,
    };
    api.post("api/ChangeCoubonBranches", dd).then((res) => {
      console.log(res.data);
      alert.show("تم بنجاح", {
        timeout: 2000,
        type: "success",
      });
      GoBackAndTriggerMutation();
    });
  }
  async function openModal(ModalData) {
    await api
      .get("api/GetCouponBranches?Section_id=" + ModalData)
      .then((res) => {
        let theCouponBranches = res.data;
        let favorite = [];
        for (let index = 0; index < listOfBranches.length; index++) {
          let element = listOfBranches[index];
          let ss = false;

          for (let index2 = 0; index2 < theCouponBranches.length; index2++) {
            let element2 = theCouponBranches[index2];
            if (element2.Branch_id == element.id) {
              ss = true;
            }
          }

          var tempbranch = {
            id: element.id,
            branch_name: element.branch_name,
            status: ss,
            Section_id: ModalData,
          };
          favorite.push(tempbranch);
        }

        console.log("thetest");

        console.log(favorite);
        console.log("thetest");

        setfinalBranches(favorite);

        setModelState(true);

        console.log(theCouponBranches);
      });
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className=" col ">
          <div className="card">
            <div className="card-header bg-transparent">
              {newCompany == false ? (
                <div style={{ float: "right" }}>
                  <button
                    onClick={() => {
                      setChoose("branches");
                    }}
                    class="btn btn-icon btn-primary"
                    type="button"
                  >
                    <span class="btn-inner--icon">
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </span>
                  </button>
                  <h2 style={{ marginRight: "0.8em", display: "inline" }}>
                    الكوبونات :
                  </h2>

                  <div style={{ clear: "both" }}></div>
                </div>
              ) : (
                ""
              )}
            </div>
            {newCompany == false ? (
              <>
                <div className="card-body">
                  <div
                    style={{
                      backgroundColor: "#f4f0f0",
                      borderRadius: "20px",

                      padding: "10px",
                      marginBottom: "5%",
                    }}
                    className="row"
                  >
                    <div className="col-3">
                      <img
                        src={logo}
                        style={{
                          borderRadius: "8px",
                        }}
                        width="200"
                        height="200"
                      />
                    </div>
                    <div className="col-6">
                      <br />
                      <h1 style={{ color: "#234B55" }}>
                        {companyName} ({Branchname})
                      </h1>
                      <br />
                      <p>{FullDesc}</p>
                    </div>
                    <div className="col-3">
                      <br />
                      <h1 style={{ color: "#234B55" }}> مسؤول الفرع</h1>
                      <br />
                      <p>الإسم: {bname}</p>
                      <p>الجوال: {bphone}</p>
                    </div>
                  </div>
                  <div style={{ float: "left" }}>
                    <button
                      onClick={() => {
                        setnewCompany(true);
                        // setChoose("branches");
                      }}
                      class="btn btn-icon btn-danger"
                      type="button"
                    >
                      <span class="btn-inner--icon">إنشاء كوبون جديد</span>
                    </button>
                  </div>
                  {results ? (
                    results == "No_data" ? (
                      <div style={{ float: "right" }}>
                        <button
                          onClick={() => {
                            setChoose("branches");
                          }}
                          class="btn btn-icon btn-primary"
                          type="button"
                        >
                          <span class="btn-inner--icon">
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                          </span>
                        </button>
                        <h2
                          style={{
                            marginRight: "0.8em",
                            display: "inline",
                          }}
                        >
                          الكوبونات :
                        </h2>

                        <div style={{ clear: "both" }}></div>
                        <h2 style={{ marginTop: "0.8em" }}>لا يوجد بيانات</h2>
                      </div>
                    ) : (
                      <table className="table align-items-center table-flush">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col" data-sort="name">
                              الإسم
                            </th>
                            <th scope="col" data-sort="status">
                              النوع
                            </th>
                            <th scope="col" data-sort="completion">
                              القيمة
                            </th>
                            <th scope="col" data-sort="completion">
                              الكمية
                            </th>
                            <th scope="col" data-sort="completion">
                              الصلاحية
                            </th>
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                          </tr>
                        </thead>
                        <tbody className="list">
                          {results.map((coubon, index) => {
                            if (
                              coubon.category == localStorage.Currentcategory
                            ) {
                              return (
                                <>
                                  {coubon.type == "one_code" ? (
                                    <tr>
                                      <td
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <h3 style={{ TextAlign: "center" }}>
                                          {coubon.name}
                                        </h3>
                                      </td>
                                      <td
                                        colspan="2"
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <h3>كود منصات (إستخدام مرة واحدة)</h3>
                                      </td>
                                      <td
                                        className="name"
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <span className="text-lg">
                                          {coubon.amount - 1}
                                        </span>
                                      </td>
                                      <td
                                        className="name"
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <span className="text-lg">
                                          {coubon.end} شهر
                                        </span>
                                      </td>
                                      <td
                                        colspan="2"
                                        className="name"
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <button
                                          type="button"
                                          class="btn btn-default"
                                          onClick={() => {
                                            console.log("add new");
                                            setSection_id(coubon.Section_id);
                                            setcoubonName(coubon.name);
                                            setcoubonType(coubon.type);

                                            setvalue(coubon.value);
                                            setnewCompany(true);
                                            setedit(true);
                                            //selected(coubon.name, coubon.amount);
                                          }}
                                        >
                                          إضافة كوبونات
                                        </button>
                                      </td>
                                      <td className="name">
                                        <button
                                          type="button"
                                          class="btn"
                                          data-toggle="modal"
                                          data-target="#modal-default"
                                          onClick={() => {
                                            seteditModel(true);
                                            setSection_id(coubon.Section_id);
                                            setcoubonName(coubon.name);
                                          }}
                                        >
                                          تعديل
                                        </button>
                                      </td>
                                    </tr>
                                  ) : coubon.type == "all_code" ? (
                                    <tr>
                                      <td
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <h3 style={{ TextAlign: "center" }}>
                                          {coubon.name}
                                        </h3>
                                      </td>
                                      <td
                                        colspan="2"
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <h3>كود منصات </h3>
                                      </td>
                                      <td
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <span>لا ينتهي </span>
                                      </td>
                                      <td
                                        className="name"
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <span className="text-lg">
                                          {coubon.end} شهر
                                        </span>
                                      </td>
                                      <td
                                        colspan="2"
                                        className="name"
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      ></td>
                                      <td className="name">
                                        <button
                                          type="button"
                                          class="btn"
                                          data-toggle="modal"
                                          data-target="#modal-default"
                                          onClick={() => {
                                            seteditModel(true);
                                            setSection_id(coubon.Section_id);
                                            setcoubonName(coubon.name);
                                          }}
                                        >
                                          تعديل
                                        </button>
                                      </td>
                                    </tr>
                                  ) : (
                                    <tr>
                                      <td className="name">
                                        <span className="text-lg">
                                          {coubon.name}
                                        </span>
                                      </td>

                                      <td className="name">
                                        {coubon.type == "cash" ? (
                                          <span class="badge badge-pill badge-lg badge-secondary">
                                            <img
                                              className="avatar avatar-sm rounded-circle"
                                              src="/assets/img/icons/cash.jpg"
                                              height="40"
                                              width="40"
                                            />
                                          </span>
                                        ) : coubon.type == "basket" ? (
                                          <span class="badge badge-pill badge-lg badge-secondary">
                                            <img
                                              className="avatar avatar-sm rounded-circle"
                                              src="/assets/img/icons/basket.jpg"
                                              height="40"
                                              width="40"
                                            />
                                          </span>
                                        ) : coubon.type == "discount" ? (
                                          <span class="badge badge-pill badge-lg badge-secondary">
                                            <img
                                              className="avatar avatar-sm rounded-circle"
                                              src="/assets/img/icons/discount.jpg"
                                              height="40"
                                              width="40"
                                            />
                                          </span>
                                        ) : (
                                          ""
                                        )}
                                      </td>
                                      <td className="name">
                                        {coubon.type == "cash" ? (
                                          <span className="text-lg">
                                            {coubon.value}
                                          </span>
                                        ) : coubon.type == "basket" ? (
                                          <span className="text-lg">
                                            {coubon.value}
                                          </span>
                                        ) : coubon.type == "discount" ? (
                                          <span className="text-lg">
                                            {coubon.value}%
                                          </span>
                                        ) : (
                                          ""
                                        )}
                                      </td>

                                      <td className="name">
                                        <span className="text-lg">
                                          {coubon.amount - 1}
                                        </span>
                                      </td>

                                      <td className="name">
                                        <span className="text-lg">
                                          {coubon.end} شهر
                                        </span>
                                      </td>

                                      <td className="name">
                                        <button
                                          type="button"
                                          class="btn btn-default"
                                          onClick={() => {
                                            console.log("add new");
                                            setSection_id(coubon.Section_id);
                                            setcoubonName(coubon.name);
                                            setcoubonType(coubon.type);

                                            setvalue(coubon.value);
                                            setnewCompany(true);
                                            setedit(true);

                                            //selected(coubon.name, coubon.amount);
                                          }}
                                        >
                                          إضافة كوبونات
                                        </button>
                                      </td>
                                      <td className="name">
                                        <button
                                          type="button"
                                          class="btn"
                                          data-toggle="modal"
                                          data-target="#modal-default"
                                          onClick={() => {
                                            seteditModel(false);
                                            openModal(coubon.Section_id);
                                          }}
                                        >
                                          الفروع
                                        </button>
                                      </td>
                                      <td className="name">
                                        <button
                                          type="button"
                                          class="btn"
                                          data-toggle="modal"
                                          data-target="#modal-default"
                                          onClick={() => {
                                            seteditModel(true);
                                            setSection_id(coubon.Section_id);
                                            setcoubonName(coubon.name);
                                          }}
                                        >
                                          تعديل
                                        </button>
                                      </td>
                                    </tr>
                                  )}
                                </>
                              );
                            } else {
                              localStorage.Currentcategory = coubon.category;
                              return (
                                <>
                                  <tr>
                                    <td
                                      colspan="7"
                                      style={{ backgroundColor: "#faf8f8" }}
                                    >
                                      <h1 style={{ TextAlign: "center" }}>
                                        {coubon.category}
                                      </h1>
                                    </td>
                                  </tr>
                                  {coubon.type == "one_code" ? (
                                    <tr>
                                      <td
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <h3 style={{ TextAlign: "center" }}>
                                          {coubon.name}
                                        </h3>
                                      </td>
                                      <td
                                        colspan="2"
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <h3>كود منصات (إستخدام مرة واحدة)</h3>
                                      </td>
                                      <td
                                        className="name"
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <span className="text-lg">
                                          {coubon.amount - 1}
                                        </span>
                                      </td>
                                      <td
                                        className="name"
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <span className="text-lg">
                                          {coubon.end} شهر
                                        </span>
                                      </td>
                                      <td
                                        colspan="2"
                                        className="name"
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <button
                                          type="button"
                                          class="btn btn-default"
                                          onClick={() => {
                                            console.log("add new");
                                            setSection_id(coubon.Section_id);
                                            setcoubonName(coubon.name);
                                            setcoubonType(coubon.type);
                                            setvalue(coubon.value);
                                            setnewCompany(true);
                                            setedit(true);
                                            //selected(coubon.name, coubon.amount);
                                          }}
                                        >
                                          إضافة كوبونات
                                        </button>
                                      </td>
                                      <td className="name">
                                        <button
                                          type="button"
                                          class="btn"
                                          data-toggle="modal"
                                          data-target="#modal-default"
                                          onClick={() => {
                                            seteditModel(true);
                                            setSection_id(coubon.Section_id);
                                            setcoubonName(coubon.name);
                                          }}
                                        >
                                          تعديل
                                        </button>
                                      </td>
                                    </tr>
                                  ) : coubon.type == "all_code" ? (
                                    <tr>
                                      <td
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <h3 style={{ TextAlign: "center" }}>
                                          {coubon.name}
                                        </h3>
                                      </td>
                                      <td
                                        colspan="2"
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <h3>كود منصات </h3>
                                      </td>
                                      <td
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <span>لا ينتهي </span>
                                      </td>
                                      <td
                                        className="name"
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <span className="text-lg">
                                          {coubon.end} شهر
                                        </span>
                                      </td>
                                      <td
                                        colspan="2"
                                        className="name"
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      ></td>
                                      <td className="name">
                                        <button
                                          type="button"
                                          class="btn"
                                          data-toggle="modal"
                                          data-target="#modal-default"
                                          onClick={() => {
                                            seteditModel(true);
                                            setSection_id(coubon.Section_id);
                                            setcoubonName(coubon.name);
                                          }}
                                        >
                                          تعديل
                                        </button>
                                      </td>
                                    </tr>
                                  ) : (
                                    <tr>
                                      <td className="name">
                                        <span className="text-lg">
                                          {coubon.name}
                                        </span>
                                      </td>

                                      <td className="name">
                                        {coubon.type == "cash" ? (
                                          <span class="badge badge-pill badge-lg badge-secondary">
                                            <img
                                              className="avatar avatar-sm rounded-circle"
                                              src="/assets/img/icons/cash.jpg"
                                              height="40"
                                              width="40"
                                            />
                                          </span>
                                        ) : coubon.type == "basket" ? (
                                          <span class="badge badge-pill badge-lg badge-secondary">
                                            <img
                                              className="avatar avatar-sm rounded-circle"
                                              src="/assets/img/icons/basket.jpg"
                                              height="40"
                                              width="40"
                                            />
                                          </span>
                                        ) : coubon.type == "discount" ? (
                                          <span class="badge badge-pill badge-lg badge-secondary">
                                            <img
                                              className="avatar avatar-sm rounded-circle"
                                              src="/assets/img/icons/discount.jpg"
                                              height="40"
                                              width="40"
                                            />
                                          </span>
                                        ) : (
                                          ""
                                        )}
                                      </td>
                                      <td className="name">
                                        {coubon.type == "cash" ? (
                                          <span className="text-lg">
                                            {coubon.value}
                                          </span>
                                        ) : coubon.type == "basket" ? (
                                          <span className="text-lg">
                                            {coubon.value}
                                          </span>
                                        ) : coubon.type == "discount" ? (
                                          <span className="text-lg">
                                            {coubon.value}%
                                          </span>
                                        ) : (
                                          ""
                                        )}
                                      </td>

                                      <td className="name">
                                        <span className="text-lg">
                                          {coubon.amount - 1}
                                        </span>
                                      </td>
                                      <td className="name">
                                        <span className="text-lg">
                                          {coubon.end} شهر
                                        </span>
                                      </td>
                                      <td className="name">
                                        <button
                                          type="button"
                                          class="btn btn-default"
                                          onClick={() => {
                                            console.log("add new");
                                            setSection_id(coubon.Section_id);
                                            setcoubonName(coubon.name);
                                            setcoubonType(coubon.type);
                                            setvalue(coubon.value);
                                            setnewCompany(true);
                                            setedit(true);
                                            //selected(coubon.name, coubon.amount);
                                          }}
                                        >
                                          إضافة كوبونات
                                        </button>
                                      </td>
                                      <td className="name">
                                        <button
                                          type="button"
                                          class="btn"
                                          data-toggle="modal"
                                          data-target="#modal-default"
                                          onClick={() => {
                                            openModal(coubon.Section_id);
                                          }}
                                        >
                                          الفروع
                                        </button>
                                      </td>
                                      <td className="name">
                                        <button
                                          type="button"
                                          class="btn"
                                          data-toggle="modal"
                                          data-target="#modal-default"
                                          onClick={() => {
                                            seteditModel(true);
                                            setSection_id(coubon.Section_id);
                                            setcoubonName(coubon.name);
                                          }}
                                        >
                                          تعديل
                                        </button>
                                      </td>
                                    </tr>
                                  )}
                                </>
                              );
                            }
                          })}
                        </tbody>
                      </table>
                    )
                  ) : (
                    "لا يوجد كوبونات"
                  )}

                  {showSkeleton ? <Skeleton height={40} count={10} /> : ""}
                </div>
              </>
            ) : (
              <div className="card-body">
                {" "}
                {edit == false ? (
                  <NewCoubonForm
                    Branch_id={branch_id}
                    BracnhCode={BracnhCode}
                    GoBackAndTriggerMutation={GoBackAndTriggerMutation}
                    changenewCompany={changenewCompany}
                  />
                ) : (
                  <AddCoubonsForm
                    Section_id={Section_id}
                    coubonName={coubonName}
                    BracnhCode={BracnhCode}
                    value={value}
                    GoBackAndTriggerMutation={GoBackAndTriggerMutation}
                    changenewCompany={changenewCompany}
                    coubonType={coubonType}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Argon MODEL */}
      {editModel ? (
        <div
          class={ModelState ? "modal fade show" : "modal fade "}
          id="modal-default"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modal-default"
          aria-hidden={ModelState ? "false" : "true"}
          style={
            ModelState
              ? { display: "block", paddingRight: "14px" }
              : { display: "none" }
          }
        >
          <div
            class="modal-dialog modal- modal-dialog-centered modal-"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h6 class="modal-title" id="modal-title-default">
                  تعديل : {coubonName}
                </h6>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setModelState(false);
                  }}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div class="modal-body">
                <div dir="rtl" className="row">
                  <div className="col-lg-6">
                    <div className="form-group" style={{ textAlign: "right" }}>
                      <label className="form-control-label">إسم الكوبون</label>
                      <input
                        type="text"
                        name="coubonName"
                        onChange={(e) => {
                          setcoubonName(e.target.value);
                        }}
                        value={coubonName}
                        className="form-control"
                        placeholder="إسم الكوبون"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-link "
                  data-dismiss="modal"
                  style={{ float: "right" }}
                  onClick={() => {
                    setModelState(false);
                  }}
                >
                  إغلاق
                </button>
                <button
                  type="button"
                  class="btn btn-link "
                  data-dismiss="modal"
                  style={{ float: "left" }}
                  onClick={() => {
                    UpdateCoubontName(Section_id, coubonName);
                  }}
                >
                  حفظ
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          class={ModelState ? "modal fade show" : "modal fade "}
          id="modal-default"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modal-default"
          aria-hidden={ModelState ? "false" : "true"}
          style={
            ModelState
              ? { display: "block", paddingRight: "14px" }
              : { display: "none" }
          }
        >
          <div
            class="modal-dialog modal- modal-dialog-centered modal-"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h6 class="modal-title" id="modal-title-default">
                  الفروع التي يمكن صرف الكوبونات بها
                </h6>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setModelState(false);
                  }}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div class="modal-body">
                {finalBranches.length > 0 ? (
                  <>
                    <div className="table-responsive">
                      <div>
                        <table className="table align-items-center">
                          <thead className="thead-light">
                            <tr>
                              <th scope="col" className="sort" data-sort="name">
                                اسم الفرع
                              </th>
                              <th
                                scope="col"
                                className="sort"
                                data-sort="budget"
                              ></th>
                            </tr>
                          </thead>
                          <tbody className="list">
                            {finalBranches.map((listBranches, index) => {
                              return (
                                <>
                                  {" "}
                                  <tr>
                                    <td
                                      className="budget"
                                      style={{ float: "right" }}
                                    >
                                      {listBranches.branch_name}
                                    </td>
                                    <td>
                                      {listBranches.status ? (
                                        <button
                                          type="button"
                                          class="btn btn-danger"
                                          onClick={() => {
                                            changeBranches(
                                              false,
                                              listBranches.id
                                            );
                                          }}
                                        >
                                          إلغاء
                                        </button>
                                      ) : (
                                        <button
                                          type="button"
                                          class="btn btn-primary"
                                          onClick={() => {
                                            changeBranches(
                                              true,
                                              listBranches.id
                                            );
                                          }}
                                        >
                                          تفعيل
                                        </button>
                                      )}
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                ) : (
                  "لا يوجد بيانات"
                )}
                {showSkeleton ? <Skeleton height={40} count={10} /> : ""}
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-link "
                  data-dismiss="modal"
                  style={{ float: "right" }}
                  onClick={() => {
                    setModelState(false);
                  }}
                >
                  إغلاق
                </button>
                <button
                  type="button"
                  class="btn btn-link "
                  data-dismiss="modal"
                  style={{ float: "left" }}
                  onClick={() => {
                    let test = [];
                    for (let index = 0; index < finalBranches.length; index++) {
                      const element = finalBranches[index];

                      if (element.status == true) {
                        test.push(element);
                      }
                    }
                    if (test.length > 0) {
                      SaveBranches(finalBranches);
                      setModelState(false);
                    } else {
                      alert.show("يجب تفعيل فرع واحد على الأقل", {
                        timeout: 2000,
                        type: "danger",
                      });
                    }
                  }}
                >
                  حفظ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Argon MODEL */}
    </div>
  );
};

export default BranchCoubonTable;
