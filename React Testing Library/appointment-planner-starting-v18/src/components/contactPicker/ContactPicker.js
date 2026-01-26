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
          //Returns a list of options for each contact in the contacts list; option selected's value is the entire client, not just their name 
          //(though worried about practical application of this, for security purposes)
          contacts.map((cont) => <option key={cont.name} value={cont}>{cont.name}</option>)
        }
      </select>
    </div>
  );
};
