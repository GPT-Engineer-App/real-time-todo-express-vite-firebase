import React, { useState } from "react";

function ImageUploader({ onImageUpload }) {
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target.result;
        setImageUrl(url);
        onImageUpload(url);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageUrl && <img src={imageUrl} alt="Uploaded" className="mt-2 max-h-40" />}
    </>
  );
}

export default ImageUploader;
