import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList";

const Users = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setusers(response.data);
    });
  }, []);

  return (
    <>
      <h1>Users</h1>
      <UserList users={users} />
    </>
  );
};

export default Users;
