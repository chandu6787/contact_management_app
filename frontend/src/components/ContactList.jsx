import React from "react";

function ContactList({ contacts, fetchContacts }) {
  const deleteContact = async (id) => {
    await fetch(`https://contact-management-backend-6w3y.onrender.com/api/contacts/${id}`, {
      method: "DELETE"
    });
    fetchContacts();
  };

  return (
    <div>
      <h3>Submitted Contacts</h3>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>
                <button onClick={() => deleteContact(c._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
