import logo from "./logo.svg";
import "./App.css";
import Typography from "./components/Typography/Typography";
import Nav from "./components/Nav/Nav";

function App() {
  const arr = ["Thomas", "Jernice", "Seena"];
  const name = "Thomas";

  return (
    <div className="App">
      <Nav height="10vh" textColor="whitesmoke" />

      <Typography color="pink">Hello world</Typography>
      <Typography color="red">React is Cool</Typography>

      {arr.map((name) => (
        <Typography color="purple">{name}</Typography>
      ))}

      <h1 className="red">please dont</h1>
    </div>
  );
}

export default App;
