import React, { useState, useEffect } from "react";

import CoubonTable from "../components/CoubonTable";
import useAuth, { ProtectRoute } from "../contexts/auth.js";
import { GetCategorysByCity } from "../services/api_get";

import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";

const FindBranch = ({ city, requiredAmount, UpdatePool, pool }) => {
  const router = useRouter();

  const { user, isAuthenticated, loading } = useAuth();

  useEffect(() => {
    localStorage.Currentcategory = "";
    if (!isAuthenticated && !loading) Router.push("/login");
  }, [loading, isAuthenticated]);

  const { data, isLoading, isError } = GetCategorysByCity(city);

  const results = isLoading ? false : data.data;
  const showSkeleton = isLoading || loading;
  console.log(results);
  const [project, setProject] = useState(false);
  const [choose, setChoose] = useState("category");
  const [category, setCategory] = useState("");
  const [Categoryid, setCategoryid] = useState(0);
  const [Categoryname, setCategoryname] = useState("");

  const [company, setCompany] = useState("");
  const [Companyname, setCompanyname] = useState("");

  const [Branchid, setBranchid] = useState("");
  const [Branchname, setBranchname] = useState("");

  function selected(amount, section, coubonName, type) {
    UpdatePool(amount, section, coubonName, type);
  }

  function displayCards(results) {
    return (
      <>
        <h2>{Categoryname + Companyname + Branchname}</h2>
        {choose == "category" ? (
          <div>
            <div style={{ float: "right" }}>
              <h2 style={{ marginRight: "0.8em", display: "inline" }}>
                اختر التصنيف :
              </h2>
              <div style={{ clear: "both" }}></div>
            </div>
            <div class="col-xl-12 col-md-12" style={{ height: "50px" }}></div>
            {results
              ? results.map((cat, index) => {
                  return (
                    <div
                      class="col-xl-3 col-md-6"
                      onClick={() => {
                        console.log(index);
                        setChoose("company");
                        setCategory(cat.data);
                        setCategoryid(cat.id);
                        setCategoryname(cat.name);
                      }}
                    >
                      <div class="card card-stats">
                        <div class="card-body">
                          <div class="row">
                            <div class="col">
                              <h2 class="card-title text-uppercase text-muted mb-0">
                                {cat.name}
                              </h2>
                            </div>
                            <div class="col-auto">
                              <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                <i class="ni ni-active-40"></i>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            {" "}
                            <h4>
                              الكمية :{" "}
                              <span
                                style={
                                  cat.count > 0
                                    ? { color: "green" }
                                    : { color: "red" }
                                }
                              >
                                {cat.count}
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
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
                  setCategoryname("");
                }}
                class="btn btn-icon btn-primary"
                type="button"
              >
                <span class="btn-inner--icon">
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
              <h2 style={{ marginRight: "0.8em", display: "inline" }}>
                اختر المتجر :
              </h2>

              <div style={{ clear: "both" }}></div>
            </div>
            <div class="col-xl-12 col-md-12" style={{ height: "50px" }}></div>
            {category.map((comp, index) => {
              return (
                <div
                  class="col-xl-3 col-md-6"
                  onClick={() => {
                    console.log(index);
                    setChoose("branch");
                    setCompany(comp.branches);
                    setCompanyname(" > " + comp.name);
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
                            {comp.name}
                          </span>
                          <h5 class="card-title text-uppercase text-muted mb-0">
                            متجر يضم كل مستلزمات المنزل
                          </h5>
                          <h4 className="mt-2">
                            الكمية :{" "}
                            <span
                              style={
                                comp.count > 0
                                  ? { color: "green" }
                                  : { color: "red" }
                              }
                            >
                              {comp.count}
                            </span>
                          </h4>
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
                  setCompanyname("");
                }}
                class="btn btn-icon btn-primary"
                type="button"
              >
                <span class="btn-inner--icon">
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
              </button>

              <h2 style={{ marginRight: "0.8em", display: "inline" }}>
                اختر الفرع :
              </h2>
              <div style={{ clear: "both" }}></div>
            </div>
            <div class="col-xl-12 col-md-12" style={{ height: "50px" }}></div>
            {company.map((branch, index) => {
              return (
                <div
                  class="col-xl-3 col-md-6"
                  onClick={() => {
                    setChoose("section");
                    // setSection(branch.Section_id);
                    setBranchid(branch.Branch_id);
                    setBranchname(" > " + branch.Branch_name);
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
                            {branch.Branch_name}
                          </span>
                          <h5 class="card-title text-uppercase text-muted mb-0">
                            معلومات اخرى
                          </h5>
                          <h4 className="mt-2">
                            الكمية :{" "}
                            <span
                              style={
                                branch.amount > 0
                                  ? { color: "green" }
                                  : { color: "red" }
                              }
                            >
                              {branch.amount}
                            </span>
                          </h4>
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

        {choose == "section" ? (
          <>
            <div style={{ float: "right" }}>
              <button
                onClick={() => {
                  setChoose("branch");
                  setBranchname("");
                }}
                class="btn btn-icon btn-primary"
                type="button"
              >
                <span class="btn-inner--icon">
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
              <h2 style={{ marginRight: "0.8em", display: "inline" }}>
                اختر الكوبون :
              </h2>

              <div style={{ clear: "both" }}></div>
            </div>
            <div class="col-xl-12 col-md-12" style={{ height: "50px" }}></div>
            <CoubonTable
              //section={section}
              selected={selected}
              reqoiredAmount={requiredAmount}
              Categoryid={Categoryid}
              Branchid={Branchid}
              pool={pool}
            />
          </>
        ) : (
          ""
        )}
      </>
    );
  }
  return (
    <>
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
    </>
  );
};

export default FindBranch;
