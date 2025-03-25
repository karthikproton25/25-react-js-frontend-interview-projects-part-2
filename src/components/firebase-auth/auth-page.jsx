import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../firebase-config";


function AuthPage {
    return (
        <div>
            <h1>Auth Page</h1>
        <button onClick={logout}>Logout</button>
        </div>
    )
}

export default AuthPage; 