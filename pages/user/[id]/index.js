import { Chart } from "@bit/primefaces.primereact.chart";
import React, { useState, useEffect } from "react";
import { set } from "js-cookie";

import api from "../../../services/Api";

import { Getuserss2, UserStatistics } from "../../../services/api_get";
import Skeleton from "react-loading-skeleton";
import useAuth, { ProtectRoute } from "../../../contexts/auth.js";
import { useAlert } from "react-alert";
import { mutate } from "swr";
import { useRouter } from "next/router";

function Users() {
  const [PieCartDataNumbers, setPieCartDataNumbers] = useState([]);
  const [PieCartDataMoney, setPieCartDataMoney] = useState([]);
  const [BarChartDataNumbers, setBarChartDataNumbers] = useState([]);
  const [BarChartDataMoney, setBarChartDataMoney] = useState([]);
  const router = useRouter();

  //const [project,setProject] = useState(false);
  const [request, setrequest] = useState("firstTime");

  const { id } = router.query;

  console.log(id);

  const alert = useAlert();

  const [name, setname] = useState(0);
  const [members, setmembers] = useState(0);
  const [last_coubon, setlast_coubon] = useState(0);
  const [total_coubons, settotal_coubons] = useState(0);
  const [piority, setpiority] = useState(0);
  const [page, setpage] = useState(1);
  const [Scity, setScity] = useState("جدة");
  const [Saera, setSaera] = useState("all");
  const [Scat, setScat] = useState(8);
  const [SsearchName, setSsearchName] = useState("");
  const [SsearchPhone, setSsearchPhone] = useState("");
  const [RsName, setRsName] = useState(false);
  const [RsPhone, setRsPhone] = useState(false);

  const [spinner, setspinner] = useState(false);

  const [TheSelectedcategory, setTheSelectedcategory] = useState(8);
  const [TheUser, setTheUser] = useState([]);
  const [user_info, setuser_info] = useState([]);

  const { user, isAuthenticated, loading } = useAuth();

  const {
    UserStatisticsData,
    UserStatisticsisLoading,
    UserStatisticsisError,
  } = UserStatistics(id);

  const UserStatisticsresults =
    UserStatisticsData == false ? false : UserStatisticsData;

  const showSkeleton2 = UserStatisticsisLoading || loading;

  const [firstTime, setfirstTime] = useState(true);
  const [newState, setnewState] = useState(true);
  const [statAll, setstatAll] = useState([]);
  const [coubons, setcoubons] = useState([]);
  const [user_sent_coubons, setuser_sent_coubons] = useState([]);
  const [user_used_coubons, setuser_used_coubons] = useState([]);
  const [Aluser_over_coubonsl, setAluser_over_coubonsl] = useState([]);

  const [list, updateList] = useState([]);
  const [allowed, setallowed] = useState(false);

  function GoBackAndTriggerMutation() {
    setmodalType("cards");
  }

  if (UserStatisticsresults && newState) {
    let testState = UserStatisticsresults.data;

    console.log(testState);

    setuser_info(testState.user_info);
    setuser_sent_coubons(testState.user_sent_coubons);
    setuser_used_coubons(testState.user_used_coubons);
    setAluser_over_coubonsl(testState.Aluser_over_coubonsl);

    let TheYear = testState.theYear;
    setstatAll(testState.All);
    let months = TheYear.months;

    setPieCartDataNumbers({
      labels: ["المرسلة", "المستخدمة"],
      datasets: [
        {
          data: [TheYear.sentTotalCount, TheYear.usedTotalCount],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    });

    setPieCartDataMoney({
      labels: ["المرسلة", "المستخدمة"],
      datasets: [
        {
          data: [TheYear.sentTotal, TheYear.usedTotal],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    });
    setBarChartDataNumbers({
      labels: [
        "يناير",
        "فبراير",
        "مارس",
        "أبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ],
      datasets: [
        {
          label: "الكوبونات المصروفة السنة الحالية",
          backgroundColor: "#42A5F5",
          data: [
            0,
            0,
            0,
            0,
            0,
            0,
            months.JulyTotalCount,
            months.AugustTotalCount,
            0,
            0,
            0,
            0,
          ],
        },
      ],
    });

    setBarChartDataMoney({
      labels: [
        "يناير",
        "فبراير",
        "مارس",
        "أبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ],
      datasets: [
        {
          label: "الكوبونات المصروفة السنة الحالية",
          backgroundColor: "#42A5F5",
          data: [
            0,
            0,
            0,
            0,
            0,
            0,
            months.JulyTotal,
            months.AugustTotal,
            0,
            0,
            0,
            0,
          ],
        },
      ],
    });
    setnewState(false);
  }

  /*
    const { data, isLoading, isError } = GetCCAs();

    const results = isLoading ? false : data.data;
    */
  const [project, setProject] = useState(false);
  const [choose, setChoose] = useState("category");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [branch, setBranch] = useState("");
  const [pool, setpool] = useState(false);
  const [coubonName, setcoubonName] = useState("");
  const [pool_total, setpool_total] = useState(0);

  function UpdatePool(amount, section, scoubonName) {
    setpool(section);
    setcoubonName(scoubonName);
    setpool_total(amount);
  }

  function updatesetstep(thes) {
    setStep(thes);
  }

  function myEditUser(theSelectedUser) {
    console.log(theSelectedUser);
    setTheUser(theSelectedUser);
    setStep(2);
  }

  function order() {
    if (request == "firstTime") {
      setrequest("custom");
    }
    setRsName("false");
    setRsPhone("false");
  }

  function filter() {
    if (request == "firstTime") {
      setrequest("custom");
    }

    setRsName("false");
    setRsPhone("false");
    setScity(TheSelectedCity);
    setSaera(TheSelectedaera);
    setScat(TheSelectedcategory);
  }

  function phoneS() {
    if (request == "firstTime") {
      setrequest("custom");
    }

    setRsName("false");
    setRsPhone(SsearchPhone);
  }

  function NameS() {
    if (request == "firstTime") {
      setrequest("custom");
    }

    setRsName(SsearchName);
    setRsPhone("false");
  }

  function updateArrayall() {
    console.log("here");
    updateList(users);
    setallowed(true);
    $.each($("input[name='sport']"), function () {
      $(this).prop("checked", true);
    });
  }

  function updateArray(data) {
    let favorite = list;
    favorite.push(data);

    updateList(favorite);
    setallowed(true);

    //  setPersonNeeds((PersonNeeds) => PersonNeeds.concat(data));
    // setPersonNeeds((PersonNeeds) => [...PersonNeeds, data]);
  }
  function removeUserall() {
    updateList([]);
    setallowed(false);
    $.each($("input[name='sport']"), function () {
      $(this).prop("checked", false);
    });
  }

  const options = [
    { name: "Swedish", value: "sv" },
    { name: "English", value: "en" },
    {
      type: "group",
      name: "Group name",
      items: [{ name: "Spanish", value: "es" }],
    },
  ];

  const [step, setStep] = useState(1);

  let step2 = step;
  return (
    <div className="container mt-4">
      {UserStatisticsresults ? (
        user_info.length > 0 ? (
          <body className="rtl g-sidenav-show g-sidenav-pinned" dir="rtl">
            <>
              <div class="row">
                <div class="col-3">
                  {" "}
                  <h3>اسم المستفيد</h3>
                </div>

                <div class="col-3">{user_info[0].Name}</div>
                <div class="col-3">
                  <h3>رقم الجوال</h3>
                </div>
                <div class="col-3">{user_info[0].phone}</div>
              </div>
              <div class="row">
                <div class="col-3">
                  <h3>أخر كوبون</h3>
                </div>
                <div class="col-3">{user_info[0].lastCoubon}</div>
                <div class="col-3">
                  <h3>المصروف</h3>
                </div>
                <div class="col-3">{user_info[0].totalCoubons}</div>
              </div>
              <div class="row">
                <div class="col-3">
                  <h3>الأولوية</h3>
                </div>
                <div class="col-3">{user_info[0].priority}</div>
                <div class="col-3">
                  <h3>عدد الأفراد</h3>
                </div>
                <div class="col-3">{user_info[0].mempersCount}</div>
              </div>
              <div class="row">
                <div class="col-3">
                  <h3>الإيميل</h3>
                </div>
                <div class="col-3">{user_info[0].email}</div>
              </div>
              <hr />

              <div class="card card-stats">
                <div class="card-body">
                  <div
                    style={{
                      verticalAlign: "top",
                      display: "inline-block",
                      textAlign: "center",
                      width: "76px",
                    }}
                  >
                    <img
                      src="https://www.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Grandfather-512.png"
                      height="70px"
                      width="70px"
                    />
                    <h1 style={{ display: "block" }}>{user_info[0].man}</h1>
                  </div>{" "}
                  <div
                    style={{
                      verticalAlign: "top",
                      display: "inline-block",
                      textAlign: "center",
                      width: "76px",
                    }}
                  >
                    <img
                      src="https://www.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Grandfather-512.png"
                      height="70px"
                      width="70px"
                    />
                    <h1 style={{ display: "block" }}>{user_info[0].women}</h1>
                  </div>{" "}
                  <div
                    style={{
                      verticalAlign: "top",
                      display: "inline-block",
                      textAlign: "center",
                      width: "76px",
                    }}
                  >
                    <img
                      src="https://www.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Grandfather-512.png"
                      height="70px"
                      width="70px"
                    />
                    <h1 style={{ display: "block" }}>
                      {user_info[0].young_men}
                    </h1>
                  </div>{" "}
                  <div
                    style={{
                      verticalAlign: "top",
                      display: "inline-block",
                      textAlign: "center",
                      width: "76px",
                    }}
                  >
                    <img
                      src="https://www.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Grandfather-512.png"
                      height="70px"
                      width="70px"
                    />
                    <h1 style={{ display: "block" }}>
                      {user_info[0].young_women}
                    </h1>
                  </div>{" "}
                  <div
                    style={{
                      verticalAlign: "top",
                      display: "inline-block",
                      textAlign: "center",
                      width: "76px",
                    }}
                  >
                    <img
                      src="https://www.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Grandfather-512.png"
                      height="70px"
                      width="70px"
                    />
                    <h1 style={{ display: "block" }}>{user_info[0].boy}</h1>
                  </div>{" "}
                  <div
                    style={{
                      verticalAlign: "top",
                      display: "inline-block",
                      textAlign: "center",
                      width: "76px",
                    }}
                  >
                    <img
                      src="https://www.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Grandfather-512.png"
                      height="70px"
                      width="70px"
                    />
                    <h1 style={{ display: "block" }}>{user_info[0].girl}</h1>
                  </div>{" "}
                  <div
                    style={{
                      verticalAlign: "top",
                      display: "inline-block",
                      textAlign: "center",
                      width: "76px",
                    }}
                  >
                    <img
                      src="https://www.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Grandfather-512.png"
                      height="70px"
                      width="70px"
                    />
                    <h1 style={{ display: "block" }}>{user_info[0].widow}</h1>
                  </div>{" "}
                  <div
                    style={{
                      verticalAlign: "top",
                      display: "inline-block",
                      textAlign: "center",
                      width: "76px",
                    }}
                  >
                    <img
                      src="https://www.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Grandfather-512.png"
                      height="70px"
                      width="70px"
                    />
                    <h1 style={{ display: "block" }}>
                      {user_info[0].orphan_boy}
                    </h1>
                  </div>{" "}
                  <div
                    style={{
                      verticalAlign: "top",
                      display: "inline-block",
                      textAlign: "center",
                      width: "76px",
                    }}
                  >
                    <img
                      src="https://www.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Grandfather-512.png"
                      height="70px"
                      width="70px"
                    />
                    <h1 style={{ display: "block" }}>
                      {user_info[0].orphan_girl}
                    </h1>
                  </div>{" "}
                  <div
                    style={{
                      verticalAlign: "top",
                      display: "inline-block",
                      textAlign: "center",
                      width: "76px",
                    }}
                  >
                    <img
                      src="https://www.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Grandfather-512.png"
                      height="70px"
                      width="70px"
                    />
                    <h1 style={{ display: "block" }}>{user_info[0].infant}</h1>
                  </div>{" "}
                  <div
                    style={{
                      verticalAlign: "top",
                      display: "inline-block",
                      textAlign: "center",
                      width: "76px",
                    }}
                  >
                    <img
                      src="https://www.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Grandfather-512.png"
                      height="70px"
                      width="70px"
                    />
                    <h1 style={{ display: "block" }}>
                      {user_info[0].Special_needs}
                    </h1>
                  </div>{" "}
                  <div
                    style={{
                      verticalAlign: "top",
                      display: "inline-block",
                      textAlign: "center",
                      width: "76px",
                    }}
                  >
                    <img
                      src="https://www.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Grandfather-512.png"
                      height="70px"
                      width="70px"
                    />
                    <h1 style={{ display: "block" }}>{user_info[0].old_man}</h1>
                  </div>{" "}
                  <div
                    style={{
                      verticalAlign: "top",
                      display: "inline-block",
                      textAlign: "center",
                      width: "76px",
                    }}
                  >
                    <img
                      src="https://www.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Grandfather-512.png"
                      height="70px"
                      width="70px"
                    />
                    <h1 style={{ display: "block" }}>
                      {user_info[0].old_women}
                    </h1>
                  </div>{" "}
                </div>
              </div>

              {UserStatisticsresults ? (
                <>
                  {" "}
                  <div class="row" dir="rtl">
                    <div class="col-xl-12 col-md-12">
                      <div class="row">
                        <div class="col-12">
                          <h1 style={{ textAlign: "center" }}>الإحصاءات</h1>
                        </div>
                      </div>
                      <div class="col-xl-6 col-md-6">
                        <div
                          class="card card-stats"
                          style={{ backgroundColor: "#8bc34aa6" }}
                        >
                          <div class="card-body">
                            <div class="row">
                              <div class="col">
                                <h5 class="card-title text-uppercase text-muted mb-0">
                                  الكوبونات المستخدمة
                                </h5>
                                <span class="h2  font-weight-bold mb-0">
                                  {statAll.usedTotalCountAll} كوبون
                                </span>
                                <br />
                                <span
                                  style={{ color: "green" }}
                                  class="h3 font-weight-bold mb-0"
                                >
                                  {statAll.usedTotalAll} ر.س
                                </span>
                              </div>
                              <div class="col-auto">
                                <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                  <i class="ni ni-chart-bar-32"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6 col-md-6">
                        <div
                          class="card card-stats"
                          style={{
                            backgroundColor: "hsl(187deg 100% 42% / 36%)",
                          }}
                        >
                          <div class="card-body">
                            <div class="row">
                              <div class="col">
                                <h5 class="card-title text-uppercase text-muted mb-0">
                                  الكوبونات المرسلة
                                </h5>
                                <span class="h2  font-weight-bold mb-0">
                                  {statAll.sentTotalCountAll} كوبون
                                </span>
                                <br />
                                <span
                                  style={{ color: "green" }}
                                  class="h3 font-weight-bold mb-0"
                                >
                                  {statAll.sentTotalAll} ر.س
                                </span>
                              </div>
                              <div class="col-auto">
                                <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                  <i class="ni ni-chart-bar-32"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-xl-12 col-md-12">
                        <div
                          class="card card-stats"
                          style={{
                            backgroundColor: "hsl(187deg 100% 42% / 36%)",
                          }}
                        >
                          <div class="card-body">
                            <div class="row">
                              <div class="col">
                                <h5 class="card-title text-uppercase text-muted mb-0">
                                  مجموع الكوبونات
                                </h5>
                                <span class="h2  font-weight-bold mb-0">
                                  {statAll.usedTotalCountAll +
                                    statAll.sentTotalCountAll}{" "}
                                  كوبون
                                </span>
                                <br />
                                <span
                                  style={{ color: "green" }}
                                  class="h3 font-weight-bold mb-0"
                                >
                                  {statAll.usedTotalAll +
                                    statAll.sentTotalAll +
                                    statAll.newTotalAll}{" "}
                                  ر.س
                                </span>
                              </div>
                              <div class="col-auto">
                                <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                  <i class="ni ni-chart-bar-32"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-12 col-md-12">
                          <div class="">
                            <div class="card-body  rounded">
                              <div class="row">
                                <div class="col">
                                  <h1 style={{ textAlign: "center" }}>
                                    كوبونات السنة الحالية
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row" dir="rtl">
                          <div class="col-xl-6 col-md-6 col-sm-6">
                            <div class="nav-wrapper">
                              <ul
                                class="nav nav-pills nav-fill flex-column flex-md-row"
                                id="tabs-icons-text"
                                role="tablist"
                              >
                                <li class="nav-item">
                                  <a
                                    class="nav-link mb-sm-3 mb-md-0 active"
                                    id="tabs-icons-text-1-tab"
                                    data-toggle="tab"
                                    href="#tabs-icons-text-1"
                                    role="tab"
                                    aria-controls="tabs-icons-text-1"
                                    aria-selected="true"
                                  >
                                    <i class="ni ni-cloud-upload-96 mr-2"></i>
                                    الكمية
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <a
                                    class="nav-link mb-sm-3 mb-md-0"
                                    id="tabs-icons-text-2-tab"
                                    data-toggle="tab"
                                    href="#tabs-icons-text-2"
                                    role="tab"
                                    aria-controls="tabs-icons-text-2"
                                    aria-selected="false"
                                  >
                                    <i class="ni ni-bell-55 mr-2"></i> القيمة
                                    بالريال
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="">
                              <div class="card-body">
                                <div class="tab-content" id="myTabContent">
                                  <div
                                    class="tab-pane fade show active"
                                    id="tabs-icons-text-1"
                                    role="tabpanel"
                                    aria-labelledby="tabs-icons-text-1-tab"
                                  >
                                    <Chart
                                      type="bar"
                                      data={BarChartDataNumbers}
                                    />
                                  </div>
                                  <div
                                    class="tab-pane fade"
                                    id="tabs-icons-text-2"
                                    role="tabpanel"
                                    aria-labelledby="tabs-icons-text-2-tab"
                                  >
                                    <Chart
                                      type="bar"
                                      data={BarChartDataMoney}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-6 col-md-6 col-sm-6">
                            <div class="nav-wrapper">
                              <ul
                                class="nav nav-pills nav-fill flex-column flex-md-row"
                                id="tabs-icons-text"
                                role="tablist"
                              >
                                <li class="nav-item">
                                  <a
                                    class="nav-link mb-sm-3 mb-md-0 active"
                                    id="tabs-icons-text-4-tab"
                                    data-toggle="tab"
                                    href="#tabs-icons-text-4"
                                    role="tab"
                                    aria-controls="tabs-icons-text-4"
                                    aria-selected="true"
                                  >
                                    <i class="ni ni-cloud-upload-96 mr-2"></i>
                                    الكمية
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <a
                                    class="nav-link mb-sm-3 mb-md-0"
                                    id="tabs-icons-text-3-tab"
                                    data-toggle="tab"
                                    href="#tabs-icons-text-3"
                                    role="tab"
                                    aria-controls="tabs-icons-text-3"
                                    aria-selected="false"
                                  >
                                    <i class="ni ni-bell-55 mr-2"></i> القيمة
                                    بالريال
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="">
                              <div class="card-body">
                                <div class="tab-content" id="myTabContent">
                                  <div
                                    class="tab-pane fade show active"
                                    id="tabs-icons-text-4"
                                    role="tabpanel"
                                    aria-labelledby="tabs-icons-text-4-tab"
                                  >
                                    <Chart
                                      type="doughnut"
                                      data={PieCartDataNumbers}
                                    />
                                  </div>
                                  <div
                                    class="tab-pane fade"
                                    id="tabs-icons-text-3"
                                    role="tabpanel"
                                    aria-labelledby="tabs-icons-text-3-tab"
                                  >
                                    <Chart
                                      type="doughnut"
                                      data={PieCartDataMoney}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </>
              ) : (
                ""
              )}
            </>

            <div class="row" dir="rtl">
              <div class="col-12">
                {/*-----------------------------*/}
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
                        <i class="ni ni-cloud-upload-96 mr-2"></i>الكوبونات
                        الفعالة
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
                        <i class="ni ni-bell-55 mr-2"></i>الكوبونات المستخدمة
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
                        <i class="ni ni-calendar-grid-58 mr-2"></i>الكوبونات
                        المنتهية
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
                        <table
                          dir="rtl"
                          className="table align-items-center table-flush"
                          style={{ textAlign: "right" }}
                        >
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
                                مرسل
                              </th>
                              <th scope="col" data-sort="completion">
                                ينتهي
                              </th>
                              <th scope="col" data-sort="completion">
                                حالة الإرسال
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list">
                            {" "}
                            {user_sent_coubons.map((coubon, index) => {
                              let d1 = new Date();
                              let d2 = new Date(coubon.Assigned_at);
                              let sentChe = true;
                              if (d1.getTime() < d2.getTime()) {
                                sentChe = false;
                              }
                              return (
                                <>
                                  {coubon.type == "one_code" ? (
                                    <tr>
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
                                      <td className="name">
                                        <p className="">
                                          {sentChe ? (
                                            <p style={{ color: "green" }}>
                                              مرسل
                                            </p>
                                          ) : (
                                            <p style={{ color: "orange" }}>
                                              غير مرسل
                                            </p>
                                          )}
                                        </p>
                                      </td>
                                    </tr>
                                  ) : coubon.type == "all_code" ? (
                                    <tr>
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
                                      <td className="name">
                                        <p className="">
                                          {sentChe ? (
                                            <p style={{ color: "green" }}>
                                              مرسل
                                            </p>
                                          ) : (
                                            <p style={{ color: "orange" }}>
                                              غير مرسل
                                            </p>
                                          )}
                                        </p>
                                      </td>
                                    </tr>
                                  ) : (
                                    <tr>
                                      <td className="name">
                                        <p className="">{coubon.name}</p>
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
                                          <p className="">{coubon.value}</p>
                                        ) : coubon.type == "basket" ? (
                                          <p className="">{coubon.value}</p>
                                        ) : coubon.type == "discount" ? (
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
                                      <td className="name">
                                        <p className="">
                                          {sentChe ? (
                                            <p style={{ color: "green" }}>
                                              مرسل
                                            </p>
                                          ) : (
                                            <p style={{ color: "orange" }}>
                                              غير مرسل
                                            </p>
                                          )}
                                        </p>
                                      </td>
                                    </tr>
                                  )}
                                </>
                              );
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
                        <table
                          dir="rtl"
                          className="table align-items-center table-flush"
                          style={{ textAlign: "right" }}
                        >
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
                                مرسل
                              </th>
                              <th scope="col" data-sort="completion">
                                ينتهي
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list">
                            {" "}
                            {user_used_coubons.map((coubon, index) => {
                              let d1 = new Date();
                              let d2 = new Date(coubon.Assigned_at);
                              let sentChe = true;
                              if (d1.getTime() < d2.getTime()) {
                                sentChe = false;
                              }
                              return (
                                <>
                                  {coubon.type == "one_code" ? (
                                    <tr>
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
                                  ) : coubon.type == "all_code" ? (
                                    <tr>
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
                                      <td className="name">
                                        <p className="">{coubon.name}</p>
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
                                          <p className="">{coubon.value}</p>
                                        ) : coubon.type == "basket" ? (
                                          <p className="">{coubon.value}</p>
                                        ) : coubon.type == "discount" ? (
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
                      </div>
                      <div
                        class="tab-pane fade"
                        id="xx-3"
                        role="tabpanel"
                        aria-labelledby="xx-3-tab"
                      >
                        <table
                          dir="rtl"
                          className="table align-items-center table-flush"
                          style={{ textAlign: "right" }}
                        >
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
                                مرسل
                              </th>
                              <th scope="col" data-sort="completion">
                                ينتهي
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list">
                            {" "}
                            {Aluser_over_coubonsl.map((coubon, index) => {
                              let d1 = new Date();
                              let d2 = new Date(coubon.Assigned_at);
                              let sentChe = true;
                              if (d1.getTime() < d2.getTime()) {
                                sentChe = false;
                              }
                              return (
                                <>
                                  {coubon.type == "one_code" ? (
                                    <tr>
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
                                  ) : coubon.type == "all_code" ? (
                                    <tr>
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
                                      <td className="name">
                                        <p className="">{coubon.name}</p>
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
                                          <p className="">{coubon.value}</p>
                                        ) : coubon.type == "basket" ? (
                                          <p className="">{coubon.value}</p>
                                        ) : coubon.type == "discount" ? (
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
                      </div>
                    </div>
                  </div>
                </div>
                {/*-----------------------------*/}
              </div>
            </div>
          </body>
        ) : (
          ""
        )
      ) : (
        ""
      )}
      {showSkeleton2 ? <Skeleton height={200} count={10} /> : ""}
    </div>
  );
}

export default ProtectRoute(Users);
