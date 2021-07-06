import React from "react";

const Main = (props) => {
  const mainStyles = {
    display: "flex",
    minHeight: "90vh",
    width: "70%",
    alignItems: "center",
    flexDirection: "column",
  };
  return <main style={mainStyles}>{props.children}</main>;
};

export default Main;
