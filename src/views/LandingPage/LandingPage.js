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

import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import SkillsSection from "./Sections/SkillsSection.js";
import ContactMeSection from "./Sections/ContactMeSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

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
              <h4>
                A passionate Software Engineer going through years of experience
                in building with various technological stacks. From broadly
                adopted ones like the large .NET ecosystem or Kubernetes to
                specifics/curious ones like VRML or .NET Xbox 360 SDK.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SkillsSection />
        <ContactMeSection />
      </div>
      <Footer />
    </div>
  );
}
