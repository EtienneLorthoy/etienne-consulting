import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import SkillsSection from "./Sections/SkillsSection.js";
import TechStackSection from "./Sections/TechStackSection.js";
import InfluencesSection from "./Sections/InfluencesSection.js";
import ContactMeSection from "./Sections/ContactMeSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

function scrollIntoMe() {
  let e = document.getElementById("contactme");
  e.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        rightLinks={<HeaderLinks />}
        brand="Etienne Lorthoy"
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        filter
        className={classes.parallax}
        image={require("assets/img/landing-bg.avif").default}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={11} sm={12} md={12}>
              <h1 className={classes.title}>Hi, I&apos;m Etienne 👋</h1>
              <h6>
                - Freelancer, eternal learner, AI/Robotic/Aerospace enthusiast.
              </h6>
              <h2>Developing and modernizing your IT infrastructure</h2>
              <h4>
                Helping you build back-ends, data-processing and messaging,
                moving on-premise to cloud, bringing DevOps/SDLC practices into
                your development process.
              </h4>
              <br />
              <Button
                className={classes.contactButton}
                color="primary"
                onClick={scrollIntoMe}
              >
                Contact Me
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SkillsSection />
        <TechStackSection />
        <InfluencesSection />
        <ContactMeSection />
      </div>
      <Footer />
    </div>
  );
}
