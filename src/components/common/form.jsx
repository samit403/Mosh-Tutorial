import React, { Component } from "react";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const errors = {};
    if (this.state.data.username.trim() === "")
      errors.username = "Username is Required!";
    if (this.state.data.password.trim() === "")
      errors.password = "Password is Required!";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required!";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required!";
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
}

export default Form;
