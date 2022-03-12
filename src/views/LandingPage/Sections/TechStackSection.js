import React from "react";

// import imageWWW from "assets/img/world-wide-web.png";
import imageDotnet from "assets/img/dot-net.svg";
import imageCsharp from "assets/img/csharp.svg";
import imageAzure from "assets/img/azure.svg";
import imageKubernetes from "assets/img/kubernetes.svg";
import imageDocker from "assets/img/docker.svg";
import imageAzureDevops from "assets/img/azure-devops.svg";
import imageGithub from "assets/img/github.svg";
import imageJavascript from "assets/img/javascript.svg";
import imageReact from "assets/img/react.svg";
import imageNodejs from "assets/img/nodejs.svg";
import imageMongodb from "assets/img/mongodb.svg";
import imageMonogame from "assets/img/monogame.png";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/techStackStyle.js";
const useStyles = makeStyles(styles);
import infoAreaStyles from "assets/jss/material-kit-react/components/infoStyle.js";
const useInfoAreaStyles = makeStyles(infoAreaStyles);

export default function TechStackSection() {
  const classes = useStyles();
  const infoAreaClasses = useInfoAreaStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <h2 className={classes.title}>What I use</h2>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={6} sm={4} md={2}>
              <div className={infoAreaClasses.infoArea}>
                <img src={imageDotnet} className={classes.imageDefault} />
                <div className={classes.descriptionWrapper}>
                  <h4 className={classes.description}>Dotnet Framework</h4>
                </div>
              </div>
            </GridItem>
            <GridItem xs={6} sm={4} md={2}>
              <div className={infoAreaClasses.infoArea}>
                <img src={imageCsharp} className={classes.imageDefault} />
                <div className={classes.descriptionWrapper}>
                  <h4 className={classes.description}>C Sharp</h4>
                </div>
              </div>
            </GridItem>
            <GridItem xs={6} sm={4} md={2}>
              <div className={infoAreaClasses.infoArea}>
                <img src={imageAzure} className={classes.imageDefault} />
                <div className={classes.descriptionWrapper}>
                  <h4 className={classes.description}>Microsoft Azure</h4>
                </div>
              </div>
            </GridItem>
            <GridItem xs={6} sm={4} md={2}>
              <div className={infoAreaClasses.infoArea}>
                <img src={imageKubernetes} className={classes.imageDefault} />
                <div className={classes.descriptionWrapper}>
                  <h4 className={classes.description}>Kubernetes</h4>
                </div>
              </div>
            </GridItem>
            <GridItem xs={6} sm={4} md={2}>
              <div className={infoAreaClasses.infoArea}>
                <img src={imageDocker} className={classes.imageDefault} />
                <div className={classes.descriptionWrapper}>
                  <h4 className={classes.description}>Docker</h4>
                </div>
              </div>
            </GridItem>
            <GridItem xs={6} sm={4} md={2}>
              <div className={infoAreaClasses.infoArea}>
                <img src={imageAzureDevops} className={classes.imageDefault} />
                <div className={classes.descriptionWrapper}>
                  <h4 className={classes.description}>Azure DevOps</h4>
                </div>
              </div>
            </GridItem>
            <GridItem xs={6} sm={4} md={2}>
              <div className={infoAreaClasses.infoArea}>
                <img src={imageGithub} className={classes.imageDefault} />
                <div className={classes.descriptionWrapper}>
                  <h4 className={classes.description}>Github</h4>
                </div>
              </div>
            </GridItem>
            <GridItem xs={6} sm={4} md={2}>
              <div className={infoAreaClasses.infoArea}>
                <img src={imageJavascript} className={classes.imageDefault} />
                <div className={classes.descriptionWrapper}>
                  <h4 className={classes.description}>Javascript</h4>
                </div>
              </div>
            </GridItem>
            <GridItem xs={6} sm={4} md={2}>
              <div className={infoAreaClasses.infoArea}>
                <img src={imageReact} className={classes.imageDefault} />
                <div className={classes.descriptionWrapper}>
                  <h4 className={classes.description}>React</h4>
                </div>
              </div>
            </GridItem>
            <GridItem xs={6} sm={4} md={2}>
              <div className={infoAreaClasses.infoArea}>
                <img src={imageNodejs} className={classes.imageDefault} />
                <div className={classes.descriptionWrapper}>
                  <h4 className={classes.description}>Node.js</h4>
                </div>
              </div>
            </GridItem>
            <GridItem xs={6} sm={4} md={2}>
              <div className={infoAreaClasses.infoArea}>
                <img src={imageMongodb} className={classes.imageDefault} />
                <div className={classes.descriptionWrapper}>
                  <h4 className={classes.description}>MongoDB/Atlas</h4>
                </div>
              </div>
            </GridItem>
            <GridItem xs={6} sm={4} md={2}>
              <div className={infoAreaClasses.infoArea}>
                <img src={imageMonogame} className={classes.imageDefault} />
                <div className={classes.descriptionWrapper}>
                  <h4 className={classes.description}>Monogame</h4>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
