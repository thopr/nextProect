import Admin_nav from "../components/Admin_nav";

import React, { useState, useEffect } from "react";
import HeaderNav from "../components/HeaderNav";
import ListMandobes from "../components/ListMandobes";
import UserInfo from "../components/UserInfo";

import api from "../services/Api";

import Footer from "../components/Footer";
import NeedyCheckApprove from "../components/NeedyCheckApprove";
import { GetApproveuserss, UserStatistics } from "../services/api_get";
import Skeleton from "react-loading-skeleton";
import useAuth, { ProtectRoute } from "../contexts/auth.js";
import { useAlert } from "react-alert";
import { mutate } from "swr";

function GiveNeedyCoubon() {
  //const [project,setProject] = useState(false);
  const alert = useAlert();

  const [name, setname] = useState(0);
  const [ModelData, setModelData] = useState([]);
  const [modalType, setmodalType] = useState("");
  const [pageup, setpageup] = useState(1);

  useEffect(() => {
    console.log("test2zzzzzzzz");
  }, [pageup]);
  const [members, setmembers] = useState(0);
  const [last_coubon, setlast_coubon] = useState(0);
  const [total_coubons, settotal_coubons] = useState(0);
  const [NewMandobe_id, setNewMandobe_id] = useState(0);

  const [piority, setpiority] = useState(0);
  const [page, setpage] = useState(1);
  const [Scity, setScity] = useState("جدة");
  const [Saera, setSaera] = useState("all");
  const [Scat, setScat] = useState(8);
  const [spinner, setspinner] = useState(false);

  const { user, isAuthenticated, loading } = useAuth();

  const { data, isLoading, isError } = GetApproveuserss();

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
  const [userInfoMode, setuserInfoMode] = useState(false);
  const [MUuserID, setMUuserID] = useState(0);

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

  function approve(UUdata) {
    let approve = 1;
    let theUserid = UUdata.id;
    let mydd = {
      approve,
      theUserid,
    };
    console.log(mydd);
    api.post("rabwa/ApproveUser", mydd).then((res) => {
      mutate("rabwa/GetApproveuserss");
      alert.show("تم بنجاح", {
        timeout: 2000,
        type: "success",
      });

      setspinner(false);
    });
  }
  function reject(UUdata) {
    let approve = 3;
    let theUserid = UUdata.id;
    let mydd = {
      approve,
      theUserid,
    };
    console.log(mydd);
    api.post("rabwa/ApproveUser", mydd).then((res) => {
      mutate("rabwa/GetApproveuserss");
      alert.show("تم بنجاح", {
        timeout: 2000,
        type: "success",
      });

      setspinner(false);
    });
  }

  function updateUserMandobe(zzuser_id) {
    let data = { user_id: zzuser_id, NewMandobe_id: NewMandobe_id };
    api.post("rabwa/updateUserMandobe", data).then((res) => {
      console.log(res.data);
    });

    setNewMandobe_id(0);
  }

  function openModal(myuserData, type) {
    let xx = myuserData;
    setpageup(pageup + 1);
    setmodalType("stats");
    setModelData([]);
    console.log("zxzzzzzzzzzzzzzzzzzzz");
    console.log(xx);
    console.log("zxzzzzzzzzzzzzzzzzzzz");

    if (type == "stats") {
      // setnewState(true);
      let tempUserID = xx.id;
      setMUuserID(tempUserID);
      setuserInfoMode(true);
    } else {
      setmodalType(type);
      setModelData(xx);
    }
  }
  function calculate() {
    let mydata = list;
    let startcount = 0;
    for (let index = 0; index < mydata.length; index++) {
      let myuser = mydata[index];
      startcount = startcount + parseInt(myuser.share);
    }

    setcoubonTotal(startcount);
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
            {userInfoMode ? (
              <UserInfo id={MUuserID} setuserInfoMode={setuserInfoMode} />
            ) : (
              <div class="container-fluid mt--6">
                <div class="row justify-content-center">
                  <div class=" col ">
                    <div class="card">
                      <div class="card-header bg-transparent">
                        <h3 class="mb-0">الموافقة على المستفيدين</h3>
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
                                      عدد الأفراد{" "}
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
                                      الأولوية{" "}
                                    </th>
                                    <th
                                      scope="col"
                                      className="sort"
                                      data-sort="name"
                                    >
                                      معلومات{" "}
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
                                          <NeedyCheckApprove
                                            data={data}
                                            approve={approve}
                                            reject={reject}
                                            openModal={openModal}
                                            setmodalType={setmodalType}
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
            )}
          </div>

          {/* Argon Scripts */}
          {/* Core */}
          {/* Optional JS */}
          {/* Argon JS */}
        </div>
        {/* Argon MODEL */}
        <div
          class="modal fade"
          id="modal-default"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modal-default"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal- modal-dialog-centered modal-"
            role="document"
          >
            {modalType == "stats" ? (
              <div class="modal-content"></div>
            ) : modalType == "cards" ? (
              <div class="modal-content"></div>
            ) : modalType == "newCard" ? (
              <div class="modal-content"></div>
            ) : modalType == "updateMandobe" ? (
              <div class="modal-content">
                <div class="modal-header">
                  <h6 class="modal-title" id="modal-title-default">
                    إختيار المندوب
                  </h6>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>

                <div class="modal-body">
                  {ModelData ? (
                    <div
                      style={{
                        overflowY: "scroll",
                        height: "300px",
                        width: "100%",
                        paddingRight: "5%",
                      }}
                    >
                      <ListMandobes
                        user_id={ModelData.id}
                        mandobe_id={ModelData.mandobe_id}
                        setNewMandobe_id={setNewMandobe_id}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div class="modal-footer">
                  {ModelData.mandobe_id > 0 ? (
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-dismiss="modal"
                      style={{ float: "left" }}
                      onClick={() => {
                        if (NewMandobe_id > 0) {
                          updateUserMandobe(ModelData.id);
                        }
                        console.log("heeexxxxxx");
                        console.log(ModelData.mandobe_id);

                        console.log("heeexxxxxx");
                        console.log("yyyyyyyyyyyy");
                        console.log(NewMandobe_id);
                        console.log("yyyyyyyyyyyy");

                        approve(ModelData);
                      }}
                    >
                      موافقة
                    </button>
                  ) : NewMandobe_id > 0 ? (
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-dismiss="modal"
                      style={{ float: "left" }}
                      onClick={() => {
                        if (NewMandobe_id > 0) {
                          updateUserMandobe(ModelData.id);
                        }
                        console.log("heeexxxxxx");
                        console.log(ModelData.mandobe_id);

                        console.log("heeexxxxxx");
                        console.log("yyyyyyyyyyyy");
                        console.log(NewMandobe_id);
                        console.log("yyyyyyyyyyyy");

                        approve(ModelData);
                      }}
                    >
                      موافقة
                    </button>
                  ) : (
                    <button
                      type="button"
                      class="btn btn-primary"
                      style={{ float: "left" }}
                      disabled
                    >
                      موافقة
                    </button>
                  )}{" "}
                  <button
                    type="button"
                    class="btn btn-link "
                    data-dismiss="modal"
                    style={{ float: "left" }}
                    onClick={() => {
                      setmodalType("stats");
                    }}
                  >
                    إغلاق
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* Argon MODEL */}
      </body>
    </>
  );
}

export default ProtectRoute(GiveNeedyCoubon);
