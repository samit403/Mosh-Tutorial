import React, { Component } from "react";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const errors = {};
    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required!";
      if (value.length < 3 || value.length > 30)
        return "Username must be between 3 and 30 characters!";
      if (value.indexOf("@") === -1 || value.slice(-1) === ".")
        return "Username must be an email";
    }

    if (name === "password") {
      if (value.trim() === "") return "Password is required!";
      if (value.length < 5)
        return "Password must be between atleast 5 characters long!";
    }
    if (name === "fullName") {
      if (value.trim() === "") return "Full Name is required!";
    }
    if (name === "title") {
      if (value.trim() === "") return "Title is required!";
    }
  };

  handleSubmit = e => {
    console.log(e);
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    // console.log(input);
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton = label => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
