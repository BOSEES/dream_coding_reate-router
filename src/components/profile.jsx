import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

const Profile = (props) => {
  const history = useHistory();

  return (
    <>
    <h1>profile</h1>
    <button onClick={ () => {
      history.push("/home");
    }}>go Home</button>
    </>
  );
};

export default Profile;