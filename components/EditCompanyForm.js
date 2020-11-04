import React, { useState, useEffect, useContext } from "react"; //
import { useForm } from "react-hook-form";
import api from "../services/Api";
import { GetCCAs } from "../services/api_get";
import Skeleton from "react-loading-skeleton";
import { useAlert } from "react-alert";

import { useRouter } from "next/router";
import useAuth, { ProtectRoute } from "../contexts/auth.js";

function EditCompanyForm({ changenewCompany, comp, GoBackAndTriggerMutation }) {
  const alert = useAlert();
  const router = useRouter();

  const { toggler, settoggler, loading } = useAuth();
  const [spinner, setspinner] = useState(false);

  const id = comp.id;

  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      companyName: comp.name,
      companyShortDesc: comp.ShortDesc,
      companyFullDesc: comp.FullDesc,
    },
  });

  const onSubmit = (formdata) => {
    formdata = { ...formdata, id };

    console.log(formdata);
    setspinner(true);

    api
      .post("rabwa/UpdateCompany", formdata)
      .then((res) => {
        console.log(res.data);
        setspinner(false);
        if (res.data == "phone") {
          alert.show("رقم الجوال مستخدم مسبقا", {
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
        }
      })
      .catch((err) => {
        alert.show(" خطا" + err, {
          timeout: 2000,
          type: "error",
        });
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
          تعديل الشركة :
        </h2>

        <div style={{ clear: "both" }}></div>
      </div>
      <br></br>
      <div class="col-xl-12 col-md-12" style={{ height: "50px" }}></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h6 className="heading-small text-muted mb-4">معلومات الشركة</h6>
        <div className="pl-lg-4">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label className="form-control-label">إسم الشركة</label>
                <input
                  type="text"
                  name="companyName"
                  //value={comp.name}
                  ref={register({
                    required: true,
                    minLength: 3,
                  })}
                  className="form-control"
                  placeholder="مثال : الدانوب"
                />
              </div>
              {errors.companyName && errors.companyName.type === "required" && (
                <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
              )}
              {errors.companyName &&
                errors.companyName.type === "minLength" && (
                  <p style={{ color: "red" }}>الإسم المدخل قصير للغاية</p>
                )}
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label className="form-control-label">وصف قصير</label>
                <input
                  type="text"
                  name="companyShortDesc"
                  ref={register({
                    required: true,
                    minLength: 3,
                    maxLength: 100,
                  })}
                  className="form-control"
                  placeholder="وصف قصير"
                />
              </div>
              {errors.companyShortDesc &&
                errors.companyShortDesc.type === "required" && (
                  <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
                )}
              {errors.companyShortDesc &&
                errors.companyShortDesc.type === "minLength" && (
                  <p style={{ color: "red" }}>الوصف المدخل قصير للغاية</p>
                )}
              {errors.companyShortDesc &&
                errors.companyShortDesc.type === "maxLength" && (
                  <p style={{ color: "red" }}>الوصف المدخل طويل للغاية</p>
                )}
            </div>
          </div>
        </div>

        <div class="pl-lg-4">
          <div class="form-group">
            <label class="form-control-label"> وصف الشركة الكامل</label>
            <textarea
              rows="4"
              class="form-control"
              name="companyFullDesc"
              ref={register({
                minLength: 3,
              })}
              placeholder="وصف الشركة الكامل ..."
            >
              وصف الشركة
            </textarea>
            {errors.companyFullDesc &&
              errors.companyFullDesc.type === "minLength" && (
                <p style={{ color: "red" }}>الوصف المدخل قصير للغاية</p>
              )}
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
            value={loading ? "Loading..." : "تعديل"}
          />
        )}
      </form>
    </>
  );
}

export default EditCompanyForm;
