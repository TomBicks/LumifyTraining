import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const[appointment, setAppointment] = useState({});

  const submitAppointment = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    
    //Don't submit if no contact chosen
  };

  //Grab the name and value of the input event, then use that to determine which field of contact to fill in
  const handleInputChange = (input) => {
    /*const inputName = input.target.name;
		var value = input.target.value;
		console.log("input name: " + inputName + ", input value: " + value);

    //Spread the contact to create a soft-copy, then insert the specified key-value pair, then update the contact state
    setContact({
      ...contact,
      [inputName]: value
    });*/
	};

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={props.contacts}
          name={''}
          contact={''}
          data={''}
          time={''}
          onChange={handleInputChange}
          handleSubmit={submitAppointment}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};