import React from "react";
import { withRouter } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

const data = {
  steven: {
    name: "윤성연",
    description: "리액트를 사랑하는 개발자",
  },

  yoon_jiwoo: {
    name: "한소희",
    description: "마이네임의 여주인공",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default withRouter(Profile);
