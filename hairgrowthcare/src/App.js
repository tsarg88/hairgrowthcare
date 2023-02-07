import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact/Contact";
import { Nav } from "./nav/Nav.js";
import { Main } from "./pages/Main.js";
import NavProvider from "./context/NavContext";
import { Footer } from "./Footer/Footer";
import "./App.css";
import Confirmation from "./pages/Confirmation";
import ContactIcon from "./images/contact.png";

import { FaBeer } from "react-icons/fa";

function App() {
  return (
    <div className="appContainer">
      <NavProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <img src={ContactIcon} />

                <Nav />
                <Main />
              </div>
            }
          />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/confirmation" element={<Confirmation />} />
        </Routes>
      </NavProvider>
      <Footer />
    </div>
  );
}

export default App;
