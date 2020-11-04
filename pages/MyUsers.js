import Admin_nav from "../components/Admin_nav";
import React, { useState, useEffect } from "react";
import HeaderNav from "../components/HeaderNav";
import UserCards from "../components/UserCards";
import NewCardForm from "../components/NewCardForm";

import EditUser from "../components/EditUser";
import UserInfo from "../components/UserInfo";

import api from "../services/Api";

import Footer from "../components/Footer";
import NeedyCheckUsers from "../components/NeedyCheckUsers";
import { GetMandobUsers } from "../services/api_get";
import Skeleton from "react-loading-skeleton";
import useAuth, { ProtectRouteMandobe } from "../contexts/auth.js";
import { useAlert } from "react-alert";
import { mutate } from "swr";

function MyUsers() {
  const [PieCartDataNumbers, setPieCartDataNumbers] = useState([]);
  const [PieCartDataMoney, setPieCartDataMoney] = useState([]);
  const [BarChartDataNumbers, setBarChartDataNumbers] = useState([]);
  const [BarChartDataMoney, setBarChartDataMoney] = useState([]);
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
    RsPhone
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
      mutate("rabwa/GetMandobUsers");
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
          RsPhone
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
        mutate("rabwa/GetMandobUsers");
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
            RsPhone
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

      let tempUserID = myuserData.id;
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
                        <h3 class="mb-0">المستفيدين</h3>
                      </div>

                      <div class="card-body">
                        {/* Light table */}

                        <div>
                          {step == 1 ? (
                            <>
                              <h2> فلاتر و بحث</h2>
                              <div className="col-lg-5">
                                <div className="form-group">
                                  {" "}
                                  <label className="form-control-label">
                                    الإسم
                                  </label>
                                  <input
                                    type="text"
                                    id="input-username"
                                    class="form-control"
                                    placeholder="الإسم"
                                    value={SsearchName}
                                    onChange={(e) => {
                                      setSsearchName(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <div className="col-lg-1">
                                {" "}
                                <button
                                  class="btn btn-lg btn-primary"
                                  onClick={() => {
                                    NameS();
                                  }}
                                  style={{ marginBottom: "-83px" }}
                                >
                                  بحث
                                </button>
                              </div>
                              <div className="col-lg-5">
                                <div className="form-group">
                                  {" "}
                                  <label className="form-control-label">
                                    رقم الجوال
                                  </label>
                                  <input
                                    type="text"
                                    id="input-username"
                                    class="form-control"
                                    placeholder="9665xxxxxx"
                                    value={SsearchPhone}
                                    onChange={(e) => {
                                      setSsearchPhone(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <div className="col-lg-1">
                                {" "}
                                <button
                                  class="btn btn-lg btn-primary"
                                  onClick={() => {
                                    phoneS();
                                  }}
                                  style={{ marginBottom: "-83px" }}
                                >
                                  بحث
                                </button>
                              </div>

                              <div className="col-lg-3">
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
                                        if (
                                          tempconunty.name === selectedCounty
                                        ) {
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

                              <div className="col-lg-3">
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
                              <div className="col-lg-3">
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
                                    <option value="all">الكل</option>
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
                              <div className="col-lg-2">
                                <div className="form-group">
                                  <label className="form-control-label">
                                    الإحتياج
                                  </label>
                                  <select
                                    name="category"
                                    onChange={(e) => {
                                      setTheSelectedcategory(e.target.value);
                                    }}
                                    class="form-control"
                                  >
                                    {categories.length > 0
                                      ? categories.map((category, index) => {
                                          return (
                                            <option value={category.id}>
                                              {category.name}
                                            </option>
                                          );
                                        })
                                      : ""}
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-1">
                                <button
                                  class="btn btn-lg btn-primary"
                                  onClick={() => {
                                    filter();
                                  }}
                                  style={{ marginBottom: "-83px" }}
                                >
                                  فلترة
                                </button>
                              </div>

                              <hr />
                            </>
                          ) : (
                            ""
                          )}
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
                                      onClick={() => {
                                        if (name == 0) {
                                          setname(1);
                                          order();
                                        }
                                        if (name == 1) {
                                          setname(2);
                                          order();
                                        }
                                        if (name == 2) {
                                          setname(1);
                                          order();
                                        }
                                      }}
                                    >
                                      اسم المستفيد{" "}
                                      {name == 0 ? (
                                        ""
                                      ) : name == 1 ? (
                                        <i
                                          class="fa fa-arrow-up"
                                          aria-hidden="true"
                                        ></i>
                                      ) : (
                                        <i
                                          class="fa fa-arrow-down"
                                          aria-hidden="true"
                                        ></i>
                                      )}
                                    </th>
                                    <th
                                      scope="col"
                                      className="sort"
                                      data-sort="name"
                                      onClick={() => {
                                        if (members == 0) {
                                          setmembers(1);
                                          order();
                                        }
                                        if (members == 1) {
                                          setmembers(2);
                                          order();
                                        }
                                        if (members == 2) {
                                          setmembers(1);
                                          order();
                                        }
                                      }}
                                    >
                                      عدد الأفراد{" "}
                                      {members == 0 ? (
                                        ""
                                      ) : members == 1 ? (
                                        <i
                                          class="fa fa-arrow-up"
                                          aria-hidden="true"
                                        ></i>
                                      ) : (
                                        <i
                                          class="fa fa-arrow-down"
                                          aria-hidden="true"
                                        ></i>
                                      )}
                                    </th>

                                    <th
                                      scope="col"
                                      className="sort"
                                      data-sort="name"
                                      onClick={() => {
                                        if (last_coubon == 0) {
                                          setlast_coubon(1);
                                          order();
                                        }
                                        if (last_coubon == 1) {
                                          setlast_coubon(2);
                                          order();
                                        }
                                        if (last_coubon == 2) {
                                          setlast_coubon(1);
                                          order();
                                        }
                                      }}
                                    >
                                      أخر كوبون{" "}
                                      {last_coubon == 0 ? (
                                        ""
                                      ) : last_coubon == 1 ? (
                                        <i
                                          class="fa fa-arrow-up"
                                          aria-hidden="true"
                                        ></i>
                                      ) : (
                                        <i
                                          class="fa fa-arrow-down"
                                          aria-hidden="true"
                                        ></i>
                                      )}
                                    </th>

                                    <th
                                      scope="col"
                                      className="sort"
                                      data-sort="name"
                                      onClick={() => {
                                        if (total_coubons == 0) {
                                          settotal_coubons(1);
                                          order();
                                        }
                                        if (total_coubons == 1) {
                                          settotal_coubons(2);
                                          order();
                                        }
                                        if (total_coubons == 2) {
                                          settotal_coubons(1);
                                          order();
                                        }
                                      }}
                                    >
                                      المصروف{" "}
                                      {total_coubons == 0 ? (
                                        ""
                                      ) : total_coubons == 1 ? (
                                        <i
                                          class="fa fa-arrow-up"
                                          aria-hidden="true"
                                        ></i>
                                      ) : (
                                        <i
                                          class="fa fa-arrow-down"
                                          aria-hidden="true"
                                        ></i>
                                      )}
                                    </th>

                                    <th
                                      scope="col"
                                      className="sort"
                                      data-sort="name"
                                      onClick={() => {
                                        if (piority == 0) {
                                          setpiority(1);
                                          order();
                                        }
                                        if (piority == 1) {
                                          setpiority(2);
                                          order();
                                        }
                                        if (piority == 2) {
                                          setpiority(1);
                                          order();
                                        }
                                      }}
                                    >
                                      الأولوية{" "}
                                      {piority == 0 ? (
                                        ""
                                      ) : piority == 1 ? (
                                        <i
                                          class="fa fa-arrow-up"
                                          aria-hidden="true"
                                        ></i>
                                      ) : (
                                        <i
                                          class="fa fa-arrow-down"
                                          aria-hidden="true"
                                        ></i>
                                      )}
                                    </th>
                                    <th
                                      scope="col"
                                      className="sort"
                                      data-sort="name"
                                    >
                                      البطاقات
                                    </th>
                                    <th
                                      scope="col"
                                      className="sort"
                                      data-sort="name"
                                    >
                                      معلومات
                                    </th>
                                    <th
                                      scope="col"
                                      className="sort"
                                      data-sort="budget"
                                    ></th>
                                  </tr>
                                </thead>
                                <tbody className="list">
                                  {users.length > 0
                                    ? users.map((data, i) => {
                                        return (
                                          <NeedyCheckUsers
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
              <div class="modal-content">
                <div class="modal-header">
                  <h6 class="modal-title" id="modal-title-default">
                    بطاقات المستفيد
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
                  {ModelData ? <UserCards user_id={ModelData.id} /> : ""}
                </div>
                <button
                  type="button"
                  class="btn btn-danger "
                  style={{ float: "right" }}
                  onClick={() => {
                    setmodalType("newCard");
                  }}
                >
                  بطاقة جديدة
                </button>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-link "
                    data-dismiss="modal"
                    style={{ float: "left" }}
                  >
                    إغلاق
                  </button>
                </div>
              </div>
            ) : (
              <div class="modal-content">
                <div class="modal-header">
                  <h6 class="modal-title" id="modal-title-default">
                    بطاقة جديدة
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
                    <NewCardForm
                      user_id={ModelData.id}
                      username={ModelData.Name}
                      GoBackAndTriggerMutation={GoBackAndTriggerMutation}
                    />
                  ) : (
                    ""
                  )}
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-link "
                    data-dismiss="modal"
                    style={{ float: "left" }}
                  >
                    إغلاق
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Argon MODEL */}
      </body>
    </>
  );
}

export default ProtectRouteMandobe(MyUsers);
