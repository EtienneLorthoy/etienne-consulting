import { title } from "assets/jss/material-kit-react.js";
import { container } from "assets/jss/material-kit-react.js";

const influencesStyle = {
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
  },
  bookOther: {
    color: "#999",
    marginTop: "22px",
    maxWidth: "140px",
  },
  imageDefault: {
    marginTop: "22px",
    maxWidth: "140px",
  },
};

export default influencesStyle;
