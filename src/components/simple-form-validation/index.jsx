function FormValidation() {
  return (
    <div>
      <h1>Simple Form Validation</h1>
      <form>
        <div className="input-wrapper">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
          />
        </div>
      </form>
    </div>
  );
}

export default FormValidation;
