import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [scrollY, setScroll] = useState(false);

  const styles = {
    nav: {
      width: "100%",
      height: "10vh",
      minHeight: "50px",
      display: "flex",
      position: "fixed",
      top: "0",
      backgroundColor: !scrollY ? "transparent" : "black",
      color: !scrollY ? "black" : "white",
      borderBottom: !scrollY ? "solid black" : "none",
      justifyContent: "space-around",
      alignItems: "center",
      transition: "background-color .5s",
    },
    navList: {
      display: "inline-flex",
      listStyle: "none",
      width: "300px",
      justifyContent: "space-between",
    },
  };

  const checkPosition = () =>
    window.scrollY > 50 ? setScroll(true) : setScroll(false);

  useEffect(() => {
    window.addEventListener("scroll", checkPosition);
    return () => {
      window.removeEventListener("scroll", checkPosition);
    };
  }, []);

  return (
    <div style={styles.nav}>
      <ul style={styles.navList}>
        <li className="red">Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Nav;
