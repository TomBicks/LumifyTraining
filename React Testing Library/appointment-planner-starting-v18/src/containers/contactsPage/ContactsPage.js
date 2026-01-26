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
    phone: '0417111111',
    email: 'tommy@bick.com',
  });
  const [duplicateName, setDuplicateName] = useState(false);
  const [errors, setErrors] = useState({});

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  //I personally think checking every change is too much, but at least this works; personally I'd make it only after attempting to submit
  useEffect(() => {
    //Make sure the check is case insensitive, so that capitals don't allow for duplicate contacts
    const duplicate = contacts.some((existingContact) => existingContact.name.toLowerCase() == contact.name.toLowerCase());
    
    //Update state whether name already exists in contacts or not
    setDuplicateName(duplicate);

    //NOTE!! This is one of two ways I've found to check for duplicate names on an input change. We were asked to use hooks for this example however, so this one is the one we'll go with.
    //Check whether a duplicate name has been found and, if so, update the errors state to reflect our custom error message
    if(duplicate) {
      setErrors({
        ...errors,
        name: "This name already exists in our contacts! Please enter a different name."
      })
    }
  }, [contact.name]);
  
  //Handle submission and adding the contact; prevent submission if fields are missing, or if the name already exists in our contacts
  const submitContact = (e) => {
    e.preventDefault();

    //Start as valid = true, because if any *one* thing goes wrong, it's no longer valid, as opposed to *everything* going right to be valid
    let isValid = true;
    let errs = {};

    //Use spread syntax so we can handle each input element individually (including the submit button input technically)
    [...e.target].forEach((input) => {

      //Exclude the submit input button
      if(input.type === "submit") {
        console.log(`Element ${input} is the submit button`);
        return; //Skips this iteration of the for loop; nothing to do for submit button
      }

      //If the input element in invalid, set isValid to false and provide any error messages to the errors state for displaying
      if(!input.validity.valid) {
        isValid = false;

        //NOTE!! Because state setters aren't instant, we need to bundle up all the errors into a single object before sending that off to the errors state.
        //This is unlike the handleInputChange where, after each input, it has time to update the state between renders
        errs = ({
          ...errs,
          [input.name]: input.dataset.error
        });
      }
    })

    //If the entered contact name already exists in the system, display the custom error message and mark as invalid
    //Because submit can only happen after a render, we're safe to just check duplicateName, rather than maing our own checks
    if(duplicateName) {
      alert("This name already exists in our contacts! Please change it.");
      errs = ({
        ...errs,
        name: "This name already exists in our contacts! Please enter a different name."
      })
      isValid = false;
    }

    //After regular and custom error messages have been bundled up, update the errors state to reflect them
    setErrors(errs);

    //Add contact info and clear data if the contact name is not a duplicate
    if(isValid) {
      console.log("submit succeeded!");
      alert("Contact added!");

      //Create new contact (destructure so it can fit the addContact properties)
      addContact(contact.name, contact.phone, contact.email);

      //On a successful submission, clear the form
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
    const inputName = input.target.name; //The name value of the input element
    let isValid = input.target.validity.valid; //Whether the input's value is valid
    const errMes = input.target.dataset.error; //The error message in the input element, to be displayed in an error
		const value = input.target.value; //The value of the input element
		console.log("input name: " + inputName + ", input value: " + value);
    
    //Set the error messages on input change (You'd remove this if statement block if you wanted that functionality gone) (not including the handling in useEffect hook)
    if(!isValid) {
      //Set error message from input element to state, if input value is invalid
      console.log(`Input ${inputName} is invalid!`);
      console.log(`Setting error message: ${errMes}`);
      setErrors({
        ...errors,
        [inputName]: errMes
      })
    } else {
      //Remove error message from state, if input value is valid
      console.log(`Input ${inputName} is valid!`);
      setErrors({
        ...errors,
        [inputName]: ""
      })
    }

    //NOTE!! This is one of two ways I've found to check for duplicate names on an input change. We were asked to use hooks for this example however, so we won't be using this one, hence it's commented out.
    //Check for duplicate names, a custom error (we do this after the usual error message adding above, as otherwise this custom message would get overwritten)
    /*if(inputName == "name") {
      //We check duplicate here, again, against the current name, because useEffect will only update the value for the next render, meaning we need this information live, here
      const duplicate = contacts.some((existingContact) => existingContact.name.toLowerCase() == value.toLowerCase());
      console.log(`Duplicate name in input = ${duplicate}`);

      //Because a contact already in the system must therefore be a valid name, we can simply set errors.name to the message, without needing to worry about multi-line strings
      //NOTE!! Using CSS, it is still possible to append this to our error string, and is useable in other scenarios
      if(duplicate) {
        const duplicateNameErrMes = "This name already exists in our contacts! Please enter a different name."
        console.log(duplicateNameErrMes);
        console.log(errors.name);

        isValid = false;

        setErrors({
          ...errors,
          [inputName]: duplicateNameErrMes
        })
      }
      console.log(errors.name);
    }*/

    //Spread the contact to create a soft-copy, then insert the specified key-value pair, then update the contact state
    console.log(contact);
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
          errors={errors}
          onChange={handleInputChange}
          handleSubmit={submitContact}
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
