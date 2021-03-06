import React, { useState, useEffect } from "react";
import Admin_nav from "../components/Admin_nav";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import NewCategoryForm from "../components/NewCategoryForm";
import EditCategoryForm from "../components/EditCategoryForm";

import useAuth, { ProtectRoute } from "../contexts/auth.js";
import { GetCategories } from "../services/api_get";
import { mutate } from "swr";

import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";

function Needs() {
  const router = useRouter();

  const { toggler, settoggler, loading } = useAuth();
  const { data, isLoading, isError } = GetCategories();

  const results = isLoading ? false : data.data;
  const showSkeleton = isLoading || loading;

  const [newCompany, setnewCompany] = useState(false);
  const [edit, setedit] = useState(false);
  const [Category, setCategory] = useState([]);

  /*function prefetch(name) {
    mutate(
      "rabwa/getCompany?name=" + name,
      api.get("rabwa/getCompany?name=" + name).then((res) => console.log(res))
    );
    // the second parameter is a Promise
    // SWR will use the result when it resolves
  }*/

  function GoBackAndTriggerMutation() {
    mutate("rabwa/GetCategories");
    setedit(false);
    setnewCompany(false);
    //setnewCompany(false);
  }

  function changenewCompany() {
    setedit(false);
    setnewCompany(false);
  }
  console.log(newCompany);

  console.log(results);

  function displayCards(results) {
    return (
      <div>
        <div style={{ float: "right" }}>
          <h2 style={{ marginRight: "0.8em", display: "inline" }}>
            إدارة الإحتياجات :
          </h2>

          <div style={{ clear: "both" }}></div>
        </div>
        <div class="col-xl-12 col-md-12" style={{ height: "50px" }}></div>
        {results.map((cat, index) => {
          return (
            <div
              class="col-xl-3 col-md-6"
              //onMouseEnter={() => prefetch(comp.name)}
            >
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

                    setCategory(cat);
                    // event.stopPropagation();
                  }}
                >
                  <img
                    width="20"
                    src="https://image.flaticon.com/icons/png/512/84/84380.png"
                  />
                </div>
                <div class="card-body">
                  <div
                    class="btn btn-icon "
                    style={{ float: "left", zIndex: 99999999, opacity: 0 }}
                  >
                    <img
                      width="20"
                      src="https://image.flaticon.com/icons/png/512/84/84380.png"
                    />
                  </div>

                  <div class="row">
                    <div class="col-auto">
                      <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                        <i class="ni ni-active-40"></i>
                      </div>
                    </div>
                    <div class="col">
                      <span class="h2 font-weight-bold mb-0">{cat.name}</span>
                      <h5 class="card-title text-uppercase text-muted mb-0"></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}{" "}
      </div>
    );
  }
  return (
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
                    <h3 className="mb-0">الإحتياجات</h3>
                    {newCompany == false ? (
                      <div style={{ float: "left" }}>
                        <button
                          onClick={() => {
                            setnewCompany(true);
                            // setChoose("branches");
                          }}
                          class="btn btn-icon btn-danger"
                          type="button"
                        >
                          <span class="btn-inner--icon">إنشاء إحتياج جديد</span>
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {newCompany == false ? (
                    <div className="card-body">
                      {results ? (
                        results == "No_data" ? (
                          <h2>لا يوجد بيانات</h2>
                        ) : (
                          displayCards(results)
                        )
                      ) : (
                        ""
                      )}

                      {showSkeleton ? <Skeleton height={40} count={10} /> : ""}
                    </div>
                  ) : (
                    <div className="card-body">
                      {edit == false ? (
                        <NewCategoryForm
                          changenewCompany={changenewCompany}
                          GoBackAndTriggerMutation={GoBackAndTriggerMutation}
                        />
                      ) : (
                        <EditCategoryForm
                          changenewCompany={changenewCompany}
                          GoBackAndTriggerMutation={GoBackAndTriggerMutation}
                          category={Category}
                        />
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
    </body>
  );
}

export default ProtectRoute(Needs);
