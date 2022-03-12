import { title } from "assets/jss/material-kit-react.js";
import { container } from "assets/jss/material-kit-react.js";

import { grayColor } from "assets/jss/material-kit-react.js";

const techStackStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  container,
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "0px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#999",
    marginTop: "10px",
    fontSize: "12px",
  },
  imageDefault: {
    marginTop: "22px",
    height: "80px",
    maxWidth: "80px",
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: "hidden",
  },
};

export default techStackStyle;
