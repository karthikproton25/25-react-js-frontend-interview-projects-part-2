import { useRef, useState } from "react";

function FileUpload() {
    const [file, setFile] = useState();
    const uploadReference = useRef();
    const progressReference = useRef();
    const statusReference = useRef();

    function handleUploadFile() {
      const file = uploadReference.current.files[0];
      setFile(URL.createObjectURL(file));
      let formData = new FormData();
      formData.append("image", file);
      let xhr = new XMLHttpRequest();
      xhr.upload.addEventListener("progress", handleProgress, false);
      xhr.addEventListener("load", handleSuccess, false);
      xhr.addEventListener("error", handleError, false);
      xhr.addEventListener("abort", handleAbort, false);
  
      xhr.open("POST", "https://v2.convertapi.com/upload");
      xhr.send(formData);
    }

  return <div className="file-upload-container">
    <h1>File Upload</h1>
    <input
        onChange={handleUploadFile}
        type="file"
        name="file"
        ref={uploadReference}
      />
    <label htmlFor=""></label>
    <p></p>
    <img src="" alt="" />
  </div>;
}

eport default FileUpload;