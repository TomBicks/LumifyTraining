import React from "react";

export const ContactForm = ({
  name,
  phone,
  email,
  onChange,
  handleSubmit
}) => {
  //TODO!! "Include a pattern attribute to the phone <input> with a regex that matches the phone locale of your preference"
  //https://regexlib.com/Search.aspx?k=phone&c=-1&m=-1&ps=20
  //NOTE!! Currently using the US Locale, as an example (will change later)
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="name" id="name" name="name" value={name} onChange={onChange}/>
      <label htmlFor="phone">Phone:</label>
      <input type="phone" id="phone" name="phone" value={phone} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" onChange={onChange}/>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={onChange}/>
      <input type="submit" value="Submit"/>
    </form>
  );
};

