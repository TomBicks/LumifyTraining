import React, { setState, useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [duplicateName, setDuplicateName] = useState(false);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //Add contact info and clear data if the contact name is not a duplicate
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const array = props.contacts;
    //const nameInlist = array.includes(name);
    //alert(`Duplicate is ${nameInlist}`);
    alert(`Array is ${array}`);
  }, [name]);

  const handleChange = () => {
    //Check for duplicates whenever the name in the form changes and indicate the name is a duplicate

  };

  const handleInputChange = (input) => {
		const name = input.target.name;
		var value = input.target.value;
		console.log("input name: " + name + ", input value: " + value);
		
		//Set state value based on the name returned from an input
		setState({[name]: value});
	};

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm>
          name={name} 
          setName={setName} 
          phone={phone}
          setPhone={setPhone}
          email={email} 
          setEmail={setEmail} 
          handleSubmit={handleSubmit}
        </ContactForm>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleInputChange}></input>
        <label htmlFor="phone">Phone:</label>
        <input type="number" id="phone" name="phone" value={phone}></input>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={email}></input>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts}></TileList>
      </section>
    </div>
  );
};
