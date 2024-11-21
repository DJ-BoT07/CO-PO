// components/UserStatus.js
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";

const UserStatus = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? <p>Logged in as: {user.email}</p> : <p>No user is logged in.</p>}
    </div>
  );
};

export default UserStatus;
