import React from "react";

const Typography = (props) => {
  const styles = {
    color: props.color,
  };

  return <h1 style={styles}>{props.children}</h1>;
};

export default Typography;
