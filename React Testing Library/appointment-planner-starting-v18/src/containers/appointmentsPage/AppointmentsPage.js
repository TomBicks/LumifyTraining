import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = () => {
  /*
  Define state variables for 
  appointment info
  */

  const submitAppointment = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          name={''}
          contact={''}
          data={''}
          time={''}
          handleSubmit={submitAppointment}
        ></AppointmentForm>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};