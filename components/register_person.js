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

  const [step, setStep] = useState(1);

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
                      <h3 class="mb-0">Icons</h3>
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
                                <option value="0">الكل</option>
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
                          <button
                            type="button"
                            class="btn btn-lg btn-primary"
                            disabled={step == 1 ? true : false}
                          >
                            السابق
                          </button>{" "}
                          <button type="button" class="btn btn-lg btn-primary">
                            التالي
                          </button>
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

export default Table;
