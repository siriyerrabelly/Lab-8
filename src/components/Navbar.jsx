import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div>
      <h2>Navbar</h2>

      {user ? (
        <>
          <p>Welcome {user}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default Navbar;