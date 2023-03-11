import React, { useState } from "react";
import { validate } from "../utils/helper.js";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const correctInput = (e) => {
    const { target } = e;
    const type = target.name;
    const value = target.value;
    if (type === "name") {
        setName(value);
    } else if (type === "email") {
        setEmail(value)
    } else {
        setMessage(value);
    }
  }

  const submission = (e) => {
      e.preventDefault();
      if (!validate(email)) {
          setError("Error! Please enter a valid email address.")
          return;
      } else if (!name) {
          setError("You must leave your name to continue")
          return;
      } else if (!message) {
          setError("You must leave a message to continue.")
          return;
      }
      setEmail("");
      setName("");
      setMessage("");
      setError("");
  };

  return (
    <div className="container" style={{ backgroundColor: "gray", padding: 50 }}>

      <h1 style={{ color: "lightcyan" }}>Contact</h1>

      <form>
        <div className="form-row">
          <div className="form-group col-md-6">

            <label htmlFor="name" style={{ color: "black" }}>
              Your Name:
            </label>

            <input value={name} name="name" onChange={correctInput} type="text" className="form-control" placeholder="What's your name?" />
          </div>
          <div className="form-group col-md-6">

            <label htmlFor="email" style={{ color: "black" }}>
                Email Address:
            </label>

            <input value={email} name="email" onChange={correctInput} type="email" className="form-control" placeholder="What is your email address?" />
          </div>
          <div className="form-group col-md-6">
            
            <label htmlFor="message" style={{ color: "black" }}>
              Message:
            </label>

            <textarea value={message} name="message" onChange={correctInput} type="text" className="form-control" placeholder="Leave a message!" />
          </div>
          {error && (
            <div>

              <p className="error-text" style={{ color: "lightcyan" }}>
               {error}
              </p>

            </div>
          )}
          <div class="mt-5 mb-5">

            <button className="btn btn-dark" type="button" onClick={submission} >
              Submit
            </button>

          </div>
        </div>
      </form>
    </div>
  );
}
export default Contact;