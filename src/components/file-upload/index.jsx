import { useRef, useState } from "react";

function FileUpload() {
    const [file, setFile] = useState();
    const uploadReference = useRef();
    const progressReference = useRef();
    const statusReference = useRef();
    const loadReference = useRef();

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

    function handleProgress(event) {
      loadReference.current.innerHTML = `Uploaded ${event.loaded} bytes of ${event.total}`;
      const percentage = (event.loaded / event.total) * 100;
      progressReference.current.value = Math.round(percentage);
      statusReference.current.innerHTML = `${Math.round(
        percentage
      )} % uploaded...`;
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