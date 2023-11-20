import React, { useRef } from "react";
import emailjs from "@emailjs/browser"; // Update the import statement
import "../index.css";

emailjs.init("jw_rvC6MIzpMYsBtn");

function sendmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let messages = document.getElementById("message").value;
  let phone = document.getElementById("number").value;

  var contactParams = {
    from_name: name,
    from_email: email,
    message: messages,
    number: phone,
  };

  emailjs
    .send("service_ngi1d3e", "template_ohy09tt", contactParams)
    .then(function (res) {
      // Handle the success or failure of sending the email if needed
    });
}

function Contact() {
  const form = useRef();

  const sendmail = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const messages = document.getElementById("message").value;
    const phone = document.getElementById("number").value;
    const subject = document.getElementById("subject").value;

    var contactParams = {
      from_name: name,
      from_email: email,
      message: messages,
      number: phone,
      subject: subject,
    };

    emailjs.send("service_ngi1d3e", "template_ohy09tt", contactParams).then(
      function (res) {
        console.log(res.text);
        alert(
          "Thanks for sending me an Email! I'll get back to you as soon as I can"
        ); // Display success message
      },
      function (error) {
        console.log(error.text);
        alert("Error sending email. Please try again."); // Display error message
      }
    );
  };

  return (
    <>
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <form action="#">
        <div className="input-box">
          <input type="text" id="name" placeholder="Full Name" />
          <input type="email" id="email" placeholder="Your Email" />
        </div>
        <div className="input-box">
          <input type="text" id="number" placeholder="Phone Number" />
          <input type="text" id="subject" placeholder="Subject" />
        </div>
        <textarea
          name=""
          id="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <button onClick={sendmail} className="btn">
          Send
        </button>
      </form>
    </>
  );
}

export default Contact;
