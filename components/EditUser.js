import React, { useState, useEffect } from "react";
import PersonType from "./PersonType";
import UserPersonNeeds from "./UserPersonNeeds";
import api from "../services/Api";

import { GetFullCCAs, GetUserMeta } from "../services/api_get";
import useAuth, { ProtectRoute } from "../contexts/auth.js";
import { useAlert } from "react-alert";
function EditUser({ TheUser, updatesetstep }) {
  const User = TheUser;
  console.log("here");
  console.log(User);
  const alert = useAlert();

  const [TheSelectedCountry, setTheSelectedCountry] = useState(User.city);
  const [TheSelectedCity, setTheSelectedCity] = useState(User.county);
  const [TheSelectedaera, setTheSelectedaera] = useState(User.area);

  const [familyType, setfamilyType] = useState(User.type);
  const [priority, setpriority] = useState(User.priority);
  const [FirstName, setFirstName] = useState(User.firstName);
  const [LastName, setLastName] = useState(User.lastName);
  const [email, setemail] = useState(User.email);
  const [phone, setphone] = useState(User.phone);
  const [des, setdes] = useState(User.des);
  const [mempersCount, setmempersCount] = useState(User.mempersCount);
  const [share, setshare] = useState(User.share);

  useEffect(() => {
    console.log(User.type);
    setfamilyType(User.type);
  }, []);

  //const [project,setProject] = useState(false);

  const { toggler, settoggler, loading } = useAuth();
  const [spinner, setspinner] = useState(false);

  const { UserMeta, UserMetaisLoading, UserMetaisError } = GetUserMeta(
    User.user_id
  );

  //const UserNeeds = isLoading ? false : UserMeta.data.needs;
  /* const UserNeeds = isLoading ? false : UserMeta;
  console.log(UserNeeds);
  //const UserMembers = isLoading ? false : UserMeta.data.members;
 /* const UserMembers = isLoading ? false : UserMeta.data.members;
  console.log(UserMembers);*/

  console.log(UserMeta);

  const { data, isLoading, isError } = GetFullCCAs();

  const results = isLoading ? false : data.data;
  console.log(results);

  const showSkeleton = isLoading || loading;
  const [CCAs, setCCAs] = useState([]);

  const [citys, setcitys] = useState([]);
  const [aeras, setaeras] = useState([]);
  const [list, updateList] = useState([]);

  const [firstTime, setfirstTime] = useState(true);
  const [firstTime2, setfirstTime2] = useState(true);
  const [categories, setcategories] = useState([]);

  if (firstTime && results) {
    setCCAs(results.options.CCAs);

    setTheSelectedCity(User.city);

    setTheSelectedCountry(User.county);

    setcitys(results.options.CCAs[0].data);
    setaeras(results.options.CCAs[0].data[0].data);
    setcategories(results.options.categories);

    setfirstTime(false);
  }

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

  if (firstTime2 && UserMeta) {
    let UserMetaNeeds = UserMeta.data.needs;
    let favorite = [];
    for (let i = 0; i < UserMetaNeeds.length; i++) {
      let temp = {
        id: UserMetaNeeds[i].Category_id,
        name: "",
      };
      favorite.push(temp);
    }
    console.log("السلام عليكم ورحمة الله وبركاتة");
    console.log(favorite);
    updateList(favorite);

    let UserMembers = UserMeta.data.members[0];
    setOldMan(UserMembers.old_man);
    setOldWoman(UserMembers.old_women);
    setAccibilityPerson(UserMembers.Special_needs);
    setBaby(UserMembers.infant);
    setOrphanGirls(UserMembers.orphan_girl);
    setOrphanBoys(UserMembers.orphan_boy);
    setGirls(UserMembers.young_women);
    setGuys(UserMembers.young_men);
    setWomen(UserMembers.women);
    setMen(UserMembers.man);
    setWidows(UserMembers.widow);
    setgirl(UserMembers.girl);
    setboy(UserMembers.boy);
    setfirstTime2(false);
  }

  const [step, setStep] = useState(1);

  const [allowed, setallowed] = useState(false);

  function updateArray(data) {
    let favorite = list;
    favorite.push(data);

    updateList(favorite);
    setallowed(true);

    //  setPersonNeeds((PersonNeeds) => PersonNeeds.concat(data));
    // setPersonNeeds((PersonNeeds) => [...PersonNeeds, data]);
  }

  async function removeUser(id) {
    let favorite = list;
    if (list.length == 1) {
      setallowed(false);
    }
    favorite = await favorite.filter((e) => e.id !== id);
    updateList(favorite);
  }

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
      oldPhone: User.phone,
      oldemail: User.email,
      TheUser_id: User.user_id,
      des,
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
        .post("rabwa/UpdateUser", data)
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

            updatesetstep(1);

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

  let step2 = step;
  return (
    <>
      <div style={{ float: "right" }}>
        <button
          onClick={() => {
            updatesetstep(1);
          }}
          class="btn btn-icon btn-primary"
          type="button"
        >
          <span class="btn-inner--icon">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </span>
        </button>
        <h2
          style={{
            marginRight: "0.8em",
            display: "inline",
          }}
        >
          العودة الى قائمة المستفيدين
        </h2>
      </div>
      <br />
      <hr />
      {/* Light table */}
      {step == 1 ? (
        <>
          {familyType == "" ? (
            ""
          ) : (
            <div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-control-label">الدولة</label>
                  <select
                    name="county"
                    onChange={(e) => {
                      let selectedCounty = e.target.value;
                      setTheSelectedCountry(selectedCounty);
                      /*if (firstTime) {
                                      setfirstTime(false);
                                    }*/
                      for (let index = 0; index < CCAs.length; index++) {
                        const tempconunty = CCAs[index];
                        if (tempconunty.name === selectedCounty) {
                          setcitys(tempconunty.data);

                          if (tempconunty.data[0]) {
                            setTheSelectedCity(tempconunty.data[0].name);
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
                          return (
                            <option
                              selected={
                                User.county == county.name ? true : false
                              }
                            >
                              {county.name}
                            </option>
                          );
                        })
                      : ""}
                  </select>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-control-label">المدينة</label>
                  <select
                    id="mycity"
                    name="city"
                    onChange={(e) => {
                      let selectedcity = e.target.value;
                      setTheSelectedCity(e.target.value);
                      /*if (firstTime) {
                                      setfirstTime(false);
                                    }*/
                      for (let index = 0; index < citys.length; index++) {
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
                            <option
                              selected={User.city == city.name ? true : false}
                              value={city.name}
                            >
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
                  <label className="form-control-label">المنطقة</label>
                  <select
                    name="aeras"
                    onChange={(e) => {
                      setTheSelectedaera(e.target.value);
                    }}
                    class="form-control"
                  >
                    <option
                      selected={User.area == "all" ? true : false}
                      value="0"
                    >
                      الكل
                    </option>
                    {aeras.length > 0
                      ? aeras.map((aeras, index) => {
                          return (
                            <option
                              selected={User.area == aeras.name ? true : false}
                              value={aeras.name}
                            >
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
                  <label className="form-control-label">الإسم الأول</label>
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
                  <label className="form-control-label">الإسم الإخير</label>
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

              <div className="col-lg-12">
                <div className="form-group">
                  <label className="form-control-label">رقم الجوال</label>
                  <input
                    type="number"
                    name="phone"
                    onChange={(e) => {
                      setphone(e.target.value);
                    }}
                    value={phone}
                    className="form-control"
                    placeholder="96650xxxxx"
                  />
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <label className="form-control-label">وصف الحالة</label>
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

              <hr />
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
                    checked={familyType == "family" ? true : true}
                  />
                  <label class="custom-control-label" for="customRadio1">
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
                    checked={familyType == "single" ? true : false}
                  />
                  <label class="custom-control-label" for="customRadio2">
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
                    checked={priority == "normal" ? true : false}
                  />
                  <label class="custom-control-label" for="customRadioInline1">
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
                    checked={priority == "critical" ? true : false}
                  />
                  <label class="custom-control-label" for="customRadioInline2">
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
                    checked={User.priority == "superCritical" ? true : false}
                  />
                  <label class="custom-control-label" for="customRadioInline3">
                    حرجة جدا
                  </label>
                </div>
              </div>
            </div>
          )}{" "}
        </>
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
                    <th scope="col" className="sort" data-sort="name">
                      الحالة
                    </th>
                    <th scope="col" className="sort" data-sort="budget">
                      العدد
                    </th>
                  </tr>
                </thead>
                <tbody className="list">
                  <PersonType
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
                  />
                </tbody>
              </table>
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
                    <th scope="col" className="sort" data-sort="name">
                      الإحتياج
                    </th>
                    <th scope="col" className="sort" data-sort="budget">
                      اختيار
                    </th>
                  </tr>
                </thead>
                <tbody className="list">
                  {categories.length > 0
                    ? categories.map((data, i) => {
                        return (
                          <UserPersonNeeds
                            data={data}
                            updateArray={updateArray}
                            removeUser={removeUser}
                            UserMeta={UserMeta ? UserMeta : []}
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
                تحديث
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
    </>
  );
}

export default EditUser;
