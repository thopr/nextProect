import React, { useState, useEffect } from "react";
import { Chart } from "@bit/primefaces.primereact.chart";
import { Bar } from "react-chartjs-2";

import Admin_nav from "../components/Admin_nav";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import BranchCoubonTableStat from "../components/BranchCoubonTableStat";
import NewBranchForm from "../components/NewBranchForm";
import EditBranchForm from "../components/EditBranchForm";

import useAuth, { ProtectRouteCompany } from "../contexts/auth.js";
import { CompanysStatistic } from "../services/api_get";

import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import { mutate } from "swr";
import Cookies from "js-cookie";

function CompanyStatistics() {
  const pieOptions = {
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 12,
      },
    },
  };
  const optionscc = {
    legend: { display: false },
    barRoundness: 0.3,
    title: {
      display: true,
      text: "الكوبونات المصروفة بالسنة الحالية",
    },
  };
  const optionscc2 = {
    legend: { display: false },
    barRoundness: 0.3,
    title: {
      display: true,
      text: " قيمة الكوبونات المصروفة بالسنة الحالية",
    },
  };
  const [PieCartDataNumbers, setPieCartDataNumbers] = useState([]);
  const [PieCartDataMoney, setPieCartDataMoney] = useState([]);
  const [BarChartDataNumbers, setBarChartDataNumbers] = useState([]);
  const [BarChartDataMoney, setBarChartDataMoney] = useState([]);
  const router = useRouter();
  //const [currentCity, setCurrentCity] = useState("");
  const { name } = router.query;
  const { toggler, settoggler, loading } = useAuth();

  const { data, isLoading, isError } = CompanysStatistic(
    Cookies.get("CompanyCode")
  );

  const results = isLoading ? false : data.data;
  console.log(results);
  const showSkeleton = isLoading || loading;
  const [choose, setChoose] = useState("branches");
  const [firstTime, setfirstTime] = useState(true);
  const [statAll, setstatAll] = useState([]);

  const [branch_id, setBranch_id] = useState();
  const [branch_name, setbranch_name] = useState("");
  const [BracnhCode, setBracnhCode] = useState();
  const [Branch, setBranch] = useState();
  const [edit, setedit] = useState(false);

  const [newCompany, setnewCompany] = useState(false);
  const [company_name, setcompany_name] = useState("");

  if (firstTime && results) {
    setcompany_name(results.Companys[0].company_name);
    let TheYear = results.Statistics.theYear;
    setstatAll(results.Statistics.All);
    let months = TheYear.months;

    setPieCartDataNumbers({
      labels: ["المرسلة", "المستخدمة", "المنتهية ", "الجديدة"],
      datasets: [
        {
          data: [
            TheYear.sentTotalCount,
            TheYear.usedTotalCount,
            TheYear.overTotalCount,
            TheYear.newTotalCount,
          ],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#22936f"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#22936f"],
        },
      ],
    });

    setPieCartDataMoney({
      labels: ["المرسلة", "المستخدمة", "المنتهية ", "الجديدة"],
      datasets: [
        {
          data: [
            TheYear.sentTotal,
            TheYear.usedTotal,
            TheYear.overTotal,
            TheYear.newTotal,
          ],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#22936f"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#22936f"],
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
            months.JanuaryTotalCount,
            months.FebruaryTotalCount,
            months.MarchTotalCount,
            months.AprilTotalCount,
            months.MayTotalCount,
            months.JuneTotalCount,
            months.JulyTotalCount,
            months.AugustTotalCount,
            months.SeptemberTotalCount,
            months.OctoberTotalCount,
            months.NovemberTotalCount,
            months.DecemberTotalCount,
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
            months.JanuaryTotal,
            months.FebruaryTotal,
            months.MarchTotal,
            months.AprilTotal,
            months.MayTotal,
            months.JuneTotal,
            months.JulyTotal,
            months.AugustTotal,
            months.SeptemberTotal,
            months.OctoberTotal,
            months.NovemberTotal,
            months.DecemberTotal,
          ],
        },
      ],
    });

    setfirstTime(false);
  }

  function changeChoose(mychosen) {
    setChoose(mychosen);
  }
  function changenewCompany() {
    setnewCompany(false);
    setedit(false);
  }
  function GoBackAndTriggerMutation() {
    mutate("rabwa/CompanysStatistic?name=" + name);

    setnewCompany(false);
    setedit(false);
  }
  function displayCards(cresults) {
    localStorage.CurrentCity = "";
    return (
      <>
        {choose == "branches" ? (
          <div>
            <h1 style={{ textAlign: "center" }}>{company_name}</h1>
            <div style={{ clear: "both" }}></div>
            <div class="col-xl-12 col-md-12" style={{ height: "50px" }}></div>
            {cresults.map((branch, index) => {
              if (branch.city == localStorage.CurrentCity) {
                return (
                  <>
                    <div
                      class="col-xl-3 col-md-6"
                      onClick={() => {
                        setBranch_id(branch.id);
                        setBracnhCode(branch.BracnhCode);
                        setChoose("coubons");
                        setbranch_name(" > " + branch.branch_name);
                        // setCompany(comp.branches);
                      }}
                    >
                      <div class="card card-stats">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-auto">
                              <div class="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                                <i class="ni ni-shop"></i>
                              </div>
                            </div>
                            <div class="col">
                              <span class="h2 font-weight-bold mb-0">
                                {branch.branch_name}
                              </span>
                              <h5 class="card-title text-uppercase text-muted mb-0">
                                {branch.ShortDesc}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              } else {
                localStorage.CurrentCity = branch.city;
                return (
                  <>
                    <div
                      class="col-xl-12 col-md-12"
                      style={{ height: "50px", textAlign: "right" }}
                    >
                      {" "}
                      <h1>{branch.city}</h1>
                    </div>

                    <div
                      class="col-xl-3 col-md-6"
                      onClick={() => {
                        setBranch_id(branch.id);
                        setBracnhCode(branch.BracnhCode);
                        setbranch_name(" > " + branch.branch_name);

                        setChoose("coubons");
                      }}
                    >
                      <div class="card card-stats">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-auto">
                              <div class="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                                <i class="ni ni-shop"></i>
                              </div>
                            </div>
                            <div class="col">
                              <span class="h2 font-weight-bold mb-0">
                                {branch.branch_name}
                              </span>
                              <h5 class="card-title text-uppercase text-muted mb-0">
                                {branch.ShortDesc}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            })}{" "}
          </div>
        ) : choose == "coubons" ? (
          <></>
        ) : (
          ""
        )}
      </>
    );
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
            <>
              <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
                <a
                  class="nav-link"
                  role="button"
                  href="#"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    display: "block",
                    zIndex: "99999999999999999",
                    position: "relative",
                    height: "40px",
                    backgroundColor: "white",
                    padding: "10px",
                    marginRight: "10px",
                  }}
                  onClick={() => {
                    settoggler(!toggler);
                  }}
                >
                  <i className="ni ni-align-left-2"></i>
                </a>
              </nav>
              {/* Header */}
              {/* Header */}
              <div className="header bg-primary pb-6">
                {choose == "coubons" ? (
                  <>
                    <h1 style={{ textAlign: "center" }}>
                      {company_name + branch_name}
                    </h1>
                  </>
                ) : (
                  ""
                )}
                {results ? (
                  results.Companys == "No_data" ? (
                    <div className="row justify-content-center">
                      <div className=" col "> </div>
                    </div>
                  ) : (
                    <div className="row justify-content-center">
                      <div className=" col ">
                        {displayCards(results.Companys)}
                      </div>
                    </div>
                  )
                ) : (
                  ""
                )}
              </div>
            </>

            <div className="container-fluid mt--6">
              {choose == "coubons" ? (
                <>
                  <BranchCoubonTableStat
                    branch_id={branch_id}
                    BracnhCode={BracnhCode}
                    companyName={name}
                    setChoose={changeChoose}
                  />
                </>
              ) : (
                <div className="row justify-content-center">
                  <div className=" col ">
                    <div className="card">
                      <div className="card-header bg-transparent"></div>
                      {results ? (
                        <>
                          <div style={{ padding: 25 }}>
                            <div class="col-xl-12 col-md-12">
                              <div class="">
                                <div class="card-body  rounded">
                                  <div class="row">
                                    <div class="col">
                                      <h1 style={{ textAlign: "center" }}>
                                        جميع كوبونات {company_name}
                                      </h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row" dir="rtl">
                              <div class="col-xl-3 col-md-3">
                                <div class="card card-stats">
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
                                        <div class="icon icon-shape bg-gradient-danger text-white rounded-circle shadow">
                                          <i class="ni ni-scissors"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-xl-3 col-md-3">
                                <div class="card card-stats">
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
                                          <i class="ni ni-send"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-xl-3 col-md-3">
                                <div class="card card-stats">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="col">
                                        <h5 class="card-title text-uppercase text-muted mb-0">
                                          الكوبونات الجديدة
                                        </h5>
                                        <span class="h2  font-weight-bold mb-0">
                                          {statAll.newTotalCountAll} كوبون
                                        </span>
                                        <br />
                                        <span
                                          style={{ color: "green" }}
                                          class="h3 font-weight-bold mb-0"
                                        >
                                          {statAll.newTotalAll} ر.س
                                        </span>
                                      </div>
                                      <div class="col-auto">
                                        <div class="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                                          <i class="ni ni-tag"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-xl-3 col-md-3">
                                <div class="card card-stats">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="col">
                                        <h5 class="card-title text-uppercase text-muted mb-0">
                                          الكوبونات المنتهية
                                        </h5>
                                        <span class="h2  font-weight-bold mb-0">
                                          {statAll.overTotalCountAll} كوبون
                                        </span>
                                        <br />
                                        <span
                                          style={{ color: "green" }}
                                          class="h3 font-weight-bold mb-0"
                                        >
                                          {statAll.overTotalAll} ر.س
                                        </span>
                                      </div>
                                      <div class="col-auto">
                                        <div class="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                                          <i class="ni ni-tag"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-xl-12 col-md-12">
                                <div class="card card-stats">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="col">
                                        <h5 class="card-title text-uppercase text-muted mb-0">
                                          مجموع الكوبونات
                                        </h5>
                                        <span class="h2  font-weight-bold mb-0">
                                          {statAll.usedTotalCountAll +
                                            statAll.sentTotalCountAll +
                                            statAll.newTotalCountAll}{" "}
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
                                        <div class="icon icon-shape bg-primary text-white rounded-circle shadow">
                                          <i class="ni ni-chart-bar-32"></i>
                                        </div>
                                      </div>
                                    </div>
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
                            <div class="col-6">
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
                              <div class="card card-stats">
                                <div class="card-body">
                                  <div class="tab-content" id="myTabContent">
                                    <div
                                      class="tab-pane fade show active"
                                      id="tabs-icons-text-1"
                                      role="tabpanel"
                                      aria-labelledby="tabs-icons-text-1-tab"
                                    >
                                      <Bar
                                        data={BarChartDataNumbers}
                                        options={optionscc}
                                      />
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="tabs-icons-text-2"
                                      role="tabpanel"
                                      aria-labelledby="tabs-icons-text-2-tab"
                                    >
                                      <Bar
                                        data={BarChartDataMoney}
                                        options={optionscc2}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-6">
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
                              <div
                                class="card card-stats"
                                style={{ backgroundColor: "rgb(23, 43, 77)" }}
                              >
                                {" "}
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
                                        options={pieOptions}
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
                                        options={pieOptions}
                                      />
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
                      {newCompany == false ? (
                        <div className="card-body"></div>
                      ) : (
                        <div className="card-body">
                          {" "}
                          {choose == "branches" ? (
                            edit == false ? (
                              <NewBranchForm
                                company_id={results.Companys[0].company_id}
                                GoBackAndTriggerMutation={
                                  GoBackAndTriggerMutation
                                }
                                changenewCompany={changenewCompany}
                              />
                            ) : (
                              <EditBranchForm
                                company_id={results.Companys[0].company_id}
                                GoBackAndTriggerMutation={
                                  GoBackAndTriggerMutation
                                }
                                changenewCompany={changenewCompany}
                                branch={Branch}
                              />
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <Footer />
              {showSkeleton ? <Skeleton height={40} count={10} /> : ""}
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

export default ProtectRouteCompany(CompanyStatistics);
