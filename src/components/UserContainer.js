import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

const UserContainer = () => {
  const userData = useSelector((state) => state.user);
  const { loading, users, error } = userData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        userData &&
        users &&
        users.length && (
          <div>
            <h2>user list</h2>
            {users.map((user) => (
              <p>{user.name}</p>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default UserContainer;
