import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";

const styles = {
  container: {
    textAlign: "center",
    padding: "10px",
  },
  heading: {
    fontSize: "32px",
    color: "blue",
  },
  paragraph: {
    fontSize: "24px",
    color: "green",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    padding: "0",
    margin: "10px 0",
  },
  menuItem: {
    padding: "10px",
  },
  "@media (max-width: 600px)": {
    heading: {
      fontSize: "24px",
    },
    paragraph: {
      fontSize: "20px",
    },
  },
};

const Home = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>Home</h1>
    <p style={styles.paragraph}>Welcome to the home page.</p>
  </div>
);

const About = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>About</h1>
    <p style={styles.paragraph}>
      Hello, thanks for visiting hairgrowthcare! Right now the site is under
      construction! Please check back soon! 1
    </p>
  </div>
);

const Contact = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>Contact</h1>
    <p style={styles.paragraph}>You can contact us at contact@example.com.</p>
  </div>
);

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <ul style={styles.menu}>
            <li style={styles.menuItem}>
              <Link to="/">Home</Link>
            </li>
            <li style={styles.menuItem}>
              <Link to="/about">About</Link>
            </li>
            <li style={styles.menuItem}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Routes>
        </div>
      </Router>
      <About></About>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
