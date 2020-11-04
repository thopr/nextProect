import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const ButtonUploadImage = ({ typeImage, onChange }) => {
  const inputKey = "upload-product-image-" + typeImage;

  return (
    <div className="upload-image-holder">
      <input
        accept="image/*"
        id={inputKey}
        multiple={typeImage !== "thumbnail"}
        type="file"
        className="hide-upload-input"
        onChange={(e) => onChange && onChange(e)}
      />
      <span className="add-icon">
        <label htmlFor={inputKey}>
          <AddCircleOutlineIcon fontSize="large" color="primary" />
        </label>
      </span>
    </div>
  );
};

export default ButtonUploadImage;
