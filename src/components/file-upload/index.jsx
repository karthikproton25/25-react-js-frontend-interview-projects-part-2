function FileUpload() {
    const [file, setFile] = useState();
    const uploadReference = useRef();
    const progressReference = useRef();
    const statusReference = useRef();

  return <div className="file-upload-container">
    <h1>File Upload</h1>
    <input type="file" name="file" reference="{UploadReference}" />
    <label htmlFor=""></label>
    <p></p>
    <img src="" alt="" />
  </div>;
}

eport default FileUpload;