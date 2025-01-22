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
        <div className="input-wrapper">
          <label>Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="input-wrapper">
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;
