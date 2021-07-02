import React from "react";

const Nav = () => {
  const styles = {
    nav: {
      width: "100%",
      height: "10vh",
      minHeight: "50px",
      display: "flex",
      backgroundColor: "black",
      color: "white",
      justifyContent: "space-around",
      alignItems: "center",
    },
    navList: {
      display: "inline-flex",
      listStyle: "none",
      width: "300px",
      justifyContent: "space-between",
    },
  };

  return (
    <div style={styles.nav}>
      <h1 id="red">Title</h1>
      <ul style={styles.navList}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Nav;
