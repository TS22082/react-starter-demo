import React from "react";

const Box = (props) => {
  const styles = {
    width: "200px",
    height: "200px",
    backgroundColor: props.color ? props.color : "white",
    border: props.border ? props.border : "solid black",
  };

  return <div style={styles}></div>;
};

export default Box;
