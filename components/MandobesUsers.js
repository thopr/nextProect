import React, { useState, useEffect } from "react";

import UserInfo from "../components/UserInfo";

import api from "../services/Api";

import Footer from "../components/Footer";
import NeedyCheckUsersOfMandobe from "./NeedyCheckUsersOfMandobe";
import { GetMandobUsers } from "../services/api_get";
import Skeleton from "react-loading-skeleton";
import useAuth, { ProtectRouteMandobe } from "../contexts/auth.js";
import { useAlert } from "react-alert";
import { mutate } from "swr";

function MandobesUsers({ mandobe_id, setusersInfoMode, CurrenMandomeName }) {
  // setusersInfoMode(false);
  console.log(mandobe_id);
  const mID = mandobe_id > 0 ? mandobe_id : false;

  //const [project,setProject] = useState(false);
  const [request, setrequest] = useState("firstTime");
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

  const { user, isAuthenticated, loading } = useAuth();
  const [MUuserID, setMUuserID] = useState(0);

  const { data, isLoading, isError } = GetMandobUsers(
    request,
    name,
    members,
    last_coubon,
    total_coubons,
    piority,
    page,
    Scity,
    Saera,
    Scat,
    RsName,
    RsPhone,
    mID
  );

  const results = isLoading ? false : data.data;
  console.log(results);

  const users = isLoading ? false : results.users;
  const numberOfPages = isLoading ? false : results.numberOfPages;

  const showSkeleton = isLoading || loading;

  if (isLoading) console.log(numberOfPages);

  const [citys, setcitys] = useState([]);
  const [aeras, setaeras] = useState([]);
  const [TheSelectedCity, setTheSelectedCity] = useState("");
  const [TheSelectedaera, setTheSelectedaera] = useState("all");

  console.log("the selected city : " + TheSelectedCity);
  const [coubonTotal, setcoubonTotal] = useState(0);

  const [CCAs, setCCAs] = useState([]);
  const [categories, setcategories] = useState([]);

  const [firstTime, setfirstTime] = useState(true);
  const [newState, setnewState] = useState(true);
  const [statAll, setstatAll] = useState([]);

  const [list, updateList] = useState([]);
  const [allowed, setallowed] = useState(false);
  const [userInfoMode, setuserInfoMode] = useState(false);

  function GoBackAndTriggerMutation() {
    setmodalType("cards");
  }

  if (firstTime && numberOfPages) {
    setCCAs(results.options.CCAs);

    setTheSelectedCity(results.options.CCAs[0].data[0].name);

    setcitys(results.options.CCAs[0].data);
    setaeras(results.options.CCAs[0].data[0].data);
    setcategories(results.options.categories);

    setfirstTime(false);
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
    if (request == "firstTime") {
      mutate("rabwa/GetMandobUsers?mandobe_id=" + mID);
    } else {
      mutate(
        "rabwa/OrderGetMandobUsers?page=" +
          page +
          "&name=" +
          name +
          "&members=" +
          members +
          "&last_coubon=" +
          last_coubon +
          "&total_coubons=" +
          total_coubons +
          "&Scity=" +
          Scity +
          "&Saera=" +
          Saera +
          "&Scat=" +
          Scat +
          "&piority=" +
          piority +
          "&RsName=" +
          RsName +
          "&RsPhone=" +
          RsPhone +
          "&mandobe_id=" +
          mID
      );
    }
  }

  function myEditUser(theSelectedUser) {
    console.log(theSelectedUser);
    setTheUser(theSelectedUser);
    setStep(2);
  }

  function myDisUser(theSelectedDisUserId, sStatus) {
    let approve = sStatus;
    let theUserid = theSelectedDisUserId;
    let mydd = {
      approve,
      theUserid,
    };
    console.log(mydd);
    api.post("rabwa/ApproveUser", mydd).then((res) => {
      if (request == "firstTime") {
        mutate("rabwa/GetMandobUsers?mandobe_id=" + mID);
      } else {
        mutate(
          "rabwa/OrderGetMandobUsers?page=" +
            page +
            "&name=" +
            name +
            "&members=" +
            members +
            "&last_coubon=" +
            last_coubon +
            "&total_coubons=" +
            total_coubons +
            "&Scity=" +
            Scity +
            "&Saera=" +
            Saera +
            "&Scat=" +
            Scat +
            "&piority=" +
            piority +
            "&RsName=" +
            RsName +
            "&RsPhone=" +
            RsPhone +
            "&mandobe_id=" +
            mID
        );
      }
      alert.show("تم بنجاح", {
        timeout: 2000,
        type: "success",
      });
    });
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

  function myDistributeCoupons(pool, coubonName, list) {
    setspinner(true);
    api
      .post("rabwa/DistributeCoupons", { pool, coubonName, list })
      .then((res) => {
        setspinner(false);
        console.log(res.data);

        if (res.data == "already exists") {
          alert.show("إسم الكوبون موجود مسبقا ", {
            timeout: 2000,
            type: "error",
          });
        }
        if (res.data == "email") {
          alert.show("الإيميل مستخدم مسبقا", {
            timeout: 2000,
            type: "error",
          });
        }

        if (res.data > 0) {
          alert.show("تم بنجاح", {
            timeout: 2000,
            type: "success",
          });
          //GoBackAndTriggerMutation();
          //router.push("/companys/[name]", "/companys/" + formdata.companyName);
        }
      })
      .catch((err) => {
        setspinner(false);
        console.log(err);
      });
  }

  async function removeUser(id) {
    let favorite = list;
    if (list.length == 1) {
      setallowed(false);
    }
    favorite = await favorite.filter((e) => e.id !== id);
    updateList(favorite);

    /* let favorite = personNeeds;
    console.log(favorite);

    favorite = await favorite.filter((user) => user.id !== id);
    console.log(favorite);

    setPersonNeeds(favorite);*/

    // setPersonNeeds([]);
    //

    // myset(favorite);
    //setJoinList(joinList.filter((e) => e !== id));

    // setPersonNeeds(personNeeds.filter((user) => user.id !== id));
  }

  /*
  function settheNeedyNames() {
    let favorite = [];
    $.each($("input[name='sport']"), function () {
      $(this)..prop('checked', true);
    });

    setPersonNeeds(favorite.join(", "));
  }*/

  const [ModelData, setModelData] = useState([]);
  const [modalType, setmodalType] = useState("");

  function openModal(myuserData, type) {
    if (type == "stats") {
      // setnewState(true);

      let tempUserID = myuserData.user_id;
      setMUuserID(tempUserID);
      setuserInfoMode(true);

      console.log("----here---" + tempUserID);
      console.log(myuserData);
      console.log("here");
    } else {
      setmodalType(type);
      setModelData(myuserData);
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

  function recalculate(value, id) {
    /* let favorite2 = [];
    $.each($("input[name='sport2']"), function () {
      favorite.push($(this).val());
    });*/
    let mydata = list;
    let startcount = 0;
    for (let index = 0; index < mydata.length; index++) {
      let myuser = mydata[index];

      if (myuser.id == id) {
        myuser.share = value;
        updateList(list);
        startcount = startcount + parseInt(value);
      } else {
        startcount = startcount + parseInt(myuser.share);
      }
    }

    setcoubonTotal(startcount);

    //setPersonNeeds(favorite.join(", "));
  }

  function myFunction() {
    console.log("hele");
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function filterFunction() {
    console.log("here");
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  console.log("---------a-------------");
  console.log(list);
  console.log("----------b------------");

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
    <>
      <div>
        {/* Sidenav */}

        {/* Main content */}

        {/* Topnav */}

        {/* Header */}
        {/* Header */}

        {userInfoMode ? (
          <UserInfo id={MUuserID} setuserInfoMode={setuserInfoMode} />
        ) : (
          <div class="container-fluid mt--6">
            <button class="btn btn-primary" onClick={() => {}}>
              back
            </button>
            <div class="row justify-content-center">
              <div class=" col ">
                <div class="card">
                  <div class="card-header bg-transparent">
                    <h3 class="mb-0">
                      المستفيدين للمندوب : {CurrenMandomeName}
                    </h3>
                    <div style={{ float: "right" }}>
                      <button
                        onClick={() => {
                          // setChoose("company");
                          setusersInfoMode(false);
                        }}
                        class="btn btn-icon btn-primary"
                        type="button"
                      >
                        <span class="btn-inner--icon">
                          <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        </span>
                      </button>

                      <h2 style={{ marginRight: "0.8em", display: "inline" }}>
                        العودة الى الخلف
                      </h2>
                      <div style={{ clear: "both" }}></div>
                    </div>
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
                                  أخر كوبون{" "}
                                </th>

                                <th
                                  scope="col"
                                  className="sort"
                                  data-sort="name"
                                >
                                  المصروف{" "}
                                </th>

                                <th
                                  scope="col"
                                  className="sort"
                                  data-sort="name"
                                >
                                  الأولوية{" "}
                                </th>
                              </tr>
                            </thead>
                            <tbody className="list">
                              {users.length > 0
                                ? users.map((data, i) => {
                                    return (
                                      <NeedyCheckUsersOfMandobe
                                        data={data}
                                        myEditUser={myEditUser}
                                        myDisUser={myDisUser}
                                        openModal={openModal}
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
                      {step == 2 ? (
                        <EditUser
                          TheUser={TheUser}
                          updatesetstep={updatesetstep}
                        />
                      ) : (
                        ""
                      )}
                    </div>

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
          ) : (
            <div class="modal-content"></div>
          )}
        </div>
      </div>
      {/* Argon MODEL */}
    </>
  );
}

export default MandobesUsers;
