import AuthPage from "./auth-page";
import UnauthPage from "./unauth-page";

function FirebaseAuth() {
  return (
    <div>
      <h1>Firebase Auth</h1>
      <UnauthPage />
      <AuthPage />
    </div>
  );
}

export default FirebaseAuth;
