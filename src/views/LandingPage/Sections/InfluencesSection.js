import React from "react";

// @material-ui/icons
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import book1 from "assets/img/books/building-micro-services.jpg";
import book2 from "assets/img/books/monolith-to-microservices.jpg";
import book3 from "assets/img/books/mom-test.jpg";
import book4 from "assets/img/books/ddd.jpg";
import book5 from "assets/img/books/lean-startup.jpg";
import book6 from "assets/img/books/team-topologies.jpg";
import book7 from "assets/img/books/hard-thing.jpg";
import book8 from "assets/img/books/deep-work.jpg";
import book9 from "assets/img/books/dds.jpg";
import book10 from "assets/img/books/handson.jpg";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/influencesStyle.js";
const useStyles = makeStyles(styles);

export default function InfluencesSection() {
  const classes = useStyles();
  const navImageClasses = classNames(
    classes.imgRounded,
    classes.imgGallery,
    classes.imageDefault
  );

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={10} sm={12} md={12}>
            <h2 className={classes.title}>Influential readings</h2>
            <h5 className={classes.description}>
              Here{"'"}s are few books that influenced my work lately that I
              would love to chat about:
            </h5>
            <h5 className={classes.description}> </h5>
            <GridContainer justify="center">
              <GridItem xs={6} sm={4} md={2}>
                <a href="https://www.oreilly.com/library/view/building-microservices/9781491950340/">
                  <img alt="..." src={book1} className={navImageClasses} />
                </a>
              </GridItem>
              <GridItem xs={6} sm={4} md={2}>
                <a href="https://www.oreilly.com/videos/monolith-to-microservices/1492047848/">
                  <img alt="..." src={book2} className={navImageClasses} />
                </a>
              </GridItem>
              <GridItem xs={6} sm={4} md={2}>
                <a href="http://momtestbook.com/">
                  <img alt="..." src={book3} className={navImageClasses} />
                </a>
              </GridItem>
              <GridItem xs={6} sm={4} md={2}>
                <a href="https://www.goodreads.com/book/show/179133.Domain_Driven_Design?ac=1&from_search=true&qid=bDJDWkPyJe&rank=1">
                  <img alt="..." src={book4} className={navImageClasses} />
                </a>
              </GridItem>
              <GridItem xs={6} sm={4} md={2}>
                <a href="http://theleanstartup.com/book">
                  <img alt="..." src={book5} className={navImageClasses} />
                </a>
              </GridItem>
              <GridItem xs={6} sm={4} md={2}>
                <a href="https://teamtopologies.com/book">
                  <img alt="..." src={book6} className={navImageClasses} />
                </a>
              </GridItem>
              <GridItem xs={6} sm={4} md={2}>
                <a href="https://www.goodreads.com/book/show/18176747-the-hard-thing-about-hard-things">
                  <img alt="..." src={book7} className={navImageClasses} />
                </a>
              </GridItem>
              <GridItem xs={6} sm={4} md={2}>
                <a href="https://www.calnewport.com/books/deep-work/">
                  <img alt="..." src={book8} className={navImageClasses} />
                </a>
              </GridItem>
              <GridItem xs={6} sm={4} md={2}>
                <a href="https://www.oreilly.com/library/view/designing-distributed-systems/9781491983638/">
                  <img alt="..." src={book9} className={navImageClasses} />
                </a>
              </GridItem>
              <GridItem xs={6} sm={4} md={2}>
                <a href="https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/">
                  <img alt="..." src={book10} className={navImageClasses} />
                </a>
              </GridItem>
              <GridItem xs={6} sm={4} md={2}>
                <h5 className={classes.bookOther}>
                  Alongside many blogs and stack overflow posts ...
                </h5>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
