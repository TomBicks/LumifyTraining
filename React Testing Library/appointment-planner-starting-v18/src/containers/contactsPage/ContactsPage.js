import React, { setState, useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({
  contacts,
  addContact
}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
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
  //I personally think checking every change is too much, but at least this works; personally I'd make it only after attempting to submit
  useEffect(() => {
    const array = contacts;
    //Make sure the check is case insensitive, so that capitals don't allow for duplicate contacts
    const duplicate = contacts.find((existingContact) => existingContact.name.toLowerCase() == contact.name.toLowerCase());

    //Update state whether name already exists in contacts or not
    setDuplicateName(duplicate === undefined ? false : true);

    //NOTE!! This alert technically only runs the check after a match is found, due to it not having changed before the alert is passed over
    if(duplicateName) {
      alert(`Check for duplicate name is ${duplicateName}`);
    }
  }, [contact.name]);
  

  //Grab the name and value of the input event, then use that to determine which field of contact to fill in
  const handleInputChange = (input) => {
    const inputName = input.target.name;
		var value = input.target.value;
		console.log("input name: " + inputName + ", input value: " + value);
		//alert("input name: " + inputName + ", input value: " + value);

    setContact({
      ...contact,
      [inputName]: value
    });
	};

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <h4>Duplicate Name = {duplicateName ? "true" : "false"}</h4> 
        <ContactForm 
          name={contact.name} 
          phone={contact.phone}
          email={contact.email} 
          onChange={handleInputChange}
          handleSubmit={submitContact}
        ></ContactForm>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts}></TileList>
      </section>
    </div>
  );
};
