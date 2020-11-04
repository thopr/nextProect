import React, { useState, useEffect, useContext } from "react"; //
import { useForm } from "react-hook-form";
import api from "../services/Api";
import { useAlert } from "react-alert";

import { useRouter } from "next/router";
import useAuth, { ProtectRoute } from "../contexts/auth.js";

function AddCoubonsForm({
  Section_id,
  coubonName,
  BracnhCode,
  value,
  GoBackAndTriggerMutation,
  changenewCompany,
  coubonType,
}) {
  const alert = useAlert();
  const router = useRouter();

  const { toggler, settoggler, loading } = useAuth();
  const [spinner, setspinner] = useState(false);
  const [InputTypedis, setInputTypedis] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    //mode: "onChange",
  });

  const onSubmit = (formdata) => {
    formdata = {
      ...formdata,
      Section_id,
      coubonName,
      BracnhCode,
      value,
      coubonType,
    };
    setspinner(true);
    console.log(formdata);

    api
      .post("rabwa/AddCoubons", formdata)
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
          إضافة كوبونات :
        </h2>

        <div style={{ clear: "both" }}></div>
      </div>
      <br></br>
      <div class="col-xl-12 col-md-12" style={{ height: "50px" }}></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h6 className="heading-small text-muted mb-4">
          إضافة كوبونات الى : {coubonName}
        </h6>
        {coubonType == "one_code" ? (
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-12">
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
            </div>
          </div>
        ) : (
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-12">
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
            </div>
          </div>
        )}
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
            value={loading ? "Loading..." : "إضافة كوبونات"}
          />
        )}
      </form>
    </>
  );
}

export default AddCoubonsForm;
