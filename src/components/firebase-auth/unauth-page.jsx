import { useState } from "react";
import { auth, loginUsingEmailAndPassword, registerUsingEmailAndPassword } from "../../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import FirebaseTodo from "../firebase-todo";

function Registration(){
return <div className="register">
    <div className="input-wrapper">
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name" />
    </div>
    <div className="input-wrapper">
        <label htmlFor="email">Email:</label>
        <input type="email" name="name" id="email" placeholder="Enter your email" />
    </div>
    <div className="input-wrapper">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Enter your password" />
    </div>
    <button>Register</button>
</div>;
}

function Login(){
return <div className="login">
    <input />
    <input />
    <button>Login</button>
</div>;
}


function UnauthPage {
    const [isLoginView, setIsLoginView] = useState(false);
    const [registerFormData, setRegisterFormData] = useState({
        name: "",
        email: "",
        password: "",
      });
      const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
      });
      const [user, loading, error] = useAuthState(auth)

    return (
        <div className="unauth-page-wrapper">
            <div className="unauth-tab-view-container">
            <button onClick={() => setIsLoginView(false)}>Register View</button>
            <button onClick={() => setIsLoginView(true)}>Login View</button>
            </div>
            {isLoginView ? (
        <Login
          formData={loginFormData}
          setFormData={setLoginFormData}
          handleLogin={handleLogin}
        />
      ) : (
        <Registration
          formData={registerFormData}
          setFormData={setRegisterFormData}
          handleRegister={handleRegister}
        />
      )}
        </div>
    )
}

export default UnauthPage;