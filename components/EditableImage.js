import React from "react";
import "./editable-image.module.scss";

//import Icon from "@material-ui/core/icons";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
const EditableImage = ({ imageObject, removeImageFunc }) => {
  let imagePreview;
  if (typeof imageObject === "string") {
    imagePreview = imageObject;
  } else {
    if ("sourceUrl" in imageObject) imagePreview = imageObject.sourceUrl;
    else if ("imageObject" in imageObject)
      imagePreview = URL.createObjectURL(imageObject.imageObject);
  }
  let imgUrl = imageObject
    ? imagePreview
    : `${process.env.PUBLIC_URL}/img/logo.png`;
  return (
    <div id="product-editable-image">
      <div
        className={
          "product-image " + imageObject.isUloading === false
            ? "image-uploaded"
            : ""
        }
      >
        <div className="product-img-container">
          <span className="remove-image" onClick={removeImageFunc}>
            <RemoveCircleOutlineIcon
              fontSize={"large"}
              color="danger"
              stlyle={{ backgroundColor: "red" }}
            />
          </span>
          <img
            className={`${imageObject.isUloading ? "image-loading" : ""}`}
            src={imgUrl}
            alt=""
            width="200"
            height="200"
          />
        </div>
      </div>
    </div>
  );
};

export default EditableImage;
