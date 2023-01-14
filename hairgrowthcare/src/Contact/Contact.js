import React, { useState } from "react";
import { useNav } from "../customHooks/useNav";

export const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // send name and message to server or email
    console.log(name, message);
  };

  const homeRef = useNav("Contact");

  return (
    <section ref={homeRef} id="contactContainer">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
