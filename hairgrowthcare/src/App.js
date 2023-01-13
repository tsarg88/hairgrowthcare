import React from "react";
import { Nav } from "./nav/Nav.js";
import { Main } from "./pages/Main.js";
import NavProvider from "./context/NavContext";
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <NavProvider>
        <Nav />
        <Main />
      </NavProvider>
    </div>
  );
}

export default App;
