import React from "react";
import PropTypes from "prop-types";

import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/registerMailStyle";
const useStyles = makeStyles(styles);

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "newsletter", ...this.state }),
    })
      .then(() => alert("Thanks for registering!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { classes } = this.props;
    const { email } = this.state;
    const handleChangeEmail = this.handleChange;
    return (
      <form
        className={classes.form}
        onSubmit={this.handleSubmit}
        data-netlify="true"
        name="newsletter"
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <CustomInput
          labelText="Your Email"
          id="email"
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            value: email,
            onChange: handleChangeEmail,
          }}
        />
        <Button type="submit" color="danger" fullWidth>
          Get updated
        </Button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(ContactForm);
