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
      <select value={value} name={name} onChange={onChange}>
        <option value="">No Contact Selected</option>
        {
          //TODO!! Iteratively add option elements using the contact names from the array passed in via props
          //contacts.map((cont) => <option>{cont.name}</option>)
        }
      </select>
    </div>
  );
};
