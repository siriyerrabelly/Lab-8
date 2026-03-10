import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {

  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>

      {user ? (
        <p>Welcome, {user}</p>
      ) : (
        <p>Please login to view profile</p>
      )}

    </div>
  );
};

export default Profile;