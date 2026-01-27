import React from "react";
import { useState } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

//Start using 'npm start'
function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  //Store contacts and appointsments as arrays of objects
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  //Function to create a contact objects from provided info
  const addContact = (name, phone, email) => {
    //alert(`Creating new contact: ${name}, ${phone} and ${email}`);
    console.log(`Creating new contact: ${name}, ${phone} and ${email}`);
    console.log(contacts);
    //Create a new contact object using the provided info
    var newContact = {
      name: name,
      phone: phone,
      email: email
    };
    console.log(newContact);

    //Create a copy of the contacts array, then push the new contact to said array and update the state to reflect this
    //NOTE!! *Rememeber*, contacts is an *array* of objects, so setContacts needs to have an array inside it (setContacts([]<--))
    setContacts([
      ...contacts,
      newContact
    ]);
    console.log("Finished adding contact")
 };

 //Function to create an appointment objects from provided info
 const addAppointment = (name, date, time, contact) => {
    console.log(`Creating new appointment: ${name}, ${date}, ${time} and ${contact}`);
    //Create a new appointment object using the provided info
    var newAppointment = {
      name: name,
      contact: contact,
      date: date,
      time: time
    };

    //Create a copy of the appointments array, then push the new appointment to said array and update the state to reflect this
    setAppointments([
      ...appointments,
      newAppointment
    ]);
 };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
