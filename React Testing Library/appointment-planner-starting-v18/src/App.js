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
  //Store contacts and appointsments as arrays of objects
  //DEBUG!! THIS IS AN EXAMPLE CONTACT!
  const [contacts, setContacts] = useState([
    {
      name: "Tom",
      phone: "0412",
      email: "tomb@bick"
    }
  ]);
  const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  //Function to create a contact objects from provided info
  const addContact = (name, phone, email) => {
    alert(`Creating new contact: ${name}, ${phone} and ${email}`);
    //Create a new contact object using the provided info
    var newContact = {
      name: name,
      phoneNo: phone,
      email: email
    };

    //Create a copy of the contacts array, then push the new contact to said array and update the state to reflect this
    //ERROR!! prevState.contacts is undefined! This leads to .concat() failing, as undefined.concat is nonsense
    setContacts(function(prevState) {
      //alert(prevState.contacts);
      //var contacts = prevState.contacts.concat();
      contacts.push(newContact);
      return {
        contacts: contacts
      }
    });
 };

 //Function to create an appointment objects from provided info
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
