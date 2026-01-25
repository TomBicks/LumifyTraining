import React, { setState, useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const[contact, setContact] = useState({
    name: 'Tomas',
    phone: '0417',
    email: 'tommy@bick',
  });
  const [duplicateName, setDuplicateName] = useState(false);
  const [errors, setErrors] = useState({});

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  //I personally think checking every change is too much, but at least this works; personally I'd make it only after attempting to submit
  useEffect(() => {
    const array = contacts;
    //if(array !== undefined) //?????? CHECK IF BETTER WAY TO DO THIS TOO!
    //alert(`1st Contact's name is ${contacts[0].name}`)
    //Make sure the check is case insensitive, so that capitals don't allow for duplicate contacts
    const duplicate = contacts.find((existingContact) => existingContact.name.toLowerCase() == contact.name.toLowerCase());
    alert(`duplicate is ${duplicate}`);

    //Update state whether name already exists in contacts or not
    setDuplicateName(duplicate === undefined ? false : true);
    alert(`duplicateName is ${duplicateName}`);

    //TODO!! NEED TO SHOW THE USER IMMEDIATELY THAT THE NAME IS DUPLICATE AND TO CHANGE IT; ALERT DOESN'T WORK HOWEVER!
  }, [contact.name]);
  
  //Handle submission and adding the contact; prevent submission if fields are missing, or if the name already exists in our contacts
  const submitContact = (e) => {
    e.preventDefault();

    //Start as valid = true, because if any *one* thing goes wrong, it's no longer valid, as opposed to *everything* going right to be valid
    let isValid = true;
    let errs = {};

    console.log("Attemtping contact submission...");
    console.log(`e.target = ${e.target}`);
    console.log(`[...e.target] = ${[...e.target]}`);
    [...e.target].forEach((element) => {
      //console.log(`element = ${element}`);
      console.log(`element.validity.valid = ${element.validity.valid}`);
      console.log(`element.dataset.error = ${element.dataset.error}`);
      console.log(`element.type = ${element.type}`);

      if(!element.validity.valid) {
        console.log(`Input of type ${element.type} and name ${element.name} is not valid`);
        //console.log(`Errors before = ${errors}`);
        //errors = {...errors, ...element.dataset.error}
        //console.log(`Errors after = ${errors}`);
        isValid = false;

        console.log(`Setting error for ${element.name} as ${element.dataset.error}`)
        errs = ({
          ...errs,
          [element.name]: element.dataset.error
        });
        /*setErrors({
          ...errors,
          [element.name]: element.dataset.error
        });*/
        setErrors(errs);
      }

      //Exclude the submit input button
      if(element.type === "submit") {
        console.log(`Element ${element} is the submit button`);
      }
    })

    alert(errors);

    //TODO!! GO OVER THIS SUBMISSION TO CHECK BEST WAY TO HAVE A SUCCESSFUL OR FAILED SUBMISSION, AS WELL AS HOW BEST TO CLEAR THE FIELDS

    //SHOULD I BE GETTING THE CONTACT INFO FROM 'e'???

    //Add contact info and clear data if the contact name is not a duplicate
    if(duplicateName) {
      alert("This name already exists in our contacts! Please change it.");
      isValid = false;
    }

    if(isValid) {
      alert("Contact added!");

      //Create new contact (spread so it can fit the addContact properties)
      addContact(contact.name, contact.phone, contact.email);

      //On a successful submission, clear the form
      //ERROR!! This appears to cause the useEffect to produce an error, as contacts becomes undefined!
      //Judging by FormValidation task, this looks right; remove note later
      setContact({
        name: '',
        phone: '',
        email: '',
      });
    } else {
      console.log("submit failed!");
    }
  };

  //Grab the name and value of the input event, then use that to determine which field of contact to fill in
  const handleInputChange = (input) => {
    const inputName = input.target.name;
		var value = input.target.value;
		console.log("input name: " + inputName + ", input value: " + value);

    //Spread the contact to create a soft-copy, then insert the specified key-value pair, then update the contact state
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
          errors={errors}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objectData={contacts}/>
      </section>
    </div>
  );
};
