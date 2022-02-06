import React from "react";
import Private from "./Private";
import Public from "./Public";

export default Welcome = ({ loggedIn }) => {
  if (loggedIn) {
    return <Private />;
  }
  return <Public />;
};
4;
