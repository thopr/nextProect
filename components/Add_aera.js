import React, { useState, useEffect, useContext } from "react"; //
import { useForm } from "react-hook-form";
import api from "../services/Api";
import { useAlert } from "react-alert";

import { useRouter } from "next/router";
import useAuth, { ProtectRoute } from "../contexts/auth.js";

function Add_aera({ GoBackAndTriggerMutation, Parent_id }) {
  console.log("------------------------------------");
  console.log(Parent_id);
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
      id: Parent_id,
    };
    setspinner(true);
    console.log(formdata);

    api
      .post("api/Add_aera", formdata)
      .then((res) => {
        console.log(res.data);
        setspinner(false);

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
      <br></br>
      <div class="col-xl-12 col-md-12" style={{ height: "50px" }}></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pl-lg-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <label className="form-control-label">إسم المنطقة </label>
                <input
                  type="text"
                  name="name"
                  ref={register({
                    required: true,
                  })}
                  className="form-control"
                  placeholder="إسم الخدمة"
                />
              </div>
              {errors.name && errors.name.type === "required" && (
                <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
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
            value={loading ? "Loading..." : "إنشاء منطقة"}
          />
        )}
      </form>
    </>
  );
}

export default Add_aera;
