import React, { setState, useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const[contact, setContact] = useState({
    name: 'Tomas',
    phone: '0417',
    email: 'tommy@bick',
  })
  const [duplicateName, setDuplicateName] = useState(false);

  const submitContact = (e) => {
    e.preventDefault();
    //Add contact info and clear data if the contact name is not a duplicate
    alert("submitted!");
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
		//ATTEMPT 1 - SetState
    const inputName = input.target.name;
		var value = input.target.value;
		console.log("input name: " + inputName + ", input value: " + value);
		alert("input name: " + inputName + ", input value: " + value);
		
    /*switch(inputName) {
      case("name"):
        alert("This was a name!")
      default:
        alert("No matches!");
    }*/

    //Set state value based on the name returned from an input
		//setState({[inputName]: value});
    //setName(input.target.value);*/

    //ATTEMPT 2 - Contact Object
    //var name = input.target.name;
    //alert(name);
    setContact({
      name: name
    });
    setName(name);
	};

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name} 
          phone={phone}
          email={email} 
          onChange={handleInputChange}
          handleSubmit={submitContact}
        ></ContactForm>
        <hr />
        <hr />
        <label htmlFor="name">Other Name:</label>
        <input type="text" id="name" name="name" value={contact.name} onChange={handleInputChange}></input>
        <label htmlFor="phone">Other Phone:</label>
        <input type="number" id="phone" name="phone" value={contact.phone}onChange={handleInputChange}></input>
        <label htmlFor="email">Other Email:</label>
        <input type="text" id="email" name="email" value={contact.email}onChange={handleInputChange}></input>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts}></TileList>
      </section>
    </div>
  );
};
