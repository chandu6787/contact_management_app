import React, { useState } from "react";

function ContactForm({ fetchContacts }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const isValid =
    form.name.trim() !== "" &&
    form.phone.trim() !== "" &&
    (form.email === "" || /\S+@\S+\.\S+/.test(form.email));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) return;

    await fetch("https://contact-management-backend-6w3y.onrender.com/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    setForm({ name: "", email: "", phone: "", message: "" });
    fetchContacts();
    alert("Contact added successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name *"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      /><br /><br />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      /><br /><br />

      <input
        placeholder="Phone *"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      /><br /><br />

      <textarea
        placeholder="Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      /><br /><br />

      {!isValid && (
        <p style={{ color: "red" }}>Enter valid Name, Phone & Email</p>
      )}

      <button disabled={!isValid}>Submit</button>
    </form>
  );
}

export default ContactForm;
