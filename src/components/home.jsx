import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();
  return (
    <>
    <h1>home</h1>
    <button onClick = {(e) => {
      history.push("/profile");
    }} >go Profile</button>
    </>
  );
};

export default Home;