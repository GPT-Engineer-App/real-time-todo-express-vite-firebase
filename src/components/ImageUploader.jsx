import React from 'react';

function ImageUploader({ onImageUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageUpload(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <input type="file" accept="image/*" onChange={handleFileChange} />
  );
}

export default ImageUploader;