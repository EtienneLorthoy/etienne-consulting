import { title, container } from "assets/jss/material-kit-react.js";

const experiencesStyle = {
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
  projectDescription: {
    color: "#999",
    marginLeft: "12px",
    fontSize: "12px",
    textAlign: "justify",
  },
  projectContainer: {
    display: "flex",
  },
  imageDefault: {
    maxWidth: "140px",
    marginBottom: "12px",
  },
  socialIcons: {
    position: "relative",
    fontSize: "30px !important",
    marginRight: "4px",
    marginTop: "10px",
    color: "#000000",
  },
};

export default experiencesStyle;
