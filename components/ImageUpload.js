import React, { useState } from "react";
import ImageCropper from "./ImageCropper";
function ImageUpload({ getmyimg }) {
  const [blob, setBlob] = useState(null);
  const [inputImg, setInputImg] = useState("");
  const [myiamge, setmyiamge] = useState("");

  const getBlob = (blob) => {
    setBlob(blob);
  };

  const onInputChange = (e) => {
    // convert image file to base64 string
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        setInputImg(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitImage = (e) => {
    event.preventDefault();
    // upload blob to firebase 'images' folder with filename 'image'
    e.preventDefault();

    console.log("res");
    console.log(blob);

    var imgtemp_name = "img_" + Math.random() + "";

    const file = new File([blob], imgtemp_name, { type: "image/png" });

    getmyimg(file);

    console.log(file);

    /* var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      var base64data = reader.result;
      console.log(base64data);

      var image = new Image();
      image.src = base64data;
      console.log(image);
      setmyiamge(base64data);
    };
*/
    console.log("res");
  };

  return (
    <>
      <img src={myiamge} />
      <form onSubmit={handleSubmitImage}>
        <input type="file" accept="image/*" onChange={onInputChange} />
        <br />

        <button type="submit">Submit</button>
      </form>

      <div className="row">
        <div className="col-12">
          <div style={{ height: "500px", width: "100%" }}>
            {inputImg && <ImageCropper getBlob={getBlob} inputImg={inputImg} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageUpload;
