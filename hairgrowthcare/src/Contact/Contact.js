import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({}); // added
  const [loader, setLoader] = useState(false);

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
        })
        .then(() => {
          setLoader(false);
          alert("Thanks! Your message has been received!");
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
    <form className="form" onSubmit={handleSubmit}>
      <h1>
        Hello, thanks again for visiting{" "}
        <span id="siteName">hairgrowthcare.com</span>!
      </h1>
      <h2>
        If you have any questions or concerns, please fill the below form and we
        will get back to you asap!
      </h2>
      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {error.name && <p style={{ color: "red" }}>{error.name}</p>}
      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error.email && <p style={{ color: "red" }}>{error.email}</p>}

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      {error.message && <p style={{ color: "red" }}>{error.message}</p>}

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
