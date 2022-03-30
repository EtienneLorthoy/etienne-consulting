import React from "react";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/contactMeStyle";
const useStyles = makeStyles(styles);

export default function ContactMeSection() {
  const classes = useStyles();

  return (
    <div id="contactme" className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <Card>
              <input type="hidden" name="form-name" value="newsletter" />
              <CardBody className={classes.cardBody}>
                <h2 className={classes.title}>Contact me</h2>
                <h4 className={classes.description}>
                  <b>Got a project, need help or wanna take a coffee? </b>
                  Let&apos;s get in touch!
                </h4>
              </CardBody>
              <CardFooter className={classes.cardFooter}>
                <Button
                  className={classes.contactButton}
                  color="primary"
                  href="https://www.linkedin.com/in/etienne-lorthoy"
                >
                  LinkedIn
                </Button>
                <Button
                  className={classes.contactButton}
                  color="primary"
                  target="_blank"
                  href="mailto:contact@etiennelorthoy.com"
                >
                  Mail
                </Button>
                <Button
                  className={classes.contactButton}
                  href="/Resume-EtienneLorthoy2022.pdf"
                  color="primary"
                >
                  PDF Resume
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
