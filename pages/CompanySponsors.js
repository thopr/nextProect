import React, { useState } from "react";
import Admin_nav from "../components/Admin_nav";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import useAuth, { ProtectRouteCompany } from "../contexts/auth.js";

import Skeleton from "react-loading-skeleton";
import { getSponsors } from "../services/api_get";

function CompanySponsors() {
  const { user, isAuthenticated, loading, toggler } = useAuth();
  const [getType, setgetType] = useState("Companyall");
  const [Sphone, setSphone] = useState("");
  const [step, setStep] = useState(1);
  const [firstTime, setfirstTime] = useState(true);
  const [sponsors, setsponsors] = useState([]);

  const { data, isLoading, isError } = getSponsors(Sphone, getType);

  const results = isLoading ? false : data.data;
  console.log(results);
  const showSkeleton = isLoading || loading;
  if (firstTime && results) {
    setsponsors(results);
    setfirstTime(false);
  }

  function getSponsor(phone) {
    setSphone(phone);
    setgetType("CompanySponsor");
    setStep(2);
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
                      <h3 className="mb-0">الداعمين</h3>
                    </div>
                    {results ? (
                      <div className="card-body">
                        {step == 1 ? (
                          <table className="table align-items-center table-flush">
                            <thead className="thead-light">
                              <tr>
                                <th scope="col" data-sort="name">
                                  الإسم
                                </th>

                                <th scope="col" data-sort="status">
                                  رقم الجوال
                                </th>

                                <th scope="col" data-sort="completion">
                                  مجموع التبرعات
                                </th>
                                <th scope="col" data-sort="completion">
                                  التفاصيل
                                </th>
                              </tr>
                            </thead>
                            <tbody className="list">
                              {sponsors.map((coubon, index) => {
                                return (
                                  <>
                                    <tr>
                                      <td>
                                        <h3
                                          style={{
                                            TextAlign: "center",
                                          }}
                                        >
                                          {coubon.name}
                                        </h3>
                                      </td>

                                      <td>
                                        <h3
                                          style={{
                                            TextAlign: "center",
                                          }}
                                        >
                                          {coubon.phone}
                                        </h3>
                                      </td>
                                      <td>
                                        <h3
                                          style={{
                                            TextAlign: "center",
                                            color: "green",
                                          }}
                                        >
                                          {coubon.totaldonation}
                                        </h3>
                                      </td>

                                      <td>
                                        <button
                                          type="button"
                                          class="btn"
                                          onClick={() => {
                                            getSponsor(coubon.phone);
                                          }}
                                        >
                                          التفاصيل
                                        </button>
                                      </td>
                                    </tr>
                                  </>
                                );
                              })}
                            </tbody>
                          </table>
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
                              <h2
                                style={{
                                  marginRight: "0.8em",
                                  display: "inline",
                                }}
                              >
                                العودة الى الخلف
                              </h2>

                              <div style={{ clear: "both" }}></div>
                            </div>
                            <table className="table align-items-center table-flush">
                              <thead className="thead-light">
                                <tr>
                                  <th scope="col" data-sort="name">
                                    الإسم
                                  </th>

                                  <th scope="col" data-sort="status">
                                    رقم الجوال
                                  </th>

                                  <th scope="col" data-sort="completion">
                                    اسم الكوبون
                                  </th>
                                  <th scope="col" data-sort="completion">
                                    قيمة الكوبونات
                                  </th>
                                  <th scope="col" data-sort="completion">
                                    قيمة التبرع
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="list">
                                {results.map((coubon, index) => {
                                  return (
                                    <>
                                      <tr>
                                        <td>
                                          <h3
                                            style={{
                                              TextAlign: "center",
                                            }}
                                          >
                                            {coubon.name}
                                          </h3>
                                        </td>

                                        <td>
                                          <h3
                                            style={{
                                              TextAlign: "center",
                                            }}
                                          >
                                            {coubon.phone}
                                          </h3>
                                        </td>
                                        <td>
                                          <h3
                                            style={{
                                              TextAlign: "center",
                                            }}
                                          >
                                            {coubon.coubonName}
                                          </h3>
                                        </td>

                                        <td>
                                          <h3
                                            style={{
                                              TextAlign: "center",
                                            }}
                                          >
                                            {coubon.coubonValue}
                                          </h3>
                                        </td>
                                        <td>
                                          <h3
                                            style={{
                                              TextAlign: "center",
                                              color: "green",
                                            }}
                                          >
                                            {coubon.value}
                                          </h3>
                                        </td>
                                      </tr>
                                    </>
                                  );
                                })}
                              </tbody>
                            </table>
                          </>
                        ) : (
                          ""
                        )}
                        {showSkeleton ? <Skeleton height={10} count={2} /> : ""}
                      </div>
                    ) : (
                      ""
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
      </body>
    </>
  );
}

export default ProtectRouteCompany(CompanySponsors);
