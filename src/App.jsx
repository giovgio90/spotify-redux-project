import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Main from "./components/Main";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
