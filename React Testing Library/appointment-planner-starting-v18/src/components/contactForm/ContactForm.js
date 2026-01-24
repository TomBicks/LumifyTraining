import React from "react";

export const ContactForm = ({
  name,
  phone,
  email,
  onChange,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
        <input type="name" id="name" name="name" value={name} onChange={onChange}></input>
      <label htmlFor="phone">Phone:</label>
        <input type="number" id="phone" name="phone" value={phone} onChange={onChange}></input>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={onChange}></input>
        <button type="submit">Submit</button>
    </form>
  );
};

