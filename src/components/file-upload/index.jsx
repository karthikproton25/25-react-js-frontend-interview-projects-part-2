function FileUpload() {
    const [file, setFile] = useState();
    const uploadReference = useRef();
    const progressReference = useRef();
    const statusReference = useRef();

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