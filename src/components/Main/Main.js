import React from "react";

const Main = (props) => {
  const mainStyles = {
    display: "flex",
    minHeight: "90vh",
    width: "70%",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
  };
  return <main style={mainStyles}>{props.children}</main>;
};

export default Main;
