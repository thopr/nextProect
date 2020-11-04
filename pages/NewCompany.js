import React, { useState, useEffect, useContext } from "react"; //
import useAuth, { ProtectRoute } from "../contexts/auth.js";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Admin_nav from "../components/Admin_nav";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import EditableImage from "../Components/editable-image/EditableImage";
import ButtonUploadImage from "../Components/buttonupload/ButtonUpload";
import api from "../services/Api";
import Cookies from "js-cookie";
import axios from "axios";

function NewCompany() {
  const token = Cookies.get("token");
  const siteUrl = Cookies.get("siteUrl");

  const router = useRouter();

  const { toggler, settoggler, loading } = useAuth();
  const [spinner, setspinner] = useState(false);
  const [ProductImage, setProductImage] = useState();

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
      });

    /* api.post("wp/v2/media", { formData }).then((res) => {
      console.log(res.source_url);
    });*/

    /* API.WP_uploadImage(token, formData)
          .then((data) => {
            setProductImage(data.source_url);
            setIsThumbnailUploade(true);
            console.log(data.source_url);
            setconfImage(data.source_url);
          })
          .catch((error) => {});*/
  }
  const { register, handleSubmit, errors } = useForm({
    //mode: "onChange",
  });

  return (
    <body className="rtl g-sidenav-show g-sidenav-pinned" dir="rtl">
      <div>
        {/* Sidenav */}

        {toggler ? <Admin_nav /> : ""}
        {/* Main content */}

        <div className="main-content" id="panel">
          {/* Topnav */}
          <HeaderNav />

          <div className="container-fluid mt--6">
            <div className="row justify-content-center">
              <div className=" col ">
                <div className="card">
                  <div className="card-header bg-transparent">
                    <h3 className="mb-0">Form example</h3>
                  </div>
                  <div className="card-body">
                    <h6 className="heading-small text-muted mb-4">
                      معلومات الشركة
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div style={{ width: "140px", margin: "2em auto" }}>
                            {ProductImage ? (
                              <EditableImage
                                imageObject={ProductImage}
                                removeImageFunc={() => setProductImage(false)}
                              />
                            ) : (
                              <ButtonUploadImage
                                typeImage="thumbnail"
                                onChange={(thumbnail) =>
                                  handleThumbnailProduct(
                                    thumbnail.target.files[0]
                                  )
                                }
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
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
  );
}

export default ProtectRoute(NewCompany);
