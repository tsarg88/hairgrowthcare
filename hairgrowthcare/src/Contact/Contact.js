import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import "./Contact.css";
import { Nav } from "../nav/Nav";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import App from "../App";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const currentDate = firebase.firestore.Timestamp.now();
  const [error, setError] = useState({}); // added
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // added form validation
    if (!name) {
      setError({ name: "Name is required" });
    } else if (!email) {
      setError({ email: "Email is required" });
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError({ email: "Invalid email format" });
    } else if (!message) {
      setError({ message: "Message is required" });
    } else {
      setLoader(true);
      setError({}); // added

      db.collection("contacts")
        .add({
          name: name,
          email: email,
          message: message,
          date: currentDate,
        })
        .then(() => {
          setLoader(false);
          //   alert("Thanks! Your message has been received!");
          navigate("/confirmation");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });

      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <div>
       <p
        style={{
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#dc2626", // red
        marginTop: "1.5rem",
        }}
      >
        🚀 This site/domain is for sale — Please contact:{" "}
      <a
        href="mailto:sartigran88@gmail.com"
        style={{ textDecoration: "underline", color: "#2563eb" }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#1e40af")} // hover effect
        onMouseOut={(e) => (e.currentTarget.style.color = "#2563eb")}
      >
        sartigran88@gmail.com
      </a>
    </p>
      {/* <nav> */}
      <Link to="/" target="_blank">
        <Nav />
      </Link>
      {/* </nav> */}

      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Hello, thanks again for visiting{" "}
          <span id="siteName">hairgrowthcare.com</span>!
        </h1>
        <h2>
          If you have any questions or concerns, please fill the below form and
          I will get back to you asap!
        </h2>
        <label>Name</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error.name && (
          <p style={{ color: "red", textAlign: "center", fontWeight: "bold" }}>
            {error.name}
          </p>
        )}
        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error.email && (
          <p style={{ color: "red", textAlign: "center", fontWeight: "bold" }}>
            {error.email}
          </p>
        )}

        <label>Message</label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {error.message && (
          <p style={{ color: "red", textAlign: "center", fontWeight: "bold" }}>
            {error.message}
          </p>
        )}

        <button
          type="submit"
          style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
