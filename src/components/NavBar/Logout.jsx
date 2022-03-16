import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Logout = () => {
  const { user, logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={() => logout()}
        >
          {user?.picture && (
            <img
              src={user.picture}
              alt={user?.name}
              class="rounded-circle shadow-4 avatar"
            />
          )}
          Logout
        </button>
      </div>
    )
  );
};

export default Logout;
