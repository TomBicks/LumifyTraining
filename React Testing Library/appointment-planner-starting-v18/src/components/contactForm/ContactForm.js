import React from "react";

export const ContactForm = ({
  name,
  phone,
  email,
  onChange,
  handleSubmit,
  errors
}) => {
  //TODO!! "Include a pattern attribute to the phone <input> with a regex that matches the phone locale of your preference"
  //https://regexlib.com/Search.aspx?k=phone&c=-1&m=-1&ps=20
  //NOTE!! Currently using the US Locale, as an example (will change later)
  return (
    //Phone pattern - must be 10 characters exactly
    //Email pattern - must be in the following order: characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a "."
    <form noValidate onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="name" id="name" name="name" value={name} data-error="You must enter a name." onChange={onChange}/>
        <span className="error-message">{errors.name}</span>
      </div>

      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="phone" id="phone" name="phone" value={phone} data-error="You must enter a valid phone number." pattern=".{10}" onChange={onChange}/>
        <span className="error-message">{errors.phone}</span>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} data-error="You must enter a valid email." pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" onChange={onChange}/>
        <span className="error-message">{errors.email}</span>
      </div>

      <input type="submit" value="Submit"/>
    </form>
  );
};

