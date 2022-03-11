import { title } from "assets/jss/material-kit-react.js";
import { container } from "assets/jss/material-kit-react.js";

const productStyle = {
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
  imageWWW: {
    marginTop: "22px",
    maxWidth: "80px",
  },
  imageSaas: {
    marginTop: "22px",
    maxWidth: "80px",
  },
  imageAnalysis: {
    marginTop: "22px",
    maxWidth: "80px",
  },
};

export default productStyle;
