import Admin_nav from "../components/Admin_nav";
import { Checkbox } from "@bit/zenhomes.zenhomes-ui.checkbox";

import React, { useState, useEffect } from "react";
import HeaderNav from "../components/HeaderNav";
import UserInfo from "../components/UserInfo";

import FindBranch from "./findBranch";
import api from "../services/Api";

import Footer from "../components/Footer";
import UserCards from "../components/UserCards";

import NeedyCheck from "../components/NeedyCheck";
import NeedyQuantity from "../components/NeedyQuantity";
import { Getuserss, UserStatistics } from "../services/api_get";
import Skeleton from "react-loading-skeleton";
import useAuth, { ProtectRoute } from "../contexts/auth.js";
import { useAlert } from "react-alert";
import { mutate } from "swr";

function GiveNeedyCoubon() {
  const [PieCartDataNumbers, setPieCartDataNumbers] = useState([]);
  const [PieCartDataMoney, setPieCartDataMoney] = useState([]);
  const [BarChartDataNumbers, setBarChartDataNumbers] = useState([]);
  const [BarChartDataMoney, setBarChartDataMoney] = useState([]);

  //const [project,setProject] = useState(false);
  const [request, setrequest] = useState("firstTime");
  const alert = useAlert();

  let d = new Date();
  let n = d.getMonth();
  const [currentMonth, setcurrentMonth] = useState(n + 1);

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
  const [hide, sethide] = useState("dont");

  const [spinner, setspinner] = useState(false);

  const [TheSelectedcategory, setTheSelectedcategory] = useState(8);
  const [TheSelectedhide, setTheSelectedhide] = useState("dont");

  const { user, isAuthenticated, loading } = useAuth();
  const [MUuserID, setMUuserID] = useState(0);
  const [userInfoMode, setuserInfoMode] = useState(false);

  const { data, isLoading, isError } = Getuserss(
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
    hide
  );

  const results = isLoading ? false : data.data;
  console.log(results);
  const users = isLoading ? false : results.users;
  const numberOfPages = isLoading ? false : results.numberOfPages;

  const showSkeleton = isLoading || loading;

  if (isLoading) console.log(numberOfPages);

  const [citys, setcitys] = useState([]);
  const [aeras, setaeras] = useState([]);
  const [months, setmonths] = useState([
    { name: "January", ar: "يناير", status: 0, value: "01" },
    { name: "February", ar: "فبراير", status: 0, value: "02" },
    { name: "March", ar: "مارس", status: 0, value: "03" },
    { name: "April", ar: "ابريل", status: 0, value: "04" },
    { name: "May", ar: "مايو", status: 0, value: "05" },
    { name: "June", ar: "يونيو", status: 0, value: "06" },
    { name: "July", ar: "يوليو", status: 0, value: "07" },
    { name: "August", ar: "أغسطس", status: 0, value: "08" },
    { name: "September", ar: "سبتمبر", status: 0, value: "09" },
    { name: "October", ar: "أكتوبر", status: 0, value: "10" },
    { name: "November", ar: "نوفمبر", status: 0, value: "11" },
    { name: "December", ar: "ديسمبر", status: 0, value: "12" },
  ]);
  const [month_active, setmonth_active] = useState(false);
  const [TheSelectedCity, setTheSelectedCity] = useState("");
  const [TheSelectedaera, setTheSelectedaera] = useState("all");
  const [modalType, setmodalType] = useState("");

  console.log("the selected city : " + TheSelectedCity);
  const [coubonTotal, setcoubonTotal] = useState(0);

  const [CCAs, setCCAs] = useState([]);
  const [categories, setcategories] = useState([]);

  const [firstTime, setfirstTime] = useState(true);
  const [newState, setnewState] = useState(true);
  const [statAll, setstatAll] = useState([]);

  const [list, updateList] = useState([]);
  const [allowed, setallowed] = useState(false);
  const [ss, setss] = useState(false);

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
  const [pool, setpool] = useState([]);
  const [coubonName, setcoubonName] = useState("");
  const [pool_total, setpool_total] = useState(0);

  function UpdatePool(amount, section, scoubonName, type) {
    let favorite = pool;
    let f = [];
    if (type == "add") {
      var temp = {
        Section_id: section,
        coubonName: scoubonName,
        amount: amount,
      };
      favorite.push(temp);
      f = favorite;
    } else if (type == "remove") {
      for (let index = 0; index < favorite.length; index++) {
        const element = favorite[index];
        if (element.Section_id != section) {
          f.push(element);
        }
      }
    }
    setpool(f);
    let tempc = 0;
    for (let index = 0; index < f.length; index++) {
      const ff = f[index];
      tempc = tempc + ff.amount;
    }
    setpool_total(tempc);
  }

  function editMonth(value, statt) {
    let favorite = months;
    let f = [];
    for (let index = 0; index < favorite.length; index++) {
      const element = favorite[index];
      let stat = element.status;
      if (element.value == value) {
        stat = statt;
      }
      var temp = {
        name: element.name,
        ar: element.ar,
        status: stat,
        value: element.value,
      };
      f.push(temp);
    }

    setmonths(f);

    console.log(f);

    let mydata = list;
    let startcount = 0;
    for (let index = 0; index < mydata.length; index++) {
      let myuser = mydata[index];
      startcount = startcount + parseInt(myuser.share);
    }
    let cc = 0;

    for (let index = 0; index < f.length; index++) {
      const tt = f[index];
      if (tt.status == 1) {
        cc++;
      }
    }
    startcount = startcount * cc;
    setcoubonTotal(startcount);

    //console.log(value);
  }
  function removeMonth(value) {
    console.log(value);
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
    sethide(TheSelectedhide);
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

  function myDistributeCoupons(pool, months, month_active, list) {
    setspinner(true);
    api
      .post("rabwa/DistributeCoupons", { pool, months, month_active, list })
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
          setpool([]);
          setpool_total(0);
          if (request == "firstTime") {
            mutate("rabwa/Getuserss");
          } else {
            mutate(
              "rabwa/OrderGetuserss?page=" +
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
                "&hide=" +
                hide
            );
          }
          setStep(1);
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
                        <h3 class="mb-0">صرف كوبونات للمستفيدين</h3>
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

                              <div className="col-lg-2">
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

                              <div className="col-lg-2">
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
                              <div className="col-lg-2">
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
                              <div className="col-lg-2">
                                <div className="form-group">
                                  <label className="form-control-label">
                                    إخفاء المصروف لهم
                                  </label>
                                  <select
                                    name="category"
                                    onChange={(e) => {
                                      setTheSelectedhide(e.target.value);
                                    }}
                                    class="form-control"
                                  >
                                    <option value="dont">------------</option>

                                    <option value="day">اليوم</option>
                                    <option value="weak">الأسبوع الحالي</option>
                                    <option value="month">الشهر الحالي</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-1"></div>
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
                                    >
                                      {users.length > 0 ? (
                                        <input
                                          type="checkbox"
                                          className="messageCheckbox"
                                          name="sport"
                                          onChange={(e) => {
                                            if (e.target.checked) {
                                              updateArrayall();
                                            } else {
                                              removeUserall();
                                            }
                                          }}
                                        />
                                      ) : (
                                        ""
                                      )}
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="list">
                                  {users.length > 0
                                    ? users.map((data, i) => {
                                        return (
                                          <NeedyCheck
                                            data={data}
                                            updateArray={updateArray}
                                            removeUser={removeUser}
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
                            <>
                              <div className="table-responsive">
                                <div>
                                  <table className="table align-items-center">
                                    <thead className="thead-light">
                                      <tr>
                                        <th
                                          scope="col"
                                          className="sort"
                                          data-sort="name"
                                        >
                                          اسم المستفيد
                                        </th>
                                        <th
                                          scope="col"
                                          className="sort"
                                          data-sort="name"
                                        >
                                          عدد الأفراد
                                        </th>
                                        <th
                                          scope="col"
                                          className="sort"
                                          data-sort="name"
                                        >
                                          أخر كوبون
                                        </th>
                                        <th
                                          scope="col"
                                          className="sort"
                                          data-sort="name"
                                        >
                                          المصروف
                                        </th>
                                        <th
                                          scope="col"
                                          className="sort"
                                          data-sort="name"
                                        >
                                          الأولوية
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
                                        >
                                          عدد الكوبونات
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="list">
                                      {list.length > 0
                                        ? list.map((data, i) => {
                                            return (
                                              <NeedyQuantity
                                                recalculate={recalculate}
                                                data={data}
                                                openModal={openModal}
                                              />
                                            );
                                          })
                                        : ""}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div
                                class="col-xl-12 col-md-12"
                                style={{ height: "50px" }}
                              ></div>

                              <div
                                class="col-xl-12 col-md-12"
                                style={{ height: "50px" }}
                              >
                                <h6 class="mb-2">صرف الكوبونات شهريا </h6>

                                <label class="custom-toggle mb-4">
                                  <input
                                    type="checkbox"
                                    onChange={(e) => {
                                      setpool([]);
                                      setpool_total(0);

                                      if (e.target.checked) {
                                        setmonth_active(true);
                                        setcoubonTotal(0);

                                        setmonths([
                                          {
                                            name: "January",
                                            ar: "يناير",
                                            status: 0,
                                            value: 1,
                                          },
                                          {
                                            name: "February",
                                            ar: "فبراير",
                                            status: 0,
                                            value: 2,
                                          },
                                          {
                                            name: "March",
                                            ar: "مارس",
                                            status: 0,
                                            value: 3,
                                          },
                                          {
                                            name: "April",
                                            ar: "ابريل",
                                            status: 0,
                                            value: 4,
                                          },
                                          {
                                            name: "May",
                                            ar: "مايو",
                                            status: 0,
                                            value: 5,
                                          },
                                          {
                                            name: "June",
                                            ar: "يونيو",
                                            status: 0,
                                            value: 6,
                                          },
                                          {
                                            name: "July",
                                            ar: "يوليو",
                                            status: 0,
                                            value: 7,
                                          },
                                          {
                                            name: "August",
                                            ar: "أغسطس",
                                            status: 0,
                                            value: 8,
                                          },
                                          {
                                            name: "September",
                                            ar: "سبتمبر",
                                            status: 0,
                                            value: 9,
                                          },
                                          {
                                            name: "October",
                                            ar: "أكتوبر",
                                            status: 0,
                                            value: 10,
                                          },
                                          {
                                            name: "November",
                                            ar: "نوفمبر",
                                            status: 0,
                                            value: 11,
                                          },
                                          {
                                            name: "December",
                                            ar: "ديسمبر",
                                            status: 0,
                                            value: 12,
                                          },
                                        ]);
                                      } else {
                                        setmonth_active(false);
                                        calculate();
                                      }
                                    }}
                                  />
                                  <span
                                    class="custom-toggle-slider rounded-circle"
                                    data-label-off="لا"
                                    data-label-on="نعم"
                                  ></span>
                                </label>
                              </div>
                              <div
                                class="col-xl-12 col-md-12"
                                style={{ height: "50px" }}
                              >
                                {month_active ? (
                                  <div className="table-responsive">
                                    <div>
                                      <table className="table align-items-center">
                                        <thead className="thead-light">
                                          <tr>
                                            {months.map((month, index) => {
                                              return (
                                                <th
                                                  scope="col"
                                                  className="sort"
                                                  data-sort="name"
                                                >
                                                  {month.ar}
                                                </th>
                                              );
                                            })}
                                          </tr>
                                        </thead>
                                        <tbody className="list">
                                          <tr>
                                            {months.map((month, index) => {
                                              return (
                                                <td
                                                  className="budget"
                                                  //style={{ float: "right" }}
                                                >
                                                  {currentMonth <=
                                                  month.value ? (
                                                    <Checkbox
                                                      checked={
                                                        month.status == 1
                                                          ? true
                                                          : false
                                                      }
                                                      onClick={() => {
                                                        setss(!ss);
                                                        if (month.status == 0) {
                                                          editMonth(
                                                            month.value,
                                                            1
                                                          );
                                                        } else {
                                                          editMonth(
                                                            month.value,
                                                            0
                                                          );
                                                        }
                                                      }}
                                                    />
                                                  ) : (
                                                    <input
                                                      type="checkbox"
                                                      className="messageCheckbox"
                                                      name="sport"
                                                      //checked="false"
                                                      disabled="true"
                                                    />
                                                  )}
                                                </td>
                                              );
                                            })}
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                              <div
                                class="col-xl-12 col-md-12"
                                style={{ height: "50px" }}
                              ></div>
                              <div class="col-xl-3 col-md-3">
                                <div class="card card-stats">
                                  <div class="card-body  rounded">
                                    <div class="row">
                                      <div class="col">
                                        <h1>عدد المستفيدين : {list.length}</h1>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-xl-4 col-md-4">
                                <div class="card card-stats">
                                  <div class="card-body  rounded">
                                    <div class="row">
                                      <div class="col">
                                        <h1 style={{ Color: "white" }}>
                                          كمية الكوبونات المطلوبة :{" "}
                                          {coubonTotal}
                                        </h1>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xl-5 col-md-5">
                                <div class="card card-stats">
                                  <div
                                    class={
                                      pool.length > 0
                                        ? pool_total >= coubonTotal
                                          ? "card-body bg-green rounded"
                                          : "card-body  rounded"
                                        : "card-body  rounded"
                                    }
                                  >
                                    <div class="row">
                                      <div class="col">
                                        <h1>
                                          كمية الكوبونات بالمستودع المختار :{" "}
                                          {pool_total}
                                        </h1>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col">
                                    <div className="table-responsive">
                                      <div>
                                        <table className="table align-items-center">
                                          <thead className="thead-light">
                                            <tr>
                                              <th
                                                scope="col"
                                                className="sort"
                                                data-sort="name"
                                              >
                                                إسم الكوبون
                                              </th>

                                              <th
                                                scope="col"
                                                className="sort"
                                                data-sort="name"
                                              >
                                                الكمية
                                              </th>
                                            </tr>{" "}
                                          </thead>
                                          <tbody>
                                            {pool.map((tpool, index) => {
                                              return (
                                                <>
                                                  <tr>
                                                    <td>
                                                      <h3>
                                                        {tpool.coubonName}
                                                      </h3>
                                                    </td>
                                                    <td>
                                                      <h3> {tpool.amount}</h3>
                                                    </td>
                                                  </tr>
                                                </>
                                              );
                                            })}
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-xl-12 col-md-12"
                                style={{ height: "50px" }}
                              ></div>

                              <FindBranch
                                city={TheSelectedCity}
                                requiredAmount={coubonTotal}
                                UpdatePool={UpdatePool}
                                pool={pool}
                              />
                              <div
                                class="col-xl-12 col-md-12"
                                style={{ height: "50px" }}
                              ></div>
                              {/*<div class="dropdown">
                              <button
                                onClick={() => {
                                  myFunction();
                                }}
                                class="dropbtn"
                              >
                                Dropdown
                              </button>
                              <div id="myDropdown" class="dropdown-content">
                                <input
                                  type="text"
                                  placeholder="Search.."
                                  id="myInput"
                                  onkeyup={() => {
                                    filterFunction();
                                  }}
                                />
                                <a href="#about">About</a>
                                <a href="#base">Base</a>
                                <a href="#blog">Blog</a>
                                <a href="#contact">Contact</a>
                                <a href="#custom">Custom</a>
                                <a href="#support">Support</a>
                                <a href="#tools">Tools</a>
                              </div>
                                </div>*/}
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                        <div
                          class="col-xl-12 col-md-12"
                          style={{ height: "50px" }}
                        >
                          <div>
                            <div
                              style={{
                                margin: "0 auto",
                                textAlign: "center",
                                marginTop: "9em",
                              }}
                            >
                              {step == 1 ? (
                                ""
                              ) : (
                                <button
                                  type="button"
                                  class="btn btn-lg btn-primary"
                                  disabled={step == 1 ? true : false}
                                  onClick={() => {
                                    step == 1 ? false : setStep(step - 1);
                                    setpool([]);
                                    setpool_total(0);
                                  }}
                                >
                                  السابق
                                </button>
                              )}
                              {step == 1 ? (
                                <button
                                  type="button"
                                  class="btn btn-lg btn-primary"
                                  disabled={allowed ? false : true}
                                  onClick={() => {
                                    step == 1 ? calculate() : "";
                                    step == 4 ? false : setStep(step + 1);
                                  }}
                                >
                                  التالي
                                </button>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                          <div>
                            <hr />

                            <div style={{ textAlign: "left" }}>
                              {pool.length > 0 ? (
                                pool_total >= coubonTotal ? (
                                  <button
                                    class="btn btn-icon btn-success"
                                    onClick={() => {
                                      // setPersonNeeds(favorite.join(", "));

                                      myDistributeCoupons(
                                        pool,
                                        months,
                                        month_active,
                                        list
                                      );
                                    }}
                                    type="button"
                                  >
                                    {spinner == false ? (
                                      <span
                                        style={{
                                          marginLeft: ".75em",
                                          marginRight: "auto",
                                        }}
                                        class="btn-inner--text"
                                      >
                                        إرسال الكوبونات
                                      </span>
                                    ) : (
                                      <span
                                        style={{
                                          marginLeft: ".75em",
                                          marginRight: "auto",
                                        }}
                                        class="btn-inner--text"
                                      >
                                        جاري الإرسال
                                      </span>
                                    )}
                                    {"     "}
                                    <span class="btn-inner--icon">
                                      <i class="ni ni-send"></i>
                                    </span>
                                  </button>
                                ) : (
                                  ""
                                )
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
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
                  {ModelData ? <UserCards user_id={ModelData.user_id} /> : ""}
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
            ) : (
              <div class="modal-content"></div>
            )}
          </div>
        </div>
        {/* Argon MODEL */}
      </body>
    </>
  );
}

export default ProtectRoute(GiveNeedyCoubon);
