import React, { useState, useEffect, useContext } from "react"; //
import { useForm } from "react-hook-form";
import api from "../services/Api";
import { useAlert } from "react-alert";

import { useRouter } from "next/router";
import useAuth, { ProtectRoute } from "../contexts/auth.js";

function NewCategoryForm({
  changenewCompany,
  // category,
  GoBackAndTriggerMutation,
}) {
  const alert = useAlert();
  const router = useRouter();

  const { toggler, settoggler, loading } = useAuth();
  const [spinner, setspinner] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    /* defaultValues: {
      CategoryName: branch.branch_name,
   
    },*/
  });

  //const id = branch.id;

  const onSubmit = (formdata) => {
    // formdata = { ...formdata, id };

    console.log(formdata);
    setspinner(true);

    api
      .post("api/NewCategory", formdata)
      .then((res) => {
        console.log(res.data);
        setspinner(false);
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
          إنشاء تصنيف جديد:
        </h2>

        <div style={{ clear: "both" }}></div>
      </div>
      <br></br>
      <div class="col-xl-12 col-md-12" style={{ height: "50px" }}></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pl-lg-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <label className="form-control-label">إسم التصنيف</label>
                <input
                  type="text"
                  name="CategoryName"
                  ref={register({
                    required: true,
                    minLength: 3,
                  })}
                  className="form-control"
                  placeholder="إسم التصنيف"
                />
              </div>
              {errors.CategoryName &&
                errors.CategoryName.type === "required" && (
                  <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
                )}
              {errors.CategoryName &&
                errors.CategoryName.type === "minLength" && (
                  <p style={{ color: "red" }}>الإسم المدخل قصير للغاية</p>
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
            value={loading ? "Loading..." : "إنشاء"}
          />
        )}
      </form>
    </>
  );
}

export default NewCategoryForm;
