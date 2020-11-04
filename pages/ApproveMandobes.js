import Admin_nav from "../components/Admin_nav";

import React, { useState, useEffect } from "react";
import HeaderNav from "../components/HeaderNav";

import api from "../services/Api";

import Footer from "../components/Footer";
import NeedyCheckApproveMandobe from "../components/NeedyCheckApproveMandobe";
import { GetApproveMandobes } from "../services/api_get";
import Skeleton from "react-loading-skeleton";
import useAuth, { ProtectRoute } from "../contexts/auth.js";
import { useAlert } from "react-alert";
import { mutate } from "swr";

function GiveNeedyCoubon() {
  //const [project,setProject] = useState(false);
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
  const [spinner, setspinner] = useState(false);

  const { user, isAuthenticated, loading } = useAuth();
  const [MUuserID, setMUuserID] = useState(0);

  const { data, isLoading, isError } = GetApproveMandobes();

  const results = isLoading ? false : data.data;
  console.log(results);
  const users = isLoading ? false : results.users;

  const showSkeleton = isLoading || loading;

  const [coubonTotal, setcoubonTotal] = useState(0);

  const [CCAs, setCCAs] = useState([]);
  const [categories, setcategories] = useState([]);

  const [firstTime, setfirstTime] = useState(true);
  const [newState, setnewState] = useState(true);
  const [statAll, setstatAll] = useState([]);

  const [list, updateList] = useState([]);
  const [allowed, setallowed] = useState(false);

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

  const [oldWoman, setOldWoman] = useState(0);
  const [oldMan, setOldMan] = useState(0);
  const [accibilityPerson, setAccibilityPerson] = useState(0);
  const [baby, setBaby] = useState(0);
  const [orphanGirls, setOrphanGirls] = useState(0);
  const [orphanBoys, setOrphanBoys] = useState(0);
  const [girls, setGirls] = useState(0);
  const [guys, setGuys] = useState(0);
  const [women, setWomen] = useState(0);
  const [men, setMen] = useState(0);

  const [step, setStep] = useState(1);

  function approve(UUdata) {
    let approve = 1;
    let theUserid = UUdata.id;
    let mydd = {
      approve,
      theUserid,
    };
    console.log(mydd);
    api.post("rabwa/ApproveMandobe", mydd).then((res) => {
      mutate("rabwa/GetApproveMandobes");
      alert.show("تم بنجاح", {
        timeout: 2000,
        type: "success",
      });

      setspinner(false);
    });
  }
  function reject(UUdata) {
    let approve = 2;
    let theUserid = UUdata.user_id;
    let mydd = {
      approve,
      theUserid,
    };
    console.log(mydd);
    api.post("rabwa/ApproveMandobe", mydd).then((res) => {
      mutate("rabwa/GetApproveMandobes");
      alert.show("تم بنجاح", {
        timeout: 2000,
        type: "success",
      });

      setspinner(false);
    });
  }

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
                      <h3 class="mb-0">الموافقة على المندوبين</h3>
                    </div>

                    <div class="card-body">
                      {/* Light table */}

                      <div>
                        <div className="table-responsive">
                          <div>
                            <table
                              className="table align-items-center"
                              style={{ display: step == 1 ? "" : "none" }}
                            >
                              <thead className="thead-light">
                                <tr>
                                  <th
                                    scope="col"
                                    className="sort"
                                    data-sort="name"
                                  >
                                    اسم المستفيد{" "}
                                  </th>

                                  <th
                                    scope="col"
                                    className="sort"
                                    data-sort="name"
                                  >
                                    رقم الجوال{" "}
                                  </th>
                                  <th
                                    scope="col"
                                    className="sort"
                                    data-sort="name"
                                  >
                                    الإيميل{" "}
                                  </th>

                                  <th
                                    scope="col"
                                    className="sort"
                                    data-sort="name"
                                  >
                                    الموافقة
                                  </th>
                                  <th
                                    scope="col"
                                    className="sort"
                                    data-sort="budget"
                                  >
                                    الرفض
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="list">
                                {users.length > 0
                                  ? users.map((data, i) => {
                                      return (
                                        <NeedyCheckApproveMandobe
                                          data={data}
                                          approve={approve}
                                          reject={reject}
                                        />
                                      );
                                    })
                                  : ""}
                              </tbody>
                            </table>
                            {showSkeleton ? (
                              <Skeleton height={40} count={10} />
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                      <div></div>
                      <div>
                        <hr />
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

export default ProtectRoute(GiveNeedyCoubon);
