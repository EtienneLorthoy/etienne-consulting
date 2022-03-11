import { title } from "assets/jss/material-kit-react.js";
import { container } from "assets/jss/material-kit-react.js";

const skillsStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  container,
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#999",
  },
  imageDefault: {
    marginTop: "22px",
    maxWidth: "80px",
  },
};

export default skillsStyle;
