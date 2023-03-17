import React, { useState } from "react";
import './contact.scss'

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!name || !email || !message) {
        alert("You missed some fields")
        return;
    }

    const data = {name, email, message}

    fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) =>{
            alert("Congrats, message was sent.");
            setName("");
            setEmail("");
            setMessage("");
        })
        .catch((error) => {
            alert("Error. Try again later");
            console.log(error);
        });
  };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div className="input-group">
                <label htmlFor="message">Message Text</label>
                <input
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                />
            </div>
            <div className="input-group">
                <button type="submit">Send Message</button>
            </div>
        </form>
    )
}

export default ContactForm