import React, { useState, useEffect } from "react";
import Admin_nav from "../components/Admin_nav";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import BranchCoubonTable from "../components/BranchCoubonTable";
import NewBranchForm from "../components/NewBranchForm";
import EditBranchForm from "../components/EditBranchForm";

import useAuth, { ProtectRouteCompany } from "../contexts/auth.js";
import { getCompany } from "../services/api_get";

import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import { mutate } from "swr";
import Cookies from "js-cookie";

function company() {
  const router = useRouter();
  //const [currentCity, setCurrentCity] = useState("");
  const { name } = router.query;
  const { toggler, settoggler, loading } = useAuth();

  const { data, isLoading, isError } = getCompany(Cookies.get("CompanyCode"));
  const results = isLoading ? false : data.data;

  const showSkeleton = isLoading || loading;
  const [choose, setChoose] = useState("branches");
  console.log(data);
  const [branch_id, setBranch_id] = useState();
  const [BracnhCode, setBracnhCode] = useState();
  const [Branch, setBranch] = useState();
  const [edit, setedit] = useState(false);

  const [newCompany, setnewCompany] = useState(false);
  function changeChoose(mychosen) {
    setChoose(mychosen);
  }
  function changenewCompany() {
    setnewCompany(false);
    setedit(false);
  }
  function GoBackAndTriggerMutation() {
    mutate("api/getCompany?name=" + name);

    setnewCompany(false);
    setedit(false);
  }
  const [Branchname, setBranchname] = useState("");
  const [compname, setcompname] = useState("");

  function displayCards(results) {
    localStorage.CurrentCity = "";
    return (
      <>
        <h2>{results[0].company_name}</h2>

        {choose == "branches" ? (
          <div>
            <div style={{ clear: "both" }}></div>
            <div class="col-xl-12 col-md-12" style={{ height: "50px" }}></div>
            {results.map((branch, index) => {
              if (branch.city == localStorage.CurrentCity) {
                return (
                  <>
                    <div class="col-xl-3 col-md-6">
                      <div class="card card-stats">
                        <div
                          class="btn btn-icon "
                          style={{
                            float: "left",
                            zIndex: 9999999999,
                            position: "absolute",
                            left: 0,
                            top: 17,
                          }}
                          onClick={() => {
                            setedit(true);
                            setnewCompany(true);
                            setChoose("branches");
                            setBranch(branch);
                            setBranchname(" > " + branch.branch_name);
                            setcompname(branch.company_name);

                            // event.stopPropagation();
                          }}
                        >
                          <img
                            width="20"
                            src="https://image.flaticon.com/icons/png/512/84/84380.png"
                          />
                        </div>
                        <div
                          class="card-body"
                          onClick={() => {
                            console.log(index);
                            setBranch_id(branch.id);
                            setBracnhCode(branch.BracnhCode);
                            setChoose("coubons");
                            setBranchname(" > " + branch.branch_name);
                            setcompname(branch.company_name);

                            // setCompany(comp.branches);
                          }}
                        >
                          <div class="row">
                            <div class="col-12">
                              <div class="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                                <i class="ni ni-shop"></i>
                              </div>
                            </div>
                            <div class="col-12">
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
                    <div class="col-xl-12 col-md-12" style={{ height: "50px" }}>
                      {" "}
                      <h1>{branch.city}</h1>
                    </div>

                    <div class="col-xl-3 col-md-6">
                      <div class="card card-stats">
                        <div
                          class="btn btn-icon "
                          style={{
                            float: "left",
                            zIndex: 9999999999,
                            position: "absolute",
                            left: 0,
                            top: 17,
                          }}
                          onClick={() => {
                            console.log("hedddddddddddddddddddddddddre");
                            setedit(true);
                            setnewCompany(true);
                            setChoose("branches");
                            setBranch(branch);
                            setBranchname(" > " + branch.branch_name);
                            setcompname(branch.company_name);

                            // event.stopPropagation();
                          }}
                        >
                          <img
                            width="20"
                            src="https://image.flaticon.com/icons/png/512/84/84380.png"
                          />
                        </div>
                        <div
                          class="card-body"
                          onClick={() => {
                            setBranch_id(branch.id);
                            setBracnhCode(branch.BracnhCode);

                            setChoose("coubons");
                            setBranchname(" > " + branch.branch_name);
                            setcompname(branch.company_name);
                          }}
                        >
                          <div
                            class="btn btn-icon "
                            style={{
                              float: "left",
                              zIndex: 99999999,
                              opacity: 0,
                            }}
                          >
                            <img
                              width="20"
                              src="https://image.flaticon.com/icons/png/512/84/84380.png"
                            />
                          </div>
                          <div class="row">
                            <div class="col-12">
                              <div class="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                                <i class="ni ni-shop"></i>
                              </div>
                            </div>
                            <div class="col-12">
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
          <BranchCoubonTable
            branch_id={branch_id}
            companyName={name}
            setChoose={changeChoose}
          />
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
            <HeaderNav />

            <div className="container-fluid mt--6">
              {choose == "coubons" ? (
                <>
                  <h1>strokeDashoffset</h1>
                  <BranchCoubonTable
                    branch_id={branch_id}
                    BracnhCode={BracnhCode}
                    companyName={compname}
                    Branchname={Branchname}
                    setChoose={changeChoose}
                    listOfBranches={results}
                  />
                </>
              ) : (
                <div className="row justify-content-center">
                  <div className=" col ">
                    <div className="card">
                      <div className="card-header bg-transparent">
                        <h3 className="mb-0">فروع الشركة</h3>
                        <div style={{ float: "left" }}>
                          <button
                            onClick={() => {
                              setnewCompany(true);
                              // setChoose("branches");
                            }}
                            class="btn btn-icon btn-danger"
                            type="button"
                          >
                            <span class="btn-inner--icon">
                              إنشاء {choose == "branches" ? "فرع" : "كوبون"}{" "}
                              جديد
                            </span>
                          </button>
                        </div>
                      </div>
                      {newCompany == false ? (
                        <div className="card-body">
                          {results ? (
                            results == "No_data" ? (
                              <div style={{ float: "right" }}>
                                <button
                                  onClick={() => {
                                    router.push("/companys");
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
                                  اختر الفرع :
                                </h2>

                                <div style={{ clear: "both" }}></div>
                                <h2 style={{ marginTop: "0.8em" }}>
                                  لا يوجد بيانات
                                </h2>
                              </div>
                            ) : (
                              displayCards(results)
                            )
                          ) : (
                            ""
                          )}

                          {showSkeleton ? (
                            <Skeleton height={40} count={10} />
                          ) : (
                            ""
                          )}
                        </div>
                      ) : (
                        <div className="card-body">
                          {" "}
                          {choose == "branches" ? (
                            edit == false ? (
                              <NewBranchForm
                                company_id={results[0].company_id}
                                GoBackAndTriggerMutation={
                                  GoBackAndTriggerMutation
                                }
                                changenewCompany={changenewCompany}
                                companyName={results[0].company_name}
                              />
                            ) : (
                              <EditBranchForm
                                company_id={results[0].company_id}
                                GoBackAndTriggerMutation={
                                  GoBackAndTriggerMutation
                                }
                                companyName={compname}
                                Branchname={Branchname}
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

export default ProtectRouteCompany(company);
