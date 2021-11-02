import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";

const User = () => {
  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        setuser(response.data);
        setLoading(false);
        console.log(user);
      });
  }, []);

  const userDetail = loading ? (
    <Spinner />
  ) : (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
      <div>{user.username}</div>
    </div>
  );

  return (
    <>
      <h1>User 정보</h1>
      {userDetail}
    </>
  );
};

export default User;
