import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setusers(response.data);
    });
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return <h1>Users</h1>;
};

export default Users;
