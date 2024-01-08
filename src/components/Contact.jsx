"use client";

import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log("fName", fName, lName, email, msg);

    let formData = {
      fname: fName,
      lname: lName,
      email: email,
      msg: msg,
    };

    let res = await axios.post(
      "https://agency.teamrabbil.com/api/CreateContact",
      formData
    );
    console.log("res", res.data);
  };
  return (
    <>
      <section className="contact-section">
        <div className="row">
          <div className="form-grid">
            <div className="col">
              <div className="form-text-content">
                <h2>So much more than a business analytics tool</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque efficitur nisl sodales egestas lobortis.
                </p>
                <button className="primary-btn">Get Started</button>
              </div>
            </div>

            <div className="col">
              <form
                onSubmit={(e) => {
                  formSubmit(e);
                }}
                action=""
              >
                <div className="fName-LName">
                  <input
                    className="inputField"
                    type="text"
                    placeholder="First Name"
                    defaultValue={fName}
                    onChange={(e) => {
                      setfName(e.target.value);
                    }}
                  />
                  <input
                    className="inputField"
                    type="text"
                    placeholder="Last Name"
                    defaultValue={lName}
                    onChange={(e) => {
                      setlName(e.target.value);
                    }}
                  />
                </div>
                <div className="email">
                  <input
                    className="inputField"
                    type="email"
                    placeholder="Email"
                    defaultValue={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="msg">
                  <textarea
                    className="msf"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    defaultValue={msg}
                    onChange={(e) => {
                      setMsg(e.target.value);
                    }}
                  ></textarea>
                </div>
                <button type="submit" className="submitBtn">
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
