import React, { useState, useEffect } from "react";
import Admin_nav from "./Admin_nav";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import NewCoubonForm from "./NewCoubonForm";
import AddCoubonsForm from "./AddCoubonsForm";

import useAuth, { ProtectRoute } from "../contexts/auth.js";
import { GetCouponsBybranch } from "../services/api_get";

import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import { mutate } from "swr";

const BranchCoubonTable = ({
  branch_id,
  BracnhCode,
  companyName,
  setChoose,
}) => {
  const router = useRouter();
  const { user, isAuthenticated, loading } = useAuth();

  useEffect(() => {
    localStorage.Currentcategory = "";
    if (!isAuthenticated && !loading) Router.push("/login");
  }, [loading, isAuthenticated]);

  console.log("heeere");
  const [getType, setgetType] = useState("branch");
  const [cType, setcType] = useState("branch");
  const [Id, setId] = useState(branch_id);
  const { data, isLoading, isError } = GetCouponsBybranch(Id, getType);

  const results = isLoading ? false : data.data;
  console.log(results);
  const showSkeleton = isLoading || loading;

  const [newCompany, setnewCompany] = useState(false);
  const [overSection_id, setoverSection_id] = useState(false);
  const [UsedSection_id, setUsedSection_id] = useState(false);
  const [Section_id, setSection_id] = useState(false);
  const [value, setvalue] = useState(false);
  const [coubonName, setcoubonName] = useState(false);
  const [firstTime, setfirstTime] = useState(true);

  const [edit, setedit] = useState(false);
  const [Company, setCompany] = useState([]);
  const [resNew, setresNew] = useState([]);
  const [resUsed, setresUsed] = useState([]);
  const [resOver, setresOver] = useState([]);

  function GoBackAndTriggerMutation() {
    mutate("rabwa/GetCouponsBybranch?Id=" + branch_id + "&getType=branch");

    setedit(false);
    setnewCompany(false);

    //setnewCompany(false);
  }

  function getOverD(Section_id) {
    setgetType("over");
    setcType("over");
    setId(Section_id);
  }

  function getUsedD(Section_id) {
    setgetType("used");
    setcType("used");
    setId(Section_id);
  }

  if (firstTime && results) {
    setresNew(results.resNew);
    setresUsed(results.resUsed);
    setresOver(results.resOver);
    setfirstTime(false);
  }

  function changenewCompany() {
    setedit(false);
    setnewCompany(false);
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className=" col ">
          <div className="card">
            <div className="card-header bg-transparent">
              {cType == "branch" ? (
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
                  {results ? (
                    results == "No_data" ? (
                      <div style={{ float: "right" }}></div>
                    ) : cType == "branch" ? (
                      <>
                        <div class="nav-wrapper">
                          <ul
                            class="nav nav-pills nav-fill flex-column flex-md-row"
                            id="xx"
                            role="tablist"
                          >
                            <li class="nav-item">
                              <a
                                class="nav-link mb-sm-3 mb-md-0 active"
                                id="xx-1-tab"
                                data-toggle="tab"
                                href="#xx-1"
                                role="tab"
                                aria-controls="xx-1"
                                aria-selected="true"
                              >
                                <i class="ni ni-cloud-upload-96 mr-2"></i>
                                الكوبونات الفعالة
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link mb-sm-3 mb-md-0"
                                id="xx-2-tab"
                                data-toggle="tab"
                                href="#xx-2"
                                role="tab"
                                aria-controls="xx-2"
                                aria-selected="false"
                              >
                                <i class="ni ni-bell-55 mr-2"></i>الكوبونات
                                المستخدمة
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link mb-sm-3 mb-md-0"
                                id="xx-3-tab"
                                data-toggle="tab"
                                href="#xx-3"
                                role="tab"
                                aria-controls="xx-3"
                                aria-selected="false"
                              >
                                <i class="ni ni-calendar-grid-58 mr-2"></i>
                                الكوبونات المنتهية
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="card shadow">
                          <div class="card-body">
                            <div class="tab-content" id="myTabContent">
                              <div
                                class="tab-pane fade show active"
                                id="xx-1"
                                role="tabpanel"
                                aria-labelledby="xx-1-tab"
                              >
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
                                    </tr>
                                  </thead>
                                  <tbody className="list">
                                    {resNew.map((coubon, index) => {
                                      if (
                                        coubon.category ==
                                        localStorage.Currentcategory
                                      ) {
                                        return (
                                          <>
                                            {coubon.type == "one_code" ? (
                                              <tr>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3
                                                    style={{
                                                      TextAlign: "center",
                                                    }}
                                                  >
                                                    {coubon.name}
                                                  </h3>
                                                </td>
                                                <td
                                                  colspan="2"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3>
                                                    كود منصات (إستخدام مرة
                                                    واحدة)
                                                  </h3>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.amount - 1}
                                                  </span>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.end} شهر
                                                  </span>
                                                </td>
                                              </tr>
                                            ) : coubon.type == "all_code" ? (
                                              <tr>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3
                                                    style={{
                                                      TextAlign: "center",
                                                    }}
                                                  >
                                                    {coubon.name}
                                                  </h3>
                                                </td>
                                                <td
                                                  colspan="2"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3>كود منصات </h3>
                                                </td>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span>لا ينتهي </span>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.end} شهر
                                                  </span>
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
                                                  ) : coubon.type ==
                                                    "basket" ? (
                                                    <span class="badge badge-pill badge-lg badge-secondary">
                                                      <img
                                                        className="avatar avatar-sm rounded-circle"
                                                        src="/assets/img/icons/basket.jpg"
                                                        height="40"
                                                        width="40"
                                                      />
                                                    </span>
                                                  ) : coubon.type ==
                                                    "discount" ? (
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
                                                  ) : coubon.type ==
                                                    "basket" ? (
                                                    <span className="text-lg">
                                                      {coubon.value}
                                                    </span>
                                                  ) : coubon.type ==
                                                    "discount" ? (
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
                                              </tr>
                                            )}
                                          </>
                                        );
                                      } else {
                                        localStorage.Currentcategory =
                                          coubon.category;
                                        return (
                                          <>
                                            <tr>
                                              <td
                                                colspan="5"
                                                style={{
                                                  backgroundColor: "#faf8f8",
                                                }}
                                              >
                                                <h1
                                                  style={{
                                                    TextAlign: "center",
                                                  }}
                                                >
                                                  {coubon.category}
                                                </h1>
                                              </td>
                                            </tr>
                                            {coubon.type == "one_code" ? (
                                              <tr>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3
                                                    style={{
                                                      TextAlign: "center",
                                                    }}
                                                  >
                                                    {coubon.name}
                                                  </h3>
                                                </td>
                                                <td
                                                  colspan="2"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3>
                                                    كود منصات (إستخدام مرة
                                                    واحدة)
                                                  </h3>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.amount - 1}
                                                  </span>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.end} شهر
                                                  </span>
                                                </td>
                                              </tr>
                                            ) : coubon.type == "all_code" ? (
                                              <tr>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3
                                                    style={{
                                                      TextAlign: "center",
                                                    }}
                                                  >
                                                    {coubon.name}
                                                  </h3>
                                                </td>
                                                <td
                                                  colspan="2"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3>كود منصات </h3>
                                                </td>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span>لا ينتهي </span>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.end} شهر
                                                  </span>
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
                                                  ) : coubon.type ==
                                                    "basket" ? (
                                                    <span class="badge badge-pill badge-lg badge-secondary">
                                                      <img
                                                        className="avatar avatar-sm rounded-circle"
                                                        src="/assets/img/icons/basket.jpg"
                                                        height="40"
                                                        width="40"
                                                      />
                                                    </span>
                                                  ) : coubon.type ==
                                                    "discount" ? (
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
                                                  ) : coubon.type ==
                                                    "basket" ? (
                                                    <span className="text-lg">
                                                      {coubon.value}
                                                    </span>
                                                  ) : coubon.type ==
                                                    "discount" ? (
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
                                              </tr>
                                            )}
                                          </>
                                        );
                                      }
                                    })}
                                  </tbody>
                                </table>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="xx-2"
                                role="tabpanel"
                                aria-labelledby="xx-2-tab"
                              >
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
                                      <th scope="col" data-sort="completion">
                                        التفاصيل
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="list">
                                    {resUsed.map((coubon, index) => {
                                      if (
                                        coubon.category ==
                                        localStorage.Currentcategory
                                      ) {
                                        return (
                                          <>
                                            {coubon.type == "one_code" ? (
                                              <tr>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3
                                                    style={{
                                                      TextAlign: "center",
                                                    }}
                                                  >
                                                    {coubon.name}
                                                  </h3>
                                                </td>
                                                <td
                                                  colspan="2"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3>
                                                    كود منصات (إستخدام مرة
                                                    واحدة)
                                                  </h3>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.amount - 1}
                                                  </span>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.end} شهر
                                                  </span>
                                                </td>
                                                <td className="name">
                                                  <button
                                                    type="button"
                                                    class="btn"
                                                    onClick={() => {
                                                      getUsedD(
                                                        coubon.Section_id
                                                      );
                                                    }}
                                                  >
                                                    التفاصيل
                                                  </button>
                                                </td>
                                              </tr>
                                            ) : coubon.type == "all_code" ? (
                                              <tr>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3
                                                    style={{
                                                      TextAlign: "center",
                                                    }}
                                                  >
                                                    {coubon.name}
                                                  </h3>
                                                </td>
                                                <td
                                                  colspan="2"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3>كود منصات </h3>
                                                </td>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span>لا ينتهي </span>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.end} شهر
                                                  </span>
                                                </td>
                                                <td className="name">
                                                  <button
                                                    type="button"
                                                    class="btn"
                                                    onClick={() => {
                                                      getUsedD(
                                                        coubon.Section_id
                                                      );
                                                    }}
                                                  >
                                                    التفاصيل
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
                                                  ) : coubon.type ==
                                                    "basket" ? (
                                                    <span class="badge badge-pill badge-lg badge-secondary">
                                                      <img
                                                        className="avatar avatar-sm rounded-circle"
                                                        src="/assets/img/icons/basket.jpg"
                                                        height="40"
                                                        width="40"
                                                      />
                                                    </span>
                                                  ) : coubon.type ==
                                                    "discount" ? (
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
                                                  ) : coubon.type ==
                                                    "basket" ? (
                                                    <span className="text-lg">
                                                      {coubon.value}
                                                    </span>
                                                  ) : coubon.type ==
                                                    "discount" ? (
                                                    <span className="text-lg">
                                                      {coubon.value}%
                                                    </span>
                                                  ) : (
                                                    ""
                                                  )}
                                                </td>

                                                <td className="name">
                                                  <span className="text-lg">
                                                    {coubon.amount}
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
                                                    class="btn"
                                                    onClick={() => {
                                                      getUsedD(
                                                        coubon.Section_id
                                                      );
                                                    }}
                                                  >
                                                    التفاصيل
                                                  </button>
                                                </td>
                                              </tr>
                                            )}
                                          </>
                                        );
                                      } else {
                                        localStorage.Currentcategory =
                                          coubon.category;
                                        return (
                                          <>
                                            <tr>
                                              <td
                                                colspan="5"
                                                style={{
                                                  backgroundColor: "#faf8f8",
                                                }}
                                              >
                                                <h1
                                                  style={{
                                                    TextAlign: "center",
                                                  }}
                                                >
                                                  {coubon.category}
                                                </h1>
                                              </td>
                                            </tr>
                                            {coubon.type == "one_code" ? (
                                              <tr>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3
                                                    style={{
                                                      TextAlign: "center",
                                                    }}
                                                  >
                                                    {coubon.name}
                                                  </h3>
                                                </td>
                                                <td
                                                  colspan="2"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3>
                                                    كود منصات (إستخدام مرة
                                                    واحدة)
                                                  </h3>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.amount}
                                                  </span>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.end} شهر
                                                  </span>
                                                </td>
                                                <td className="name">
                                                  <button
                                                    type="button"
                                                    class="btn"
                                                    onClick={() => {
                                                      getUsedD(
                                                        coubon.Section_id
                                                      );
                                                    }}
                                                  >
                                                    التفاصيل
                                                  </button>
                                                </td>
                                              </tr>
                                            ) : coubon.type == "all_code" ? (
                                              <tr>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3
                                                    style={{
                                                      TextAlign: "center",
                                                    }}
                                                  >
                                                    {coubon.name}
                                                  </h3>
                                                </td>
                                                <td
                                                  colspan="2"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3>كود منصات </h3>
                                                </td>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span>لا ينتهي </span>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.end} شهر
                                                  </span>
                                                </td>
                                                <td className="name">
                                                  <button
                                                    type="button"
                                                    class="btn"
                                                    onClick={() => {
                                                      getUsedD(
                                                        coubon.Section_id
                                                      );
                                                    }}
                                                  >
                                                    التفاصيل
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
                                                  ) : coubon.type ==
                                                    "basket" ? (
                                                    <span class="badge badge-pill badge-lg badge-secondary">
                                                      <img
                                                        className="avatar avatar-sm rounded-circle"
                                                        src="/assets/img/icons/basket.jpg"
                                                        height="40"
                                                        width="40"
                                                      />
                                                    </span>
                                                  ) : coubon.type ==
                                                    "discount" ? (
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
                                                  ) : coubon.type ==
                                                    "basket" ? (
                                                    <span className="text-lg">
                                                      {coubon.value}
                                                    </span>
                                                  ) : coubon.type ==
                                                    "discount" ? (
                                                    <span className="text-lg">
                                                      {coubon.value}%
                                                    </span>
                                                  ) : (
                                                    ""
                                                  )}
                                                </td>

                                                <td className="name">
                                                  <span className="text-lg">
                                                    {coubon.amount}
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
                                                    class="btn"
                                                    onClick={() => {
                                                      getUsedD(
                                                        coubon.Section_id
                                                      );
                                                    }}
                                                  >
                                                    التفاصيل
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
                              </div>{" "}
                              <div
                                class="tab-pane fade"
                                id="xx-3"
                                role="tabpanel"
                                aria-labelledby="xx-3-tab"
                              >
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
                                      <th scope="col" data-sort="completion">
                                        التفاصيل
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="list">
                                    {resOver.map((coubon, index) => {
                                      if (
                                        coubon.category ==
                                        localStorage.Currentcategory
                                      ) {
                                        return (
                                          <>
                                            {coubon.type == "one_code" ? (
                                              <tr>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3
                                                    style={{
                                                      TextAlign: "center",
                                                    }}
                                                  >
                                                    {coubon.name}
                                                  </h3>
                                                </td>
                                                <td
                                                  colspan="2"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3>
                                                    كود منصات (إستخدام مرة
                                                    واحدة)
                                                  </h3>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.amount}
                                                  </span>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.end} شهر
                                                  </span>
                                                </td>
                                                <td className="name">
                                                  <button
                                                    type="button"
                                                    class="btn"
                                                    data-toggle="modal"
                                                    data-target="#modal-default"
                                                    onClick={() => {
                                                      getOverD(
                                                        coubon.Section_id
                                                      );
                                                    }}
                                                  >
                                                    التفاصيل
                                                  </button>
                                                </td>
                                              </tr>
                                            ) : coubon.type == "all_code" ? (
                                              <tr>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3
                                                    style={{
                                                      TextAlign: "center",
                                                    }}
                                                  >
                                                    {coubon.name}
                                                  </h3>
                                                </td>
                                                <td
                                                  colspan="2"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3>كود منصات </h3>
                                                </td>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span>لا ينتهي </span>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.end} شهر
                                                  </span>
                                                </td>
                                                <td className="name">
                                                  <button
                                                    type="button"
                                                    class="btn"
                                                    data-toggle="modal"
                                                    data-target="#modal-default"
                                                    onClick={() => {
                                                      getOverD(
                                                        coubon.Section_id
                                                      );
                                                    }}
                                                  >
                                                    التفاصيل
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
                                                  ) : coubon.type ==
                                                    "basket" ? (
                                                    <span class="badge badge-pill badge-lg badge-secondary">
                                                      <img
                                                        className="avatar avatar-sm rounded-circle"
                                                        src="/assets/img/icons/basket.jpg"
                                                        height="40"
                                                        width="40"
                                                      />
                                                    </span>
                                                  ) : coubon.type ==
                                                    "discount" ? (
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
                                                  ) : coubon.type ==
                                                    "basket" ? (
                                                    <span className="text-lg">
                                                      {coubon.value}
                                                    </span>
                                                  ) : coubon.type ==
                                                    "discount" ? (
                                                    <span className="text-lg">
                                                      {coubon.value}%
                                                    </span>
                                                  ) : (
                                                    ""
                                                  )}
                                                </td>

                                                <td className="name">
                                                  <span className="text-lg">
                                                    {coubon.amount}
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
                                                    class="btn"
                                                    data-toggle="modal"
                                                    data-target="#modal-default"
                                                    onClick={() => {
                                                      getOverD(
                                                        coubon.Section_id
                                                      );
                                                    }}
                                                  >
                                                    التفاصيل
                                                  </button>
                                                </td>
                                              </tr>
                                            )}
                                          </>
                                        );
                                      } else {
                                        localStorage.Currentcategory =
                                          coubon.category;
                                        return (
                                          <>
                                            <tr>
                                              <td
                                                colspan="5"
                                                style={{
                                                  backgroundColor: "#faf8f8",
                                                }}
                                              >
                                                <h1
                                                  style={{
                                                    TextAlign: "center",
                                                  }}
                                                >
                                                  {coubon.category}
                                                </h1>
                                              </td>
                                            </tr>
                                            {coubon.type == "one_code" ? (
                                              <tr>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3
                                                    style={{
                                                      TextAlign: "center",
                                                    }}
                                                  >
                                                    {coubon.name}
                                                  </h3>
                                                </td>
                                                <td
                                                  colspan="2"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3>
                                                    كود منصات (إستخدام مرة
                                                    واحدة)
                                                  </h3>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.amount}
                                                  </span>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.end} شهر
                                                  </span>
                                                </td>
                                                <td className="name">
                                                  <button
                                                    type="button"
                                                    class="btn"
                                                    data-toggle="modal"
                                                    data-target="#modal-default"
                                                    onClick={() => {
                                                      getOverD(
                                                        coubon.Section_id
                                                      );
                                                    }}
                                                  >
                                                    التفاصيل
                                                  </button>
                                                </td>
                                              </tr>
                                            ) : coubon.type == "all_code" ? (
                                              <tr>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3
                                                    style={{
                                                      TextAlign: "center",
                                                    }}
                                                  >
                                                    {coubon.name}
                                                  </h3>
                                                </td>
                                                <td
                                                  colspan="2"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <h3>كود منصات </h3>
                                                </td>
                                                <td
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span>لا ينتهي </span>
                                                </td>
                                                <td
                                                  className="name"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(194 224 160)",
                                                  }}
                                                >
                                                  <span className="text-lg">
                                                    {coubon.end} شهر
                                                  </span>
                                                </td>
                                                <td className="name">
                                                  <button
                                                    type="button"
                                                    class="btn"
                                                    data-toggle="modal"
                                                    data-target="#modal-default"
                                                    onClick={() => {
                                                      getOverD(
                                                        coubon.Section_id
                                                      );
                                                    }}
                                                  >
                                                    التفاصيل
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
                                                  ) : coubon.type ==
                                                    "basket" ? (
                                                    <span class="badge badge-pill badge-lg badge-secondary">
                                                      <img
                                                        className="avatar avatar-sm rounded-circle"
                                                        src="/assets/img/icons/basket.jpg"
                                                        height="40"
                                                        width="40"
                                                      />
                                                    </span>
                                                  ) : coubon.type ==
                                                    "discount" ? (
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
                                                  ) : coubon.type ==
                                                    "basket" ? (
                                                    <span className="text-lg">
                                                      {coubon.value}
                                                    </span>
                                                  ) : coubon.type ==
                                                    "discount" ? (
                                                    <span className="text-lg">
                                                      {coubon.value}%
                                                    </span>
                                                  ) : (
                                                    ""
                                                  )}
                                                </td>

                                                <td className="name">
                                                  <span className="text-lg">
                                                    {coubon.amount}
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
                                                    class="btn"
                                                    data-toggle="modal"
                                                    data-target="#modal-default"
                                                    onClick={() => {
                                                      getOverD(
                                                        coubon.Section_id
                                                      );
                                                    }}
                                                  >
                                                    التفاصيل
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : cType == "used" ? (
                      <>
                        <div style={{ float: "right" }}>
                          <button
                            onClick={() => {
                              setcType("branch");
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
                          <h2
                            style={{ marginRight: "0.8em", display: "inline" }}
                          >
                            العودة الى الخلف
                          </h2>

                          <div style={{ clear: "both" }}></div>
                        </div>
                        <table
                          dir="rtl"
                          className="table align-items-center table-flush"
                          style={{ textAlign: "right" }}
                        >
                          <thead className="thead-light">
                            <tr>
                              <th scope="col" data-sort="name">
                                إسم المستفيد
                              </th>
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
                                مرسل
                              </th>
                              <th scope="col" data-sort="completion">
                                ينتهي
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list">
                            {" "}
                            {results.map((coubon, index) => {
                              let d1 = new Date();
                              let d2 = new Date(coubon.Assigned_at);
                              let sentChe = true;
                              if (d1.getTime() < d2.getTime()) {
                                sentChe = false;
                              }
                              return (
                                <>
                                  {coubon.couponType == "one_code" ? (
                                    <tr>
                                      <td>
                                        <p>{coubon.Name}</p>
                                      </td>
                                      <td>
                                        <p>{coubon.name}</p>
                                      </td>
                                      <td colspan="2">
                                        <p>كود منصات (إستخدام مرة واحدة)</p>
                                      </td>

                                      <td className="name">
                                        <p className="">
                                          {coubon.Assigned_at}{" "}
                                        </p>
                                      </td>
                                      <td colspan="1" className="name"></td>
                                    </tr>
                                  ) : coubon.couponType == "all_code" ? (
                                    <tr>
                                      <td>
                                        <p>{coubon.Name}</p>
                                      </td>
                                      <td
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <p>{coubon.name}</p>
                                      </td>
                                      <td colspan="3">
                                        <p>كود منصات </p>
                                      </td>
                                      <td className="name">
                                        <p className="">
                                          {coubon.Assigned_at}{" "}
                                        </p>
                                      </td>
                                      <td colspan="1" className="name"></td>
                                    </tr>
                                  ) : (
                                    <tr>
                                      <td>
                                        <p>{coubon.Name}</p>
                                      </td>
                                      <td className="name">
                                        <p className="">{coubon.name}</p>
                                      </td>

                                      <td className="name">
                                        {coubon.couponType == "cash" ? (
                                          <span class="badge badge-pill badge-lg badge-secondary">
                                            <img
                                              className="avatar avatar-sm rounded-circle"
                                              src="/assets/img/icons/cash.jpg"
                                              height="40"
                                              width="40"
                                            />
                                          </span>
                                        ) : coubon.couponType == "basket" ? (
                                          <span class="badge badge-pill badge-lg badge-secondary">
                                            <img
                                              className="avatar avatar-sm rounded-circle"
                                              src="/assets/img/icons/basket.jpg"
                                              height="40"
                                              width="40"
                                            />
                                          </span>
                                        ) : coubon.couponType == "discount" ? (
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
                                        {coubon.couponType == "cash" ? (
                                          <p className="">{coubon.value}</p>
                                        ) : coubon.couponType == "basket" ? (
                                          <p className="">{coubon.value}</p>
                                        ) : coubon.couponType == "discount" ? (
                                          <p className="">{coubon.value}%</p>
                                        ) : (
                                          ""
                                        )}
                                      </td>

                                      <td className="name">
                                        <p className="">
                                          {coubon.Assigned_at}{" "}
                                        </p>
                                      </td>
                                      <td className="name">
                                        <p className="">{coubon.Ends_At} </p>
                                      </td>
                                    </tr>
                                  )}
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                      </>
                    ) : cType == "over" ? (
                      <>
                        {" "}
                        <div style={{ float: "right" }}>
                          <button
                            onClick={() => {
                              setcType("branch");
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
                          <h2
                            style={{ marginRight: "0.8em", display: "inline" }}
                          >
                            العودة الى الخلف
                          </h2>

                          <div style={{ clear: "both" }}></div>
                        </div>
                        <table
                          dir="rtl"
                          className="table align-items-center table-flush"
                          style={{ textAlign: "right" }}
                        >
                          <thead className="thead-light">
                            <tr>
                              <th scope="col" data-sort="name">
                                إسم المستفيد
                              </th>
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
                                مرسل
                              </th>
                              <th scope="col" data-sort="completion">
                                ينتهي
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list">
                            {" "}
                            {results.map((coubon, index) => {
                              let d1 = new Date();
                              let d2 = new Date(coubon.Assigned_at);
                              let sentChe = true;
                              if (d1.getTime() < d2.getTime()) {
                                sentChe = false;
                              }
                              return (
                                <>
                                  {coubon.couponType == "one_code" ? (
                                    <tr>
                                      <td>
                                        <p>{coubon.Name}</p>
                                      </td>
                                      <td>
                                        <p>{coubon.name}</p>
                                      </td>
                                      <td colspan="2">
                                        <p>كود منصات (إستخدام مرة واحدة)</p>
                                      </td>

                                      <td className="name">
                                        <p className="">
                                          {coubon.Assigned_at}{" "}
                                        </p>
                                      </td>
                                      <td colspan="1" className="name"></td>
                                    </tr>
                                  ) : coubon.couponType == "all_code" ? (
                                    <tr>
                                      <td>
                                        <p>{coubon.Name}</p>
                                      </td>
                                      <td
                                        style={{
                                          backgroundColor: "rgb(194 224 160)",
                                        }}
                                      >
                                        <p>{coubon.name}</p>
                                      </td>
                                      <td colspan="3">
                                        <p>كود منصات </p>
                                      </td>
                                      <td className="name">
                                        <p className="">
                                          {coubon.Assigned_at}{" "}
                                        </p>
                                      </td>
                                      <td colspan="1" className="name"></td>
                                    </tr>
                                  ) : (
                                    <tr>
                                      <td>
                                        <p>{coubon.Name}</p>
                                      </td>
                                      <td className="name">
                                        <p className="">{coubon.name}</p>
                                      </td>

                                      <td className="name">
                                        {coubon.couponType == "cash" ? (
                                          <span class="badge badge-pill badge-lg badge-secondary">
                                            <img
                                              className="avatar avatar-sm rounded-circle"
                                              src="/assets/img/icons/cash.jpg"
                                              height="40"
                                              width="40"
                                            />
                                          </span>
                                        ) : coubon.couponType == "basket" ? (
                                          <span class="badge badge-pill badge-lg badge-secondary">
                                            <img
                                              className="avatar avatar-sm rounded-circle"
                                              src="/assets/img/icons/basket.jpg"
                                              height="40"
                                              width="40"
                                            />
                                          </span>
                                        ) : coubon.couponType == "discount" ? (
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
                                        {coubon.couponType == "cash" ? (
                                          <p className="">{coubon.value}</p>
                                        ) : coubon.couponType == "basket" ? (
                                          <p className="">{coubon.value}</p>
                                        ) : coubon.couponType == "discount" ? (
                                          <p className="">{coubon.value}%</p>
                                        ) : (
                                          ""
                                        )}
                                      </td>

                                      <td className="name">
                                        <p className="">
                                          {coubon.Assigned_at}{" "}
                                        </p>
                                      </td>
                                      <td className="name">
                                        <p className="">{coubon.Ends_At} </p>
                                      </td>
                                    </tr>
                                  )}
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                      </>
                    ) : (
                      ""
                    )
                  ) : (
                    "لا يوجد كوبونات"
                  )}

                  {showSkeleton ? <Skeleton height={40} count={10} /> : ""}
                </div>
              </>
            ) : (
              <div className="card-body"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchCoubonTable;
