import React, { useState, useEffect, useContext } from "react"; //
import { useForm } from "react-hook-form";
import api from "../services/Api";
import { GetCCAs } from "../services/api_get";
import Skeleton from "react-loading-skeleton";
import { useAlert } from "react-alert";
import Cookies from "js-cookie";

import { useRouter } from "next/router";
import useAuth, { ProtectRoute } from "../contexts/auth.js";
import ButtonUploadImage from "./ButtonUpload";
import axios from "axios";

function NewBranchForm({
  company_id,
  GoBackAndTriggerMutation,
  changenewCompany,
  companyName,
}) {
  const alert = useAlert();
  const router = useRouter();

  const token = Cookies.get("token");
  const siteUrl = Cookies.get("siteUrl");

  const { toggler, settoggler, loading } = useAuth();
  const [spinner, setspinner] = useState(false);
  const [imeges, setimeges] = useState([]);

  const { data, isLoading, isError } = GetCCAs();

  const results = isLoading ? false : data.data;
  console.log(company_id);
  const showSkeleton = isLoading || loading;
  const [citys, setcitys] = useState([]);
  const [firstTime, setfirstTime] = useState(true);

  if (firstTime && results) {
    setcitys(results[0].data);
    setfirstTime(false);
  }

  const { register, handleSubmit, errors } = useForm({
    //mode: "onChange",
  });

  function handleThumbnailProduct(file) {
    let imageObj = {
      id: file.name,
      name: file.name,
      isUloading: true,
      imageObject: file,
    };
    console.log(imageObj);

    let formData = new FormData();

    formData.append("file", file);

    axios
      .post(siteUrl + "wp/v2/media", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result.data.source_url);
        let tempimegesarray = imeges;
        tempimegesarray.push(result.data.source_url);
        console.log(tempimegesarray);
        setimeges(tempimegesarray);
      });
  }

  const onSubmit = (formdata) => {
    formdata = { ...formdata, company_id, imeges };
    setspinner(true);

    api
      .post("api/newBranch", formdata)
      .then((res) => {
        console.log(res.data);
        setspinner(false);
        if (res.data == "phone") {
          alert.show("رقم الجوال مستخدم مسبقا", {
            timeout: 2000,
            type: "error",
          });
        }

        if (res.data > 0 || res.data == true) {
          alert.show("تم بنجاح", {
            timeout: 2000,
            type: "success",
          });
          GoBackAndTriggerMutation();
          changenewCompany();
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
      <h2>{companyName}</h2>
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
          إنشاء فرع جديد :
        </h2>

        <div style={{ clear: "both" }}></div>
      </div>
      <br></br>
      <div class="col-xl-12 col-md-12" style={{ height: "50px" }}></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h6 className="heading-small text-muted mb-4">معلومات الفرع</h6>
        <div className="pl-lg-4">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label className="form-control-label">إسم الفرع</label>
                <input
                  type="text"
                  name="branchName"
                  ref={register({
                    required: true,
                    minLength: 3,
                  })}
                  className="form-control"
                  placeholder="إسم الفرع"
                />
              </div>
              {errors.branchName && errors.branchName.type === "required" && (
                <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
              )}
              {errors.branchName && errors.branchName.type === "minLength" && (
                <p style={{ color: "red" }}>الإسم المدخل قصير للغاية</p>
              )}
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label className="form-control-label">وصف قصير</label>
                <input
                  type="text"
                  name="branchShortDesc"
                  ref={register({
                    required: true,
                    minLength: 3,
                    maxLength: 100,
                  })}
                  className="form-control"
                  placeholder="وصف قصير"
                />
              </div>
              {errors.branchShortDesc &&
                errors.branchShortDesc.type === "required" && (
                  <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
                )}
              {errors.branchShortDesc &&
                errors.branchShortDesc.type === "minLength" && (
                  <p style={{ color: "red" }}>الوصف المدخل قصير للغاية</p>
                )}
              {errors.branchShortDesc &&
                errors.branchShortDesc.type === "maxLength" && (
                  <p style={{ color: "red" }}>الوصف المدخل طويل للغاية</p>
                )}
            </div>

            <div className="col-lg-6">
              <div className="form-group">
                <label className="form-control-label">الدولة</label>
                <select
                  name="county"
                  ref={register({
                    required: true,
                  })}
                  onChange={(e) => {
                    let selectedCounty = e.target.value;
                    /*if (firstTime) {
                    setfirstTime(false);
                  }*/
                    for (let index = 0; index < results.length; index++) {
                      const tempconunty = results[index];
                      if (tempconunty.name === selectedCounty) {
                        setcitys(tempconunty.data);
                      }
                    }
                  }}
                  class="form-control"
                >
                  {results
                    ? results.map((county, index) => {
                        return <option>{county.name}</option>;
                      })
                    : ""}
                </select>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="form-group">
                <label className="form-control-label">المدينة</label>
                <select
                  name="city"
                  ref={register({
                    required: true,
                  })}
                  class="form-control"
                >
                  {citys.length > 0
                    ? citys.map((city, index) => {
                        return <option value={city.name}>{city.name}</option>;
                      })
                    : ""}
                </select>
              </div>
            </div>

            {showSkeleton ? <Skeleton height={10} count={2} /> : ""}
            <div className="col-lg-12">
              <div className="form-group">
                <label className="form-control-label">عنوان الفرع</label>
                <input
                  type="text"
                  name="branchAddress"
                  ref={register({
                    required: true,
                    minLength: 3,
                  })}
                  className="form-control"
                  placeholder="عنوان الفرع"
                />
              </div>
              {errors.branchAddress &&
                errors.branchAddress.type === "required" && (
                  <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
                )}
              {errors.branchAddress &&
                errors.branchAddress.type === "minLength" && (
                  <p style={{ color: "red" }}>العنوان المدخل قصير للغاية</p>
                )}
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <label className="form-control-label">
                  رابط احداثيات خرائط غوغل
                </label>
                <input
                  type="text"
                  name="direction_url"
                  ref={register({
                    required: true,
                    minLength: 3,
                  })}
                  className="form-control"
                  placeholder="رابط"
                />
              </div>
              {errors.direction_url &&
                errors.direction_url.type === "required" && (
                  <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
                )}
              {errors.direction_url &&
                errors.direction_url.type === "minLength" && (
                  <p style={{ color: "red" }}>رابط المدخل قصير للغاية</p>
                )}
            </div>
            <div class="col-xl-12 col-md-12" style={{ height: "50px" }}></div>
            <div className="col-lg-12">
              صور الفرع (اختياري)
              <br />
              {imeges.length > 0 ? (
                <>
                  {imeges.map((item, index) => {
                    return (
                      <>
                        <a href={item}>صورة {index + 1}</a>
                        <br />
                      </>
                    );
                  })}
                </>
              ) : (
                ""
              )}
              <br />
              <ButtonUploadImage
                typeImage="thumbnail"
                onChange={(thumbnail) =>
                  handleThumbnailProduct(thumbnail.target.files[0])
                }
              />
              <hr />
            </div>
            <div class="col-xl-12 col-md-12" style={{ height: "50px" }}></div>
          </div>
        </div>

        <h6 className="heading-small text-muted mb-4">معلومات الحساب</h6>
        <div className="pl-lg-4">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label className="form-control-label">الإسم الأول</label>
                <input
                  type="text"
                  name="FirstName"
                  ref={register({
                    required: true,
                    minLength: 3,
                  })}
                  className="form-control"
                  placeholder="الإسم الأول"
                />
              </div>
              {errors.FirstName && errors.FirstName.type === "required" && (
                <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
              )}
              {errors.FirstName && errors.FirstName.type === "minLength" && (
                <p style={{ color: "red" }}>الإسم المدخل قصير للغاية</p>
              )}
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label className="form-control-label">الإسم الأخير</label>
                <input
                  type="text"
                  name="LastName"
                  ref={register({
                    required: true,
                    minLength: 3,
                  })}
                  className="form-control"
                  placeholder="الإسم الأخير"
                />
              </div>
              {errors.LastName && errors.LastName.type === "required" && (
                <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
              )}
              {errors.LastName && errors.LastName.type === "minLength" && (
                <p style={{ color: "red" }}>الإسم المدخل قصير للغاية</p>
              )}
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label className="form-control-label">رقم الجوال</label>
                <input
                  type="number"
                  name="Phone"
                  ref={register({
                    required: true,
                    minLength: 12,
                  })}
                  className="form-control"
                  placeholder="الرجاء كتابة مفتاح الدولة مثال 966"
                />
              </div>
              {errors.Phone && errors.Phone.type === "required" && (
                <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
              )}
              {errors.Phone && errors.Phone.type === "minLength" && (
                <p style={{ color: "red" }}>يجب إدخال رقم الجوال صالح</p>
              )}
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
            value={loading ? "Loading..." : "إنشاء فرع"}
          />
        )}
      </form>
    </>
  );
}

export default NewBranchForm;
