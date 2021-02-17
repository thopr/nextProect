import React, { useState, useEffect, useContext } from "react"; //
import { useForm } from "react-hook-form";
import api from "../services/Api";
import { useAlert } from "react-alert";

import { useRouter } from "next/router";
import useAuth, { ProtectRoute } from "../contexts/auth.js";

function EditCompanyForm({
  changenewCompany,
  branch,
  GoBackAndTriggerMutation,
  companyName,
  Branchname,
}) {
  const alert = useAlert();
  const router = useRouter();

  const { toggler, settoggler, loading } = useAuth();
  const [spinner, setspinner] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      branchName: branch.branch_name,
      branchShortDesc: branch.ShortDesc,
      branchAddress: branch.Address,
    },
  });

  const id = branch.id;

  const onSubmit = (formdata) => {
    formdata = { ...formdata, id };

    console.log(formdata);
    setspinner(true);

    api
      .post("api/UpdateBranch", formdata)
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
      <h2> {companyName + Branchname}</h2>
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
          تعديل الفرع :
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
