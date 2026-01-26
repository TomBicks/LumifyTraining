import React from "react";

export const ContactForm = ({
  name,
  phone,
  email,
  onChange,
  handleSubmit,
  errors
}) => {
  return (
    // --- RegEx Patterns ---
    //Name pattern "^[A-Za-z,\-'\s]{2,}$" - must be at least 2 characters, with only letters and special characters ",", "-", "'" and " " allowed
        //Alternative is "^[A-Za-z,\-'\s]{2,} [A-Za-z,\-'\s]{2,}$", which requires two words with a space between, otherwise following the same rules as the above
    //Phone pattern ".{10}" - must be 10 characters exactly
    //Email pattern "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" - must be in the following order: characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a "."
        //Required is also included on each of these, so that an empty value is invalid
    <form noValidate onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input required type="name" id="name" name="name" value={name} data-error={"You must enter a valid name."} pattern="^[A-Za-z,\-'\s]{2,}$"onChange={onChange}/>
        <span className="error-message">{errors.name}</span>
      </div>

      <div>
        <label htmlFor="phone">Phone:</label>
        <input required type="phone" id="phone" name="phone" value={phone} data-error="You must enter a valid phone number." pattern=".{10}" onChange={onChange}/>
        <span className="error-message">{errors.phone}</span>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input required type="email" id="email" name="email" value={email} data-error="You must enter a valid email." pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" onChange={onChange}/>
        <span className="error-message">{errors.email}</span>
      </div>

      <input type="submit" value="Submit"/>
    </form>
  );
};

