import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button
        type="button"
        class="btn btn-outline-primary"
        onClick={() => loginWithRedirect()}
      >
        Login
      </button>
    )
  );
};

export default Login;
