import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

//Generates a new Date, which defaults to the current date and time, breaking it down into month, dat, and year, then constructing a string of standard yyyy-mm-dd format
const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  contact,
  date,
  time,
  errors,
  onChange,
  handleSubmit,
}) => {
  return (
    <form noValidate onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Appointment Title:</label>
        <input required type="title" id="name" name="name" value={name} data-error="You must enter an appointment title." onChange={onChange}/>
        <span className="error-message">{errors.name}</span>
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input required type="date" id="date" name="date" value={date} min={getTodayString()} data-error="You must select a date." onChange={onChange}/>
        <span className="error-message">{errors.date}</span>
      </div>

      <div>
        <label htmlFor="time">Time:</label>
        <input required type="time" id="time" name="time" value={time} data-error="You must enter a time." onChange={onChange}/>
        <span className="error-message">{errors.time}</span>
      </div>

      <div>
        <ContactPicker contacts={contacts} value={contact} name={name} onChange={onChange}/>
        <span className="error-message">{errors.contact}</span>
      </div>

      <input type="submit" value="Submit"/>
    </form>
  );
};
