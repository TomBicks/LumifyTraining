import React from "react";

export const ContactPicker = ({
  contacts,
  onChange,
  value,
  name
}) => {
  return (
    <div>
      <h4>This is a Contact Picker Element</h4>
      <select value={value} defaultValue="nothing" name={name} onChange={onChange}>
        <option key="nothing" value="">No Contact Selected</option>
        {
          //Returns a list of options for each contact in the contacts list; option selected's value is the contact's name only (so we don't need to send across all their details to simply display who the appointment is for)
          contacts.map((cont) => <option key={cont.name} value={cont.name}>{cont.name}</option>)
        }
      </select>
    </div>
  );
};
