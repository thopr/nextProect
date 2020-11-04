import React, { useState, useEffect, useContext } from "react"; //
import { useForm } from "react-hook-form";
import api from "../services/Api";
import { GetCategories } from "../services/api_get";
import Skeleton from "react-loading-skeleton";
import { useAlert } from "react-alert";
import EditableImage2 from "./EditableImage2";
import ButtonUploadImage from "./ButtonUpload";
import Cookies from "js-cookie";

import axios from "axios";

import { useRouter } from "next/router";
import useAuth, { ProtectRoute } from "../contexts/auth.js";

function NewCardForm({ user_id, username, GoBackAndTriggerMutation }) {
  const alert = useAlert();
  const router = useRouter();
  const token = Cookies.get("token");
  const siteUrl = Cookies.get("siteUrl");
  const [XML, setXML] = useState("");

  const [ProductImage, setProductImage] = useState();

  const { toggler, settoggler, loading } = useAuth();
  const [spinner, setspinner] = useState(false);
  const [InputTypedis, setInputTypedis] = useState(false);
  const [InputTypecode, setInputTypecode] = useState(false);
  /*
  const { data, isLoading, isError } = GetCategories();

  const results = isLoading ? false : data.data;
  const showSkeleton = isLoading || loading;
*/

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
    setProductImage(imageObj);

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
        setXML(result.data.source_url);
      });
  }

  const onSubmit = (formdata) => {
    formdata = { ...formdata, user_id, XML };
    setspinner(true);
    console.log(formdata);

    api
      .post("rabwa/newUserCard", formdata)
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 style={{ textAlign: "center" }}> اضافة بطاقة الى : {username}</h1>

        <div dir="rtl" className="row">
          <div className="col-6">
            <div className="form-group">
              <label style={{ float: "right" }} className="form-control-label">
                إسم البطاقة
              </label>
              <input
                type="text"
                name="name"
                ref={register({
                  required: true,
                  minLength: 3,
                })}
                className="form-control"
                placeholder="إسم الكوبون"
              />
            </div>
            {errors.name && errors.name.type === "required" && (
              <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
            )}
            {errors.name && errors.name.type === "minLength" && (
              <p style={{ color: "red" }}>الإسم المدخل قصير للغاية</p>
            )}
          </div>

          <div className="col-6">
            <div className="form-group">
              <label style={{ float: "right" }} className="form-control-label">
                تاريخ الإنتهاء
              </label>
              <input
                type="date"
                name="end"
                ref={register({
                  required: true,
                })}
                className="form-control"
              />
            </div>
            {errors.name && errors.name.type === "required" && (
              <p style={{ color: "red" }}>هذا الحقل مطلوب</p>
            )}
          </div>

          <div className="col-12">
            <div className="form-group">
              <label style={{ float: "right" }} className="form-control-label">
                البطاقة
              </label>
              <div style={{ width: "140px", margin: "2em auto" }}>
                {ProductImage ? (
                  <EditableImage2
                    imageObject={ProductImage}
                    removeImageFunc={() => setProductImage(false)}
                  />
                ) : (
                  <ButtonUploadImage
                    typeImage="thumbnail"
                    onChange={(thumbnail) =>
                      handleThumbnailProduct(thumbnail.target.files[0])
                    }
                  />
                )}
              </div>
            </div>
          </div>

          <div className="col-12">
            <div class="form-group">
              <label style={{ float: "right" }} class="form-control-label">
                {" "}
                الوصف
              </label>
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
            value={loading ? "Loading..." : "إرسال"}
          />
        )}
      </form>
    </>
  );
}

export default NewCardForm;
