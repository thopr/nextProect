import Admin_nav from "../components/Admin_nav";
import React, { useState, useEffect } from "react";
import { set } from "js-cookie";
import HeaderNav from "../components/HeaderNav";

import Footer from "../components/Footer";

function Table() {
  //const [project,setProject] = useState(false);
  const [project, setProject] = useState(false);
  const [choose, setChoose] = useState("category");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [branch, setBranch] = useState("");

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
                      <h3 class="mb-0">Icons</h3>
                    </div>
                    <div class="card-body">
                      {/* Light table */}

                      {choose == "category" ? (
                        <div>
                          <div style={{ float: "right" }}>
                            <h2
                              style={{
                                marginRight: "0.8em",
                                display: "inline",
                              }}
                            >
                              اختر التصنيف :
                            </h2>
                            <div style={{ clear: "both" }}></div>
                          </div>
                          <div
                            class="col-xl-12 col-md-12"
                            style={{ height: "50px" }}
                          ></div>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => {
                            return (
                              <div
                                class="col-xl-3 col-md-6"
                                onClick={() => {
                                  setChoose("company");
                                  setCategory(e);
                                }}
                              >
                                <div class="card card-stats">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="col">
                                        <h2 class="card-title text-uppercase text-muted mb-0">
                                          غذائي
                                        </h2>
                                      </div>
                                      <div class="col-auto">
                                        <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                          <i class="ni ni-active-40"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}{" "}
                        </div>
                      ) : (
                        ""
                      )}

                      {choose == "company" ? (
                        <div>
                          <div style={{ float: "right" }}>
                            <button
                              onClick={() => {
                                setChoose("category");
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
                              اختر المتجر :
                            </h2>

                            <div style={{ clear: "both" }}></div>
                          </div>
                          <div
                            class="col-xl-12 col-md-12"
                            style={{ height: "50px" }}
                          ></div>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => {
                            return (
                              <div
                                class="col-xl-3 col-md-6"
                                onClick={() => {
                                  setChoose("branch");
                                  setCompany(e);
                                }}
                              >
                                <div class="card card-stats">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="col-auto">
                                        <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                          <img
                                            width="90"
                                            src="http://www.panda.com.sa/skin/frontend/ves_audio/defaultar/images/logo.png"
                                          />
                                        </div>
                                      </div>
                                      <div class="col">
                                        <span class="h2 font-weight-bold mb-0">
                                          بنده
                                        </span>
                                        <h5 class="card-title text-uppercase text-muted mb-0">
                                          متجر يضم كل مستلزمات المنزل
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}{" "}
                        </div>
                      ) : (
                        ""
                      )}

                      {choose == "branch" ? (
                        <div>
                          <div style={{ float: "right" }}>
                            <button
                              onClick={() => {
                                setChoose("company");
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
                          </div>
                          <div
                            class="col-xl-12 col-md-12"
                            style={{ height: "50px" }}
                          ></div>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => {
                            return (
                              <div
                                class="col-xl-3 col-md-6"
                                onClick={() => {
                                  setChoose("branch");
                                  setBranch(e);
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
                                          بنده
                                        </span>
                                        <h5 class="card-title text-uppercase text-muted mb-0">
                                          فرع الكندرة
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}{" "}
                        </div>
                      ) : (
                        ""
                      )}
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

export default Table;
