import logo from "./logo.svg";
import "./App.css";
import Typography from "./components/Typography/Typography";
import Nav from "./components/Nav/Nav";
import ChildrenDemo from "./components/ChildrenDemo/ChildrenDemo";
import Box from "./components/Box/Box";

function App() {
  const arr = ["Thomas", "Jernice", "Seena"];
  const name = "Thomas";

  return (
    <div className="App">
      <Nav textColor="white" />
      <ChildrenDemo>Hello Jernice</ChildrenDemo>

      <Box color="pink" />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
}

export default App;
