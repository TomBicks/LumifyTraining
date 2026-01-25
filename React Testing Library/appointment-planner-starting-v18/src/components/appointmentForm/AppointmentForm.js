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
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  onChange,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="title" id="title" name="title" value={title} onChange={onChange}></input>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date" value={date} min={getTodayString()} onChange={onChange}></input>
      <label htmlFor="time">Time:</label>
      <input type="time" id="time" name="time" value={time} onChange={onChange}></input>
      <ContactPicker></ContactPicker>
      <button type="submit">Submit</button>
    </form>
  );
};
