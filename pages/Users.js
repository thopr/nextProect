import Admin_nav from "../components/Admin_nav";
import { Chart } from "@bit/primefaces.primereact.chart";
import React, { useState, useEffect } from "react";
import HeaderNav from "../components/HeaderNav";
import UserCards from "../components/UserCards";
import NewCardForm from "../components/NewCardForm";
import ListMandobes from "../components/ListMandobes";

import CounterInput from "react-counter-input";

import EditUser from "../components/EditUser";
import UserInfo from "../components/UserInfo";

import api from "../services/Api";

import Footer from "../components/Footer";
import NeedyCheckUsers from "../components/NeedyCheckUsers";
import NeedyQuantity from "../components/NeedyQuantity";
import { Getuserss2, UserStatistics } from "../services/api_get";
import Skeleton from "react-loading-skeleton";
import useAuth, { ProtectRoute } from "../contexts/auth.js";
import { useAlert } from "react-alert";
import { mutate } from "swr";

function Users() {
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
  const [SType, setSType] = useState("all");

  const [Spaiority, setSpaiority] = useState("all");
  const [SNumber, setSNumber] = useState(0);

  const [SsearchName, setSsearchName] = useState("");
  const [SsearchPhone, setSsearchPhone] = useState("");
  const [RsName, setRsName] = useState(false);
  const [RsPhone, setRsPhone] = useState(false);

  const [spinner, setspinner] = useState(false);

  const [TheSelectedcategory, setTheSelectedcategory] = useState(8);
  const [TheSelectedpiority, setTheSelectedpiority] = useState("all");
  const [TheSelectedType, setTheSelectedType] = useState("all");
  const [TheSelectedNumber, setTheSelectedNumber] = useState(0);

  const [TheUser, setTheUser] = useState([]);

  const { user, isAuthenticated, loading } = useAuth();
  const [MUuserID, setMUuserID] = useState(0);

  const {
    UserStatisticsData,
    UserStatisticsisLoading,
    UserStatisticsisError,
  } = UserStatistics(MUuserID);

  const UserStatisticsresults =
    UserStatisticsData == false ? false : UserStatisticsData;

  const showSkeleton2 = UserStatisticsisLoading || loading;

  const { data, isLoading, isError } = Getuserss2(
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
    Spaiority,
    SType,
    SNumber
  );

  const results = isLoading ? false : data.data;
  console.log(data);

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

  if (UserStatisticsresults && newState) {
    let testState = UserStatisticsresults.data;

    let TheYear = testState.theYear;
    setstatAll(testState.All);
    let months = TheYear.months;

    setPieCartDataNumbers({
      labels: ["المرسلة", "المستخدمة"],
      datasets: [
        {
          data: [TheYear.sentTotalCount, TheYear.usedTotalCount],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    });

    setPieCartDataMoney({
      labels: ["المرسلة", "المستخدمة"],
      datasets: [
        {
          data: [TheYear.sentTotal, TheYear.usedTotal],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    });
    setBarChartDataNumbers({
      labels: [
        "يناير",
        "فبراير",
        "مارس",
        "أبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ],
      datasets: [
        {
          label: "الكوبونات المصروفة السنة الحالية",
          backgroundColor: "#42A5F5",
          data: [
            0,
            0,
            0,
            0,
            0,
            0,
            months.JulyTotalCount,
            months.AugustTotalCount,
            0,
            0,
            0,
            0,
          ],
        },
      ],
    });

    setBarChartDataMoney({
      labels: [
        "يناير",
        "فبراير",
        "مارس",
        "أبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ],
      datasets: [
        {
          label: "الكوبونات المصروفة السنة الحالية",
          backgroundColor: "#42A5F5",
          data: [
            0,
            0,
            0,
            0,
            0,
            0,
            months.JulyTotal,
            months.AugustTotal,
            0,
            0,
            0,
            0,
          ],
        },
      ],
    });
    setnewState(false);
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
  const [NewMandobe_id, setNewMandobe_id] = useState(0);

  function updateUserMandobe(zzuser_id) {
    let data = { user_id: zzuser_id, NewMandobe_id: NewMandobe_id };
    api.post("rabwa/updateUserMandobe", data).then((res) => {
      console.log(res.data);

      if (res.data > 0) {
        alert.show("تم بنجاح", {
          timeout: 2000,
          type: "success",
        });

        if (request == "firstTime") {
          mutate("rabwa/Getuserss2");
        } else {
          mutate(
            "rabwa/OrderGetuserss2?page=" +
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
              "&Spaiority=" +
              Spaiority +
              "&SType=" +
              SType +
              "&SNumber=" +
              SNumber
          );
        }

        //GoBackAndTriggerMutation();
        //router.push("/companys/[name]", "/companys/" + formdata.companyName);
      }
    });

    setNewMandobe_id(0);
  }

  function updatesetstep(thes) {
    setStep(thes);
    if (request == "firstTime") {
      mutate("rabwa/Getuserss2");
    } else {
      mutate(
        "rabwa/OrderGetuserss2?page=" +
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
          "&Spaiority=" +
          Spaiority +
          "&SType=" +
          SType +
          "&SNumber=" +
          SNumber
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
        mutate("rabwa/Getuserss2");
      } else {
        mutate(
          "rabwa/OrderGetuserss2?page=" +
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
            "&Spaiority=" +
            Spaiority +
            "&SType=" +
            SType +
            "&SNumber=" +
            SNumber
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
    setSType(TheSelectedType);
    setSpaiority(TheSelectedpiority);
    setSNumber(TheSelectedNumber);
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
                              <div className="col-lg-3">
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
                              <div className="col-lg-3">
                                <div className="form-group">
                                  <label className="form-control-label">
                                    الحالة
                                  </label>
                                  <select
                                    name="category"
                                    onChange={(e) => {
                                      setTheSelectedpiority(e.target.value);
                                    }}
                                    class="form-control"
                                  >
                                    <option value="all">الكل</option>

                                    <option value="normal">عادي</option>

                                    <option value="critical">حرجة</option>
                                    <option value="superCritical">
                                      حرجة جدا
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="form-group">
                                  <label className="form-control-label">
                                    النوع
                                  </label>
                                  <select
                                    name="category"
                                    onChange={(e) => {
                                      setTheSelectedType(e.target.value);
                                    }}
                                    class="form-control"
                                  >
                                    <option value="all">الكل</option>

                                    <option value="single">فرد</option>
                                    <option value="family">عائلة</option>
                                  </select>
                                </div>
                              </div>

                              <div className="col-lg-2">
                                <div className="form-group">
                                  <label className="form-control-label">
                                    عدد الأفراد
                                  </label>
                                  <CounterInput
                                    min={0}
                                    onCountChange={(count) => {
                                      setTheSelectedNumber(count);
                                    }}
                                  />
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
                                      data-sort="name"
                                    >
                                      الحساب
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
              <div class="modal-content">
                <div class="modal-header">
                  <h6 class="modal-title" id="modal-title-default">
                    معلومات المستفيد
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
                    <>
                      <div class="row">
                        <div class="col-3">
                          {" "}
                          <h3>اسم المستفيد</h3>
                        </div>

                        <div class="col-3">{ModelData.Name}</div>
                        <div class="col-3">
                          <h3>رقم الجوال</h3>
                        </div>
                        <div class="col-3">{ModelData.phone}</div>
                      </div>
                      <div class="row">
                        <div class="col-3">
                          <h3>أخر كوبون</h3>
                        </div>
                        <div class="col-3">{ModelData.lastCoubon}</div>
                        <div class="col-3">
                          <h3>المصروف</h3>
                        </div>
                        <div class="col-3">{ModelData.totalCoubons}</div>
                      </div>
                      <div class="row">
                        <div class="col-3">
                          <h3>الأولوية</h3>
                        </div>
                        <div class="col-3">{ModelData.priority}</div>
                        <div class="col-3">
                          <h3>عدد الأفراد</h3>
                        </div>
                        <div class="col-3">{ModelData.mempersCount}</div>
                      </div>
                      <div class="row">
                        <div class="col-3">
                          <h3>الإيميل</h3>
                        </div>
                        <div class="col-3">{ModelData.email}</div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-12">
                          <h1 style={{ textAlign: "center" }}>إحصائيات</h1>
                        </div>
                      </div>
                      {UserStatisticsresults ? (
                        <>
                          {" "}
                          <div class="col-xl-12 col-md-12">
                            <div class="">
                              <div class="card-body  rounded">
                                <div class="row">
                                  <div class="col">
                                    <h1 style={{ textAlign: "center" }}>
                                      جميع الكوبونات
                                    </h1>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row" dir="rtl">
                            <div class="col-xl-6 col-md-6">
                              <div
                                class="card card-stats"
                                style={{ backgroundColor: "#8bc34aa6" }}
                              >
                                <div class="card-body">
                                  <div class="row">
                                    <div class="col">
                                      <h5 class="card-title text-uppercase text-muted mb-0">
                                        الكوبونات المستخدمة
                                      </h5>
                                      <span class="h2  font-weight-bold mb-0">
                                        {statAll.usedTotalCountAll} كوبون
                                      </span>
                                      <br />
                                      <span
                                        style={{ color: "green" }}
                                        class="h3 font-weight-bold mb-0"
                                      >
                                        {statAll.usedTotalAll} ر.س
                                      </span>
                                    </div>
                                    <div class="col-auto">
                                      <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                        <i class="ni ni-chart-bar-32"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-md-6">
                              <div
                                class="card card-stats"
                                style={{
                                  backgroundColor: "hsl(187deg 100% 42% / 36%)",
                                }}
                              >
                                <div class="card-body">
                                  <div class="row">
                                    <div class="col">
                                      <h5 class="card-title text-uppercase text-muted mb-0">
                                        الكوبونات المرسلة
                                      </h5>
                                      <span class="h2  font-weight-bold mb-0">
                                        {statAll.sentTotalCountAll} كوبون
                                      </span>
                                      <br />
                                      <span
                                        style={{ color: "green" }}
                                        class="h3 font-weight-bold mb-0"
                                      >
                                        {statAll.sentTotalAll} ر.س
                                      </span>
                                    </div>
                                    <div class="col-auto">
                                      <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                        <i class="ni ni-chart-bar-32"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="col-xl-12 col-md-12">
                              <div
                                class="card card-stats"
                                style={{
                                  backgroundColor: "hsl(187deg 100% 42% / 36%)",
                                }}
                              >
                                <div class="card-body">
                                  <div class="row">
                                    <div class="col">
                                      <h5 class="card-title text-uppercase text-muted mb-0">
                                        مجموع الكوبونات
                                      </h5>
                                      <span class="h2  font-weight-bold mb-0">
                                        {statAll.usedTotalCountAll +
                                          statAll.sentTotalCountAll}{" "}
                                        كوبون
                                      </span>
                                      <br />
                                      <span
                                        style={{ color: "green" }}
                                        class="h3 font-weight-bold mb-0"
                                      >
                                        {statAll.usedTotalAll +
                                          statAll.sentTotalAll +
                                          statAll.newTotalAll}{" "}
                                        ر.س
                                      </span>
                                    </div>
                                    <div class="col-auto">
                                      <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                        <i class="ni ni-chart-bar-32"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-12 col-md-12">
                            <div class="">
                              <div class="card-body  rounded">
                                <div class="row">
                                  <div class="col">
                                    <h1 style={{ textAlign: "center" }}>
                                      كوبونات السنة الحالية
                                    </h1>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row" dir="rtl">
                            <div class="col-xl-12 col-md-12 col-sm-12">
                              <div class="nav-wrapper">
                                <ul
                                  class="nav nav-pills nav-fill flex-column flex-md-row"
                                  id="tabs-icons-text"
                                  role="tablist"
                                >
                                  <li class="nav-item">
                                    <a
                                      class="nav-link mb-sm-3 mb-md-0 active"
                                      id="tabs-icons-text-1-tab"
                                      data-toggle="tab"
                                      href="#tabs-icons-text-1"
                                      role="tab"
                                      aria-controls="tabs-icons-text-1"
                                      aria-selected="true"
                                    >
                                      <i class="ni ni-cloud-upload-96 mr-2"></i>
                                      الكمية
                                    </a>
                                  </li>
                                  <li class="nav-item">
                                    <a
                                      class="nav-link mb-sm-3 mb-md-0"
                                      id="tabs-icons-text-2-tab"
                                      data-toggle="tab"
                                      href="#tabs-icons-text-2"
                                      role="tab"
                                      aria-controls="tabs-icons-text-2"
                                      aria-selected="false"
                                    >
                                      <i class="ni ni-bell-55 mr-2"></i> القيمة
                                      بالريال
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="">
                                <div class="card-body">
                                  <div class="tab-content" id="myTabContent">
                                    <div
                                      class="tab-pane fade show active"
                                      id="tabs-icons-text-1"
                                      role="tabpanel"
                                      aria-labelledby="tabs-icons-text-1-tab"
                                    >
                                      <Chart
                                        type="bar"
                                        data={BarChartDataNumbers}
                                      />
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="tabs-icons-text-2"
                                      role="tabpanel"
                                      aria-labelledby="tabs-icons-text-2-tab"
                                    >
                                      <Chart
                                        type="bar"
                                        data={BarChartDataMoney}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-12 col-md-12 col-sm-12">
                              <div class="nav-wrapper">
                                <ul
                                  class="nav nav-pills nav-fill flex-column flex-md-row"
                                  id="tabs-icons-text"
                                  role="tablist"
                                >
                                  <li class="nav-item">
                                    <a
                                      class="nav-link mb-sm-3 mb-md-0 active"
                                      id="tabs-icons-text-4-tab"
                                      data-toggle="tab"
                                      href="#tabs-icons-text-4"
                                      role="tab"
                                      aria-controls="tabs-icons-text-4"
                                      aria-selected="true"
                                    >
                                      <i class="ni ni-cloud-upload-96 mr-2"></i>
                                      الكمية
                                    </a>
                                  </li>
                                  <li class="nav-item">
                                    <a
                                      class="nav-link mb-sm-3 mb-md-0"
                                      id="tabs-icons-text-3-tab"
                                      data-toggle="tab"
                                      href="#tabs-icons-text-3"
                                      role="tab"
                                      aria-controls="tabs-icons-text-3"
                                      aria-selected="false"
                                    >
                                      <i class="ni ni-bell-55 mr-2"></i> القيمة
                                      بالريال
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="">
                                <div class="card-body">
                                  <div class="tab-content" id="myTabContent">
                                    <div
                                      class="tab-pane fade show active"
                                      id="tabs-icons-text-4"
                                      role="tabpanel"
                                      aria-labelledby="tabs-icons-text-4-tab"
                                    >
                                      <Chart
                                        type="doughnut"
                                        data={PieCartDataNumbers}
                                      />
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="tabs-icons-text-3"
                                      role="tabpanel"
                                      aria-labelledby="tabs-icons-text-3-tab"
                                    >
                                      <Chart
                                        type="doughnut"
                                        data={PieCartDataMoney}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  ) : (
                    "بيانات"
                  )}
                  {showSkeleton2 ? <Skeleton height={40} count={10} /> : ""}
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

                  {showSkeleton2 ? <Skeleton height={40} count={10} /> : ""}
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
            ) : modalType == "newCard" ? (
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
                      user_id={ModelData.user_id}
                      username={ModelData.Name}
                      GoBackAndTriggerMutation={GoBackAndTriggerMutation}
                    />
                  ) : (
                    ""
                  )}

                  {showSkeleton2 ? <Skeleton height={40} count={10} /> : ""}
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
            ) : modalType == "updateMandobe" ? (
              <div class="modal-content">
                <div class="modal-header">
                  <h6 class="modal-title" id="modal-title-default">
                    تغير المندوب
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
                    <ListMandobes
                      user_id={ModelData.user_id}
                      mandobe_id={ModelData.mandobe_id}
                      setNewMandobe_id={setNewMandobe_id}
                    />
                  ) : (
                    ""
                  )}

                  {NewMandobe_id > 0 ? (
                    <button
                      type="button"
                      class="btn btn-danger "
                      data-dismiss="modal"
                      style={{ float: "right" }}
                      onClick={() => {
                        updateUserMandobe(ModelData.user_id);
                      }}
                    >
                      تحديث
                    </button>
                  ) : (
                    ""
                  )}

                  {showSkeleton2 ? <Skeleton height={40} count={10} /> : ""}
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
              ""
            )}
          </div>
        </div>
        {/* Argon MODEL */}
      </body>
    </>
  );
}

export default ProtectRoute(Users);
