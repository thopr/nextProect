import Admin_nav from "../components/Admin_nav";
import React, { useState, useEffect } from "react";
import HeaderNav from "../components/HeaderNav";
import PersonNeeds from "../components/PersonNeeds";
import api from "../services/Api";

import Footer from "../components/Footer";
import { GetFullCCAs } from "../services/api_get";
import useAuth, { ProtectRouteMandobe } from "../contexts/auth.js";
import { useAlert } from "react-alert";
import Router from "next/router";

function Register_User() {
  const alert = useAlert();

  //const [project,setProject] = useState(false);

  const { toggler, settoggler, loading } = useAuth();
  const [spinner, setspinner] = useState(false);
  const [address, setaddress] = useState("");

  const { data, isLoading, isError } = GetFullCCAs();

  const results = isLoading ? false : data.data;
  console.log(results);

  const showSkeleton = isLoading || loading;
  const [CCAs, setCCAs] = useState([]);

  const [citys, setcitys] = useState([]);
  const [aeras, setaeras] = useState([]);
  const [des, setdes] = useState("");

  const [TheSelectedCountry, setTheSelectedCountry] = useState(false);
  const [TheSelectedCity, setTheSelectedCity] = useState("");
  const [TheSelectedaera, setTheSelectedaera] = useState("all");
  const [firstTime, setfirstTime] = useState(true);
  const [categories, setcategories] = useState([]);

  if (firstTime && results) {
    setCCAs(results.options.CCAs);

    setTheSelectedCity(results.options.CCAs[0].data[0].name);

    setTheSelectedCountry(results.options.CCAs[0].name);

    setcitys(results.options.CCAs[0].data);
    setaeras(results.options.CCAs[0].data[0].data);
    setcategories(results.options.categories);

    setfirstTime(false);
  }

  const [familyType, setfamilyType] = useState("family");
  const [priority, setpriority] = useState("normal");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [mempersCount, setmempersCount] = useState(0);
  const [share, setshare] = useState(0);
  const [PhoneField, setPhoneField] = useState();

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
  const [widows, setWidows] = useState(0);
  const [girl, setgirl] = useState(0);
  const [boy, setboy] = useState(0);

  const [personNeeds, setPersonNeeds] = useState("");

  const [step, setStep] = useState(1);
  const [list, updateList] = useState([]);
  const [allowed, setallowed] = useState(false);

  function updateArray(data) {
    let favorite = list;
    favorite.push(data);

    updateList(favorite);
    setallowed(true);

    //  setPersonNeeds((PersonNeeds) => PersonNeeds.concat(data));
    // setPersonNeeds((PersonNeeds) => [...PersonNeeds, data]);
  }

  function ThePhone(value) {
    for (let index = 0; index < CCAs.length; index++) {
      if (CCAs[index].name == TheSelectedCountry) {
        let element = CCAs[index].code;
        setphone(element + "" + value);
        setPhoneField(value);
      } else {
        let element = "";
      }
    }
  }

  async function removeUser(id) {
    let favorite = list;
    if (list.length == 1) {
      setallowed(false);
    }
    favorite = await favorite.filter((e) => e.id !== id);
    updateList(favorite);
  }

  useEffect(() => {
    recalc();
  }, [
    oldWoman,
    oldMan,
    accibilityPerson,
    baby,
    orphanGirls,
    orphanBoys,
    widows,
    girls,
    guys,
    women,
    men,
    girl,
    boy,
  ]);

  function mysubmit() {
    let data = {
      TheSelectedCity,
      TheSelectedaera,
      FirstName,
      LastName,
      email,
      phone,
      familyType,
      priority,
      oldWoman,
      oldMan,
      accibilityPerson,
      baby,
      orphanGirls,
      orphanBoys,
      widows,
      girls,
      guys,
      women,
      men,
      TheSelectedCountry,
      girl,
      boy,
      share,
      mempersCount,

      categories: list,
      des,
      mandobe: true,
      address,
    };

    console.log(data);

    let checke = true;
    let mycalc =
      0 +
      parseInt(oldWoman) +
      parseInt(oldMan) +
      parseInt(accibilityPerson) +
      parseInt(baby) +
      parseInt(orphanGirls) +
      parseInt(orphanBoys) +
      parseInt(widows) +
      parseInt(girls) +
      parseInt(guys) +
      parseInt(women) +
      parseInt(men) +
      parseInt(girl) +
      parseInt(boy);
    console.log(mycalc);
    setmempersCount(mycalc);
    if (mycalc == 0) {
      checke = false;
      alert.show(" الرجاء تحديد عدد الافراد ", {
        timeout: 2000,
        type: "error",
      });
    } else {
    }
    if (data.categories.length == 0) {
      checke = false;
      alert.show("الرجاء إختيار إحتياج واحد أو أكثر ", {
        timeout: 2000,
        type: "error",
      });
    }
    if (FirstName == "") {
      checke = false;
      alert.show("الرجاء كتابة الإسم الأول", {
        timeout: 2000,
        type: "error",
      });
    }

    if (address == "") {
      checke = false;
      alert.show("الرجاء كتابة عنوان المستفيد", {
        timeout: 2000,
        type: "error",
      });
    }

    if (LastName == "") {
      checke = false;
      alert.show("الرجاء كتابة الإسم الاخير", {
        timeout: 2000,
        type: "error",
      });
    }

    if (phone == "") {
      checke = false;
      alert.show("الرجاء كتابة رقم الجوال", {
        timeout: 2000,
        type: "error",
      });
    }

    setspinner(true);
    if (checke) {
      api
        .post("api/CreatNewUser", data)
        .then((res) => {
          setspinner(false);
          console.log(res.data);

          if (res.data == "already exists") {
            alert.show("إسم الكوبون موجود مسبقا ", {
              timeout: 2000,
              type: "error",
            });
          }
          if (res.data == "phone") {
            alert.show("رقم الجوال مستخدم مسبقا", {
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
          if (res.data == "NotEmail") {
            alert.show("الرجاء إدخال إيميل صحيح", {
              timeout: 2000,
              type: "error",
            });
          }

          if (res.data > 0) {
            alert.show("تم بنجاح", {
              timeout: 2000,
              type: "success",
            });
            Router.push("/MyUsers");
            //GoBackAndTriggerMutation();
            //router.push("/companys/[name]", "/companys/" + formdata.companyName);
          }
        })
        .catch((err) => {
          alert.show("حصل خطأ", {
            timeout: 2000,
            type: "error",
          });
          setspinner(false);
          console.log(err);
        });
    }
  }

  function testc() {
    let mycalc =
      0 +
      parseInt(oldWoman) +
      parseInt(oldMan) +
      parseInt(accibilityPerson) +
      parseInt(baby) +
      parseInt(orphanGirls) +
      parseInt(orphanBoys) +
      parseInt(widows) +
      parseInt(girls) +
      parseInt(guys) +
      parseInt(women) +
      parseInt(men) +
      parseInt(girl) +
      parseInt(boy);
    console.log("tttt");

    console.log(mycalc);
    return mycalc;
  }

  async function recalc() {
    let tt = await testc();

    console.log("tt");

    console.log(tt);

    setshare(tt);
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
                      <h3 class="mb-0">تسجيل مستفيد جديد</h3>
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
                                  setTheSelectedCountry(selectedCounty);
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
                          <h6 className="heading-small text-muted mb-4">
                            معلومات المستفيد
                          </h6>

                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-control-label">
                                الإسم الأول
                              </label>
                              <input
                                type="text"
                                name="FirstName"
                                onChange={(e) => {
                                  setFirstName(e.target.value);
                                }}
                                value={FirstName}
                                className="form-control"
                                placeholder="الإسم الأول"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-control-label">
                                الإسم الإخير
                              </label>
                              <input
                                type="text"
                                name="LastName"
                                onChange={(e) => {
                                  setLastName(e.target.value);
                                }}
                                value={LastName}
                                className="form-control"
                                placeholder="الإسم الإخير"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-control-label">
                                رقم الجوال
                              </label>
                              <div class="input-group">
                                <input
                                  type="number"
                                  name="PhoneField"
                                  onChange={(e) => {
                                    ThePhone(e.target.value);
                                  }}
                                  value={PhoneField}
                                  className="form-control"
                                  placeholder="50xxxxx"
                                />
                                {TheSelectedCountry ? (
                                  <>
                                    {CCAs.length > 0
                                      ? CCAs.map((data, i) => {
                                          if (data.name == TheSelectedCountry) {
                                            return (
                                              <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                  {data.code}+
                                                </span>
                                              </div>
                                            );
                                          }
                                        })
                                      : ""}
                                  </>
                                ) : (
                                  <div class="input-group-prepend">
                                    <span class="input-group-text">+</span>
                                  </div>
                                )}{" "}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-control-label">
                                العنوان
                              </label>
                              <input
                                type="text"
                                name="address"
                                onChange={(e) => {
                                  setaddress(e.target.value);
                                }}
                                value={address}
                                className="form-control"
                                placeholder="عنوان المستفيد"
                              />
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="form-group">
                              <label className="form-control-label">
                                وصف الحالة
                              </label>
                              <textarea
                                type="text"
                                name="des"
                                onChange={(e) => {
                                  setdes(e.target.value);
                                }}
                                value={des}
                                className="form-control"
                                rows="4"
                                placeholder=" وصف حالة المستفيد"
                              />
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <hr />
                          </div>

                          <h3>نوع المحتاج:</h3>

                          <div style={{ marginRight: "15px" }}>
                            <div class="custom-control custom-radio mb-3">
                              <input
                                type="radio"
                                id="customRadio1"
                                name="customRadio"
                                class="custom-control-input"
                                onChange={(e) => {
                                  if (e.target.value == "on") {
                                    setfamilyType("family");
                                  }
                                }}
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="customRadio1"
                              >
                                عائلة
                              </label>
                            </div>
                            <div class="custom-control custom-radio">
                              <input
                                type="radio"
                                id="customRadio2"
                                name="customRadio"
                                class="custom-control-input"
                                onChange={(e) => {
                                  if (e.target.value == "on") {
                                    setfamilyType("single");
                                  }
                                }}
                              />
                              <label
                                class="custom-control-label"
                                for="customRadio2"
                              >
                                فرد
                              </label>
                            </div>
                          </div>

                          <hr />

                          <div>
                            <h3>حالة المحتاج:</h3>

                            <div class="custom-control custom-radio custom-control-inline">
                              <input
                                type="radio"
                                id="customRadioInline1"
                                name="sss"
                                class="custom-control-input"
                                onChange={(e) => {
                                  if (e.target.value == "on") {
                                    setpriority("normal");
                                  }
                                }}
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="customRadioInline1"
                              >
                                عادي{" "}
                              </label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input
                                type="radio"
                                id="customRadioInline2"
                                name="sss"
                                class="custom-control-input"
                                onChange={(e) => {
                                  if (e.target.value == "on") {
                                    setpriority("critical");
                                  }
                                }}
                              />
                              <label
                                class="custom-control-label"
                                for="customRadioInline2"
                              >
                                حرجة{" "}
                              </label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input
                                type="radio"
                                id="customRadioInline3"
                                name="sss"
                                class="custom-control-input"
                                onChange={(e) => {
                                  if (e.target.value == "on") {
                                    setpriority("superCritical");
                                  }
                                }}
                              />
                              <label
                                class="custom-control-label"
                                for="customRadioInline3"
                              >
                                حرجة جدا
                              </label>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      {step == 2 ? (
                        <div>
                          <div className="table-responsive">
                            <div>
                              <table className="table align-items-center">
                                <thead className="thead-light">
                                  <tr>
                                    <th
                                      scope="col"
                                      className="sort"
                                      data-sort="budget"
                                    ></th>
                                    <th
                                      scope="col"
                                      className="sort"
                                      data-sort="budget"
                                    ></th>
                                    <th
                                      scope="col"
                                      className="sort"
                                      data-sort="budget"
                                    ></th>
                                    <th
                                      scope="col"
                                      className="sort"
                                      data-sort="budget"
                                    ></th>{" "}
                                    <th
                                      scope="col"
                                      className="sort"
                                      data-sort="budget"
                                    ></th>{" "}
                                    <th
                                      scope="col"
                                      className="sort"
                                      data-sort="budget"
                                    ></th>
                                  </tr>
                                </thead>
                                <tbody className="list">
                                  <tr
                                    style={{
                                      color: "white",
                                    }}
                                  >
                                    <td>
                                      <img
                                        width={50}
                                        height={50}
                                        src="/assets/img/icons/old-woman.png"
                                      />
                                    </td>

                                    <td>
                                      <span
                                        className="text-lg"
                                        style={{ color: "black" }}
                                      >
                                        امرأة مسنة
                                      </span>
                                    </td>

                                    <td style={{ color: "black" }}>
                                      <CounterInput
                                        min={0}
                                        onCountChange={(count) => {
                                          setOldWoman(count);
                                        }}
                                      />
                                    </td>
                                    <td>
                                      <img
                                        width={50}
                                        height={50}
                                        src="/assets/img/icons/old-man.png"
                                      />
                                    </td>

                                    <td>
                                      <span
                                        className="text-lg"
                                        style={{ color: "black" }}
                                      >
                                        رجل مسن
                                      </span>
                                    </td>
                                    <td style={{ color: "black" }}>
                                      <CounterInput
                                        min={0}
                                        onCountChange={(count) => {
                                          setOldMan(count);
                                        }}
                                      />
                                    </td>
                                  </tr>
                                  <tr
                                    style={{
                                      color: "white",
                                    }}
                                  >
                                    <td>
                                      <img
                                        width={50}
                                        height={50}
                                        src="/assets/img/icons/wheel.png"
                                      />
                                    </td>

                                    <td>
                                      <span
                                        className="text-lg"
                                        style={{ color: "black" }}
                                      >
                                        احتياجات خاصة
                                      </span>
                                    </td>
                                    <td style={{ color: "black" }}>
                                      <CounterInput
                                        min={0}
                                        onCountChange={(count) => {
                                          setAccibilityPerson(count);
                                        }}
                                      />
                                    </td>

                                    <td>
                                      <img
                                        width={50}
                                        height={50}
                                        src="/assets/img/icons/baby.png"
                                      />
                                    </td>

                                    <td>
                                      <span
                                        className="text-lg"
                                        style={{ color: "black" }}
                                      >
                                        طفل رضيع
                                      </span>
                                    </td>
                                    <td style={{ color: "black" }}>
                                      <CounterInput
                                        min={0}
                                        onCountChange={(count) => {
                                          setBaby(count);
                                        }}
                                      />
                                    </td>
                                  </tr>
                                  <tr
                                    style={{
                                      color: "white",
                                    }}
                                  >
                                    <td>
                                      <img
                                        width={50}
                                        height={50}
                                        src="/assets/img/icons/orphan_girl.png"
                                      />
                                    </td>

                                    <td>
                                      <span
                                        className="text-lg"
                                        style={{ color: "black" }}
                                      >
                                        بنات أيتام
                                      </span>
                                    </td>
                                    <td style={{ color: "black" }}>
                                      <CounterInput
                                        min={0}
                                        onCountChange={(count) => {
                                          setOrphanGirls(count);
                                        }}
                                      />
                                    </td>

                                    <td>
                                      <img
                                        width={50}
                                        height={50}
                                        src="/assets/img/icons/orphan_boy.png"
                                      />
                                    </td>

                                    <td>
                                      <span
                                        className="text-lg"
                                        style={{ color: "black" }}
                                      >
                                        أولاد أيتام
                                      </span>
                                    </td>
                                    <td style={{ color: "black" }}>
                                      <CounterInput
                                        min={0}
                                        onCountChange={(count) => {
                                          setOrphanBoys(count);
                                        }}
                                      />
                                    </td>
                                  </tr>
                                  <tr
                                    style={{
                                      color: "white",
                                    }}
                                  >
                                    <td>
                                      <img
                                        width={50}
                                        height={50}
                                        src="/assets/img/icons/woman.png"
                                      />
                                    </td>

                                    <td>
                                      <span
                                        className="text-lg"
                                        style={{ color: "black" }}
                                      >
                                        أرامل
                                      </span>
                                    </td>
                                    <td style={{ color: "black" }}>
                                      <CounterInput
                                        min={0}
                                        onCountChange={(count) => {
                                          setWidows(count);
                                        }}
                                      />
                                    </td>

                                    <td>
                                      <img
                                        width={50}
                                        height={50}
                                        src="/assets/img/icons/youth-woman.png"
                                      />
                                    </td>

                                    <td>
                                      <span
                                        className="text-lg"
                                        style={{ color: "black" }}
                                      >
                                        شابات
                                      </span>
                                    </td>
                                    <td style={{ color: "black" }}>
                                      <CounterInput
                                        min={0}
                                        onCountChange={(count) => {
                                          setGirls(count);
                                        }}
                                      />
                                    </td>
                                  </tr>
                                  <tr
                                    style={{
                                      color: "white",
                                    }}
                                  >
                                    <td>
                                      <img
                                        width={50}
                                        height={50}
                                        src="/assets/img/icons/youth.png"
                                      />
                                    </td>

                                    <td>
                                      <span
                                        className="text-lg"
                                        style={{ color: "black" }}
                                      >
                                        شباب
                                      </span>
                                    </td>
                                    <td style={{ color: "black" }}>
                                      <CounterInput
                                        min={0}
                                        onCountChange={(count) => {
                                          setGuys(count);
                                        }}
                                      />
                                    </td>

                                    <td>
                                      <img
                                        width={50}
                                        height={50}
                                        src="/assets/img/icons/girl.png"
                                      />
                                    </td>

                                    <td>
                                      <span
                                        className="text-lg"
                                        style={{ color: "black" }}
                                      >
                                        بنات
                                      </span>
                                    </td>
                                    <td style={{ color: "black" }}>
                                      <CounterInput
                                        min={0}
                                        onCountChange={(count) => {
                                          setgirl(count);
                                        }}
                                      />
                                    </td>
                                  </tr>
                                  <tr
                                    style={{
                                      color: "white",
                                    }}
                                  >
                                    <td>
                                      <img
                                        width={50}
                                        height={50}
                                        src="/assets/img/icons/boy.png"
                                      />
                                    </td>

                                    <td>
                                      <span
                                        className="text-lg"
                                        style={{ color: "black" }}
                                      >
                                        أولاد
                                      </span>
                                    </td>
                                    <td style={{ color: "black" }}>
                                      <CounterInput
                                        min={0}
                                        onCountChange={(count) => {
                                          setboy(count);
                                        }}
                                      />
                                    </td>

                                    <td>
                                      <img
                                        width={50}
                                        height={50}
                                        src="/assets/img/icons/woman.png"
                                      />
                                    </td>

                                    <td>
                                      <span
                                        className="text-lg"
                                        style={{ color: "black" }}
                                      >
                                        نساء
                                      </span>
                                    </td>
                                    <td style={{ color: "black" }}>
                                      <CounterInput
                                        min={0}
                                        onCountChange={(count) => {
                                          setWomen(count);
                                        }}
                                      />
                                    </td>
                                  </tr>
                                  <tr
                                    style={{
                                      color: "white",
                                    }}
                                  >
                                    <td>
                                      <img
                                        width={50}
                                        height={50}
                                        src="/assets/img/icons/man.png"
                                      />
                                    </td>

                                    <td>
                                      <span
                                        className="text-lg"
                                        style={{ color: "black" }}
                                      >
                                        رجال
                                      </span>
                                    </td>
                                    <td style={{ color: "black" }}>
                                      <CounterInput
                                        min={0}
                                        onCountChange={(count) => {
                                          setMen(count);
                                        }}
                                      />
                                    </td>

                                    <td colspan="3" />
                                  </tr>

                                  {/*<PersonType
                                    name="امرأة مسنة"
                                    theState={oldWoman}
                                    somef={(e) => {
                                      setOldWoman(e.target.value);
                                    }}
                                  />
                                  <PersonType
                                    name="رجل مسن"
                                    theState={oldMan}
                                    somef={(e) => {
                                      setOldMan(e.target.value);
                                    }}
                                  />
                                  <PersonType
                                    name="احتياجات خاصة"
                                    theState={accibilityPerson}
                                    somef={(e) => {
                                      setAccibilityPerson(e.target.value);
                                    }}
                                  />
                                  <PersonType
                                    name="طفل رضيع"
                                    theState={baby}
                                    somef={(e) => {
                                      setBaby(e.target.value);
                                    }}
                                  />
                                  <PersonType
                                    name="بنات أيتام"
                                    theState={orphanGirls}
                                    somef={(e) => {
                                      setOrphanGirls(e.target.value);
                                    }}
                                  />
                                  <PersonType
                                    name="أولاد أيتام"
                                    theState={orphanBoys}
                                    somef={(e) => {
                                      setOrphanBoys(e.target.value);
                                    }}
                                  />
                                  <PersonType
                                    name="أرامل"
                                    theState={widows}
                                    somef={(e) => {
                                      setWidows(e.target.value);
                                    }}
                                  />
                                  <PersonType
                                    name="شابات "
                                    theState={girls}
                                    somef={(e) => {
                                      setGirls(e.target.value);
                                    }}
                                  />
                                  <PersonType
                                    name="شباب"
                                    theState={guys}
                                    somef={(e) => {
                                      setGuys(e.target.value);
                                    }}
                                  />
                                  <PersonType
                                    name="بنات"
                                    theState={girl}
                                    somef={(e) => {
                                      setgirl(e.target.value);
                                    }}
                                  />
                                  <PersonType
                                    name="أولاد"
                                    theState={boy}
                                    somef={(e) => {
                                      setboy(e.target.value);
                                    }}
                                  />
                                  <PersonType
                                    name="نساء"
                                    theState={women}
                                    somef={(e) => {
                                      setWomen(e.target.value);
                                    }}
                                  />
                                  <PersonType
                                    name="رجال"
                                    theState={men}
                                    somef={(e) => {
                                      setMen(e.target.value);
                                    }}
                                  />

                                  <PersonType
                                    name="حصة العائلة من الكوبونات (فقط للتسهيل يمكن تغير الكمية وقت الصرف)"
                                    theState={share}
                                    somef={(e) => {
                                      setshare(e.target.value);
                                    }}
                                  />*/}
                                </tbody>
                              </table>

                              <div
                                style={{
                                  marginTop: "30px",
                                  display: "inline-flex",
                                }}
                              >
                                <span
                                  className="text-lg"
                                  style={{ color: "black" }}
                                >
                                  حصة العائلة من الكوبونات (فقط للتسهيل يمكن
                                  تغير الكمية وقت الصرف)
                                </span>
                                <div
                                  style={{
                                    marginRight: "60px",
                                  }}
                                >
                                  <input
                                    type="text"
                                    onChange={(e) => {
                                      setshare(e.target.value);
                                    }}
                                    className="form-control numher-person-type"
                                    style={{ textAlign: "center" }}
                                    value={share}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {step == 3 ? (
                        <div>
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
                                      الإحتياج
                                    </th>
                                    <th
                                      scope="col"
                                      className="sort"
                                      data-sort="budget"
                                    >
                                      اختيار
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="list">
                                  {categories.length > 0
                                    ? categories.map((data, i) => {
                                        return (
                                          <PersonNeeds
                                            data={data}
                                            updateArray={updateArray}
                                            removeUser={removeUser}
                                          />
                                        );
                                      })
                                    : ""}
                                </tbody>
                              </table>
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
                          {step == 1 ? (
                            ""
                          ) : (
                            <button
                              type="button"
                              class="btn btn-lg btn-primary"
                              disabled={step == 1 ? true : false}
                              onClick={() => {
                                step == 1 ? false : setStep(step - 1);
                              }}
                            >
                              السابق
                            </button>
                          )}
                          {"     "}
                          {step == 3 ? (
                            ""
                          ) : (
                            <button
                              type="button"
                              class="btn btn-lg btn-primary"
                              disabled={step == 3 ? true : false}
                              onClick={() => {
                                step == 3 ? false : setStep(step + 1);
                              }}
                            >
                              التالي
                            </button>
                          )}
                        </div>
                      </div>

                      {step == 3 ? (
                        <div>
                          <hr />
                          {personNeeds}
                          <div style={{ textAlign: "left" }}>
                            <button
                              class="btn btn-icon btn-success"
                              onClick={() => {
                                mysubmit();
                              }}
                              type="button"
                            >
                              <span
                                style={{
                                  marginLeft: ".75em",
                                  marginRight: "auto",
                                }}
                                class="btn-inner--text"
                              >
                                إنشاء
                              </span>
                              {"     "}
                              <span class="btn-inner--icon">
                                <i class="ni ni-send"></i>
                              </span>
                            </button>
                          </div>
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

export default ProtectRouteMandobe(Register_User);
