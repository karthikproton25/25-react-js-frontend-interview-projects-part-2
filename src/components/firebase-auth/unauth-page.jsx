import { useState } from "react";

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
    return (
        <div className="unauth-page-wrapper">
            <div className="unauth-tab-view-container">
            <button onClick={() => setIsLoginView(false)}>Register View</button>
            <button onClick={() => setIsLoginView(true)}>Login View</button>
            </div>
            {
                isLoginView ? <Login/> : <Registration/>
            }
        </div>
    )
}

export default UnauthPage;