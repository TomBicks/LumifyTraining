import React from "react";
import { useState } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState({});
  const [appointments, setAppointments] = useState({});

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    //Create a new contact object using the provided info
    var newContact = {
      name: {name},
      phoneNo: {phone},
      email: {email}
    };

    //Create a copy of the contacts array, then push the new contact to said array and update the state to reflect this
    this.setContacts(function(prevState) {
      var contacts = prevState.contacts.concat();
      contacts.push(newContact);
      return {
        contacts: contacts
      }
    });
 };
 const addAppointment = (name, contact, date, time) => {
    //Create a new appointment object using the provided info
    var newAppointment = {
      name: {name},
      contact: {contact},
      date: {date},
      time: {time}
    };

    //Create a copy of the appointments array, then push the new appointment to said array and update the state to reflect this
    this.setAppointments(function(prevState) {
      var appointments = prevState.appointments.concat();
      appointments.push(newAppointment);
      return {
        appointments: appointments
      }
    });
 };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} setAppointments={setAppointments}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
