import logo from "./logo.svg";
import Box from "./Components/Box/Box";
import Nav from "./Components/Nav/Nav";
import "./App.css";
import Main from "./Components/Main/Main";
import SideNav from "./Components/SideNav/SideNav";

function App() {
  const divStyles = {
    width: "100%",
    display: "flex",
  };

  return (
    <div className="App">
      <Nav />
      <div style={divStyles}>
        <SideNav />
        <Main>
          <Box />
          <Box />
          <Box />
          <Box />
        </Main>
      </div>
    </div>
  );
}

export default App;
