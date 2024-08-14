"use client";
import React, { useState } from "react";
import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";
const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

function ContactForm() {
  const [user, SetUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    SetUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });

      if (response.status === 200) {
        SetUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your name :
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            className={mulish.className}
            value={user.name}
            autoComplete="off"
            required
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Enter your email :
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            className={mulish.className}
            value={user.name}
            autoComplete="off"
            required
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Enter your phonenumber :
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter your phone"
            autoComplete="off"
            required
            className={mulish.className}
            value={user.phone}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Enter your message :
          <textarea
            type="text"
            name="message"
            rows={5}
            id="message"
            placeholder="Enter your message"
            autoComplete="off"
            required
            className={mulish.className}
            value={user.message}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        {status === "success" && (
          <p className={styles.success_msg}>Thank you for you message !</p>
        )}
        {status === "error" && (
          <p className={styles.error_msg}>
            There was an error submittin your form !
          </p>
        )}

        <button
          type="submit"
          className={mulish.className}
          value={user.name}
          onChange={handleChange}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
