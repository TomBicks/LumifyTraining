import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [appointment, setAppointment] = useState({
    name: "test",
    date: '2026-01-30',
    time: '01:59',
    contact: "Tom"
  });
  const [errors, setErrors] = useState({});

  //Handle submission and adding the appointment; prevent submission if fields are missing
  const submitAppointment = (e) => {
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

    //After regular and custom error messages have been bundled up, update the errors state to reflect them
    setErrors(errs);

    //Add appointment info and clear data
    if(isValid) {
      console.log("submit succeeded!");
      alert("Appointment added!");

      //Create new appointment (destructure so it can fit the addAppointment properties)
      addAppointment(appointment.name, appointment.date, appointment.time, appointment.contact);

      //On a successful submission, clear the form
      setAppointment({
        name: '',
        date: '',
        time: '',
        contact: ''
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

    //Spread the appointment to create a soft-copy, then insert the specified key-value pair, then update the appointment state
    console.log(appointment);
    setAppointment({
      ...appointment,
      [inputName]: value
    });
	};

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          name={appointment.name}
          contact={appointment.contact}
          date={appointment.date}
          time={appointment.time}
          errors={errors}
          onChange={handleInputChange}
          handleSubmit={submitAppointment}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {/* TODO!! EXTRA HOMEWORK!! Make it that the TileLists also display any appointments associated with the contact, under a clickable revealed component*/}
        <TileList objectData={appointments}/>
      </section>
    </div>
  );
};