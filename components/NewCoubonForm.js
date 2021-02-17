import React, { useState, useEffect, useContext } from "react"; //
import { useForm } from "react-hook-form";
import api from "../services/Api";
import { GetCategories } from "../services/api_get";
import Skeleton from "react-loading-skeleton";
import { useAlert } from "react-alert";

import { useRouter } from "next/router";
import useAuth, { ProtectRoute } from "../contexts/auth.js";

function NewCoubonForm({
  Branch_id,
  BracnhCode,
  GoBackAndTriggerMutation,
  changenewCompany,
}) {
  const alert = useAlert();
  const router = useRouter();

  const { toggler, settoggler, loading } = useAuth();
  const [spinner, setspinner] = useState(false);
  const [sponsors, setsponsors] = useState(false);
  const [InputTypedis, setInputTypedis] = useState(false);
  const [InputTypecode, setInputTypecode] = useState(false);

  const { data, isLoading, isError } = GetCategories();

  const results = isLoading ? false : data.data;
  const showSkeleton = isLoading || loading;

  const { register, handleSubmit, errors } = useForm({
    //mode: "onChange",
  });

  const id = Branch_id;

  const onSubmit = (formdata) => {
    formdata = { ...formdata, id, BracnhCode, sponsors };
    setspinner(true);
    console.log(formdata);

    api
      .post("api/newCoubon", formdata)
      .then((res) => {
        console.log(res.data);
        setspinner(false);
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
          GoBackAndTriggerMutation();
          //router.push("/companys/[name]", "/companys/" + formdata.companyName);
        }
      })
      .catch((err) => {
        console.log(err);
        setspinner(false);
      });
  };

  return (
    <>
      <div style={{ float: "right" }}>
        <button
          onClick={() => {
            changenewCompany();
          }}
          class="btn btn-icon btn-primary"
          type="button"
        >
          <span class="btn-inner--icon">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </span>
        </button>
        <h2 style={{ marginRight: "0.8em", display: "inline" }}>
          إنشاء كوبونات :
        </h2>

        <div style={{ clear: "both" }}></div>
      </div>
      <br></br>

      <div class="col-xl-12 col-md-12" style={{ height: "50px" }}></div>

      <div
        style={{ marginRight: "2%", marginBottom: "2%" }}
        class="custom-control custom-checkbox"
      >
        <input
          type="checkbox"
          class="custom-control-input"
          id="customCheck1"
          name="sponsors"
          value={sponsors}
          onChange={(e) => {
            setsponsors(!sponsors);
          }}
        />
        <label class="custom-control-label" for="customCheck1">
          تبرع ؟{" "}
        </label>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {sponsors ? (
          <>
            {" "}
            <h6 className="heading-small text-muted mb-4">معلومات الداعم </h6>
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label">إسم الداعم</label>
                    <input
                      type="text"
                      name="SName"
                      ref={register({
                        required: true,
                      })}
                      className="form-control"
                      placeholder="إسم الداعم"
                    />
                  </div>
                  {errors.SName && errors.SName.type === "required" && (
                    <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
                  )}
                </div>{" "}
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label">قيمة التبرع</label>
                    <input
                      type="number"
                      name="Svalue"
                      ref={register({
                        required: true,
                      })}
                      className="form-control"
                      placeholder="القيمة المتبرع بها (يمكن أن تكون جزء من قيمة الكوبونات)"
                    />
                  </div>
                  {errors.Svalue && errors.Svalue.type === "required" && (
                    <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
                  )}
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="form-control-label">رقم الجوال</label>
                    <input
                      type="number"
                      name="Sphone"
                      ref={register({
                        required: true,
                      })}
                      className="form-control"
                      placeholder="رقم الجوال"
                    />
                  </div>
                  {errors.Sphone && errors.Sphone.type === "required" && (
                    <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <h6 className="heading-small text-muted mb-4">معلومات الكوبون</h6>
        <div className="pl-lg-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <label className="form-control-label">إسم الكوبون</label>
                <input
                  type="text"
                  name="coubonName"
                  ref={register({
                    required: true,
                    minLength: 3,
                  })}
                  className="form-control"
                  placeholder="إسم الكوبون"
                />
              </div>
              {errors.coubonName && errors.coubonName.type === "required" && (
                <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
              )}
              {errors.coubonName && errors.coubonName.type === "minLength" && (
                <p style={{ color: "red" }}>الإسم المدخل قصير للغاية</p>
              )}
            </div>

            <div className="col-lg-6">
              <div className="form-group">
                <label className="form-control-label">النوع</label>
                <select
                  name="type"
                  ref={register({
                    required: true,
                  })}
                  onChange={(e) => {
                    if (e.target.value == "discount") {
                      setInputTypedis(true);
                    } else {
                      setInputTypedis(false);
                    }
                    if (
                      e.target.value == "all_code" ||
                      e.target.value == "one_code"
                    ) {
                      setInputTypecode(true);
                    } else {
                      setInputTypecode(false);
                    }
                  }}
                  class="form-control"
                >
                  <option value="cash">مجاني</option>
                  <option value="basket">عيني</option>
                  <option value="discount">خصم</option>
                  <option value="all_code">كود المنصات</option>
                  <option value="one_code">
                    كود المنصات (استخدام لمرة واحدة)
                  </option>
                </select>
              </div>
            </div>
            {InputTypecode ? (
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label">الكود</label>
                  <input
                    type="text"
                    name="code"
                    ref={register({
                      required: true,
                    })}
                    className="form-control"
                    placeholder="Free10"
                  />
                </div>
                {errors.code && errors.code.type === "required" && (
                  <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
                )}
              </div>
            ) : (
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label">الكمية</label>
                  <input
                    type="number"
                    name="coubonsAmount"
                    ref={register({
                      required: true,
                    })}
                    className="form-control"
                    placeholder="كمية الكوبونات المراد إنشائها"
                  />
                </div>
                {errors.coubonsAmount &&
                  errors.coubonsAmount.type === "required" && (
                    <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
                  )}
              </div>
            )}
            <div className="col-lg-6">
              <div className="form-group">
                <label className="form-control-label">التصنيف</label>
                <select
                  name="category"
                  ref={register({
                    required: true,
                  })}
                  class="form-control"
                >
                  {results
                    ? results.map((category, index) => {
                        return (
                          <option value={category.id}>{category.name}</option>
                        );
                      })
                    : ""}
                </select>
              </div>
            </div>
            {showSkeleton ? <Skeleton height={10} count={2} /> : ""}
            {InputTypecode ? (
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label">الرابط </label>
                  <input
                    type="text"
                    name="url"
                    ref={register({
                      required: true,
                    })}
                    className="form-control"
                    placeholder="رابط الموقع , التطبيق الخ "
                  />
                </div>
                {errors.url && errors.url.type === "required" && (
                  <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
                )}
              </div>
            ) : (
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label"> القيمة</label>
                  <div class="input-group">
                    {InputTypedis == true ? (
                      <div class="input-group-prepend">
                        <span class="input-group-text">%</span>
                      </div>
                    ) : (
                      <div class="input-group-prepend">
                        <span class="input-group-text">ر.س</span>
                      </div>
                    )}{" "}
                    <input
                      type="number"
                      name="value"
                      style={{ float: "left" }}
                      ref={register({
                        required: true,
                      })}
                      className="form-control"
                      placeholder="القيمة"
                    />
                  </div>
                </div>
                {errors.value && errors.value.type === "required" && (
                  <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
                )}
              </div>
            )}

            <div className="col-lg-6">
              <div className="form-group">
                <label className="form-control-label"> ينتهي بعد</label>
                <div class="input-group">
                  <input
                    type="number"
                    name="end"
                    style={{ float: "left" }}
                    ref={register({
                      required: true,
                    })}
                    className="form-control"
                    placeholder="عدد الأشهر"
                  />
                  <div class="input-group-prepend">
                    <span class="input-group-text">شهر</span>
                  </div>
                </div>
              </div>
              {errors.end && errors.end.type === "required" && (
                <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
              )}
            </div>

            {InputTypecode ? (
              <div className="col-lg-6">
                <div class="form-group">
                  <label class="form-control-label"> الوصف</label>
                  <textarea
                    rows="4"
                    class="form-control"
                    name="des"
                    ref={register({
                      minLength: 3,
                    })}
                    placeholder="وصف او طريقة الإستخدام "
                  ></textarea>
                  {errors.des && errors.des.type === "minLength" && (
                    <p style={{ color: "red" }}>الوصف المدخلة قصيرة للغاية</p>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="col-lg-12">
              <div class="form-group">
                <label class="form-control-label"> الشروط والأحكام</label>
                <textarea
                  rows="4"
                  class="form-control"
                  name="Terms"
                  ref={register({
                    minLength: 3,
                  })}
                  placeholder="شروط وأحكام صرف الكوبونات"
                ></textarea>
                {errors.Terms && errors.Terms.type === "minLength" && (
                  <p style={{ color: "red" }}>
                    الشروط والأحكام المدخلة قصيرة للغاية
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {spinner ? (
          <button
            className="btn btn-default"
            disabled
            style={{ float: "left" }}
          >
            <span className="spinner-grow spinner-grow-sm"></span>
            جاري الإرسال ..
          </button>
        ) : (
          <input
            style={{ float: "left" }}
            type="submit"
            className="btn btn-default"
            value={loading ? "Loading..." : "إنشاء كوبون"}
          />
        )}
      </form>
    </>
  );
}

export default NewCoubonForm;
