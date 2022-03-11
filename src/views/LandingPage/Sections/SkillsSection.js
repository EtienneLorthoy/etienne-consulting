import React from "react";

import imageWWW from "assets/img/world-wide-web.png";
import imageSaas from "assets/img/saas.png";
import imageAnalysis from "assets/img/analytics.png";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
import infoAreaStyles from "assets/jss/material-kit-react/components/infoStyle.js";
const useInfoAreaStyles = makeStyles(infoAreaStyles);

export default function ProductSection() {
  const classes = useStyles();
  const infoAreaClasses = useInfoAreaStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <h2 className={classes.title}>What I do</h2>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <div className={infoAreaClasses.infoArea}>
                <img className={classes.imageWWW} src={imageWWW} />
                <div className={infoAreaClasses.descriptionWrapper}>
                  <h4 className={infoAreaClasses.title}>Websites and APIs</h4>
                  <p className={infoAreaClasses.description}>
                    Want a whole day? Just two hours? A 1-hour meeting just got
                    canceled? Live Planner following your availabilities, making
                    the best out of the time you have. You just had an urgency,
                    interruption, or just a break? Just regenerate a new plan on
                    demand.
                  </p>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <div className={infoAreaClasses.infoArea}>
                <img className={classes.imageSaas} src={imageSaas} />
                <div className={infoAreaClasses.descriptionWrapper}>
                  <h4 className={infoAreaClasses.title}>
                    SAAS Infrastructures
                  </h4>
                  <p className={infoAreaClasses.description}>
                    Big tasks are not helping you to achieve them. Discovering a
                    new technology, working on a dossier not well defined yet,
                    learning about a subject: none of these tasks make sense in
                    a backlog; you only need timed sessions to work on them.
                  </p>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <div className={infoAreaClasses.infoArea}>
                <img className={classes.imageAnalysis} src={imageAnalysis} />
                <div className={infoAreaClasses.descriptionWrapper}>
                  <h4 className={infoAreaClasses.title}>
                    Infrastructure Cost & Efficiency Analysis
                  </h4>
                  <p className={infoAreaClasses.description}>
                    Don{"'"}t bother managing time buckets for your projects;
                    Live Planner ensures you spend time on each for the time
                    being. Just enter the task and forget it.
                  </p>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
