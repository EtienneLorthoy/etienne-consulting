import { title } from "assets/jss/material-kit-react.js";
import { container } from "assets/jss/material-kit-react.js";

import image from "assets/img/sign.avif";

const contactMeStyle = {
  section: {
    minHeight: "60vh",
    maxHeight: "1800px",
    overflow: "hidden",
    padding: "70px 0",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    margin: "0",
    border: "0",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    backgroundImage: "url(" + image + ")",
  },
  container,
  form: {
    margin: "0",
  },
  cardBody: {
    width: "auto",
    padding: "0px 80px",
  },
  title: {
    ...title,
    marginBottom: "0px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  description: {
    color: "#3c4858",
    textAlign: "center",
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important",
  },
  inputIconsColor: {
    color: "#495057",
  },
  contactButton: {
    marginRight: "20px",
  },
};

export default contactMeStyle;
