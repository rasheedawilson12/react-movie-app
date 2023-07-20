import React, { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState({ searchTerm: "" });

  //  --------> When input value is changed...let's track
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // --------> When submit button is pressed...store value
  const handleSubmit = (event) => {
    event.preventDefault();
    props.movieSearch(formData.searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          onChange={handleChange}
          value={formData.searchTerm}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
