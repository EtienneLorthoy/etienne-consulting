import React from "react";

import imageWWW from "assets/img/world-wide-web.png";
import imageSaas from "assets/img/saas.png";
import imageAnalysis from "assets/img/analytics.png";
import imageServices from "assets/img/services.png";
import imageDevOps from "assets/img/devops.png";
import imageMore from "assets/img/more.png";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/skillsStyle.js";
const useStyles = makeStyles(styles);
import infoAreaStyles from "assets/jss/material-kit-react/components/infoStyle.js";
const useInfoAreaStyles = makeStyles(infoAreaStyles);

export default function SkillsSection() {
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
                <img className={classes.imageDefault} src={imageWWW} />
                <div className={infoAreaClasses.descriptionWrapper}>
                  <h4 className={infoAreaClasses.title}>Websites and APIs</h4>
                  <p className={infoAreaClasses.description}>
                    The backbones of the internet. I can help you build your
                    online presence. Starting with classical web pages like this
                    one with React/Material-UI. Complete REST APIs around your
                    business with ASP.NET domains for your already existing
                    applications or other types of consumers.
                  </p>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <div className={infoAreaClasses.infoArea}>
                <img className={classes.imageDefault} src={imageSaas} />
                <div className={infoAreaClasses.descriptionWrapper}>
                  <h4 className={infoAreaClasses.title}>
                    SAAS Infrastructures
                  </h4>
                  <p className={infoAreaClasses.description}>
                    Cloud computing is mainly present in all we do. I can help
                    to bootstrap/build/manage your hosting in the cloud. Ranging
                    from simple cases like a website and APIs to more complex
                    topics like background processing or monitoring systems.
                  </p>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <div className={infoAreaClasses.infoArea}>
                <img className={classes.imageDefault} src={imageAnalysis} />
                <div className={infoAreaClasses.descriptionWrapper}>
                  <h4 className={infoAreaClasses.title}>
                    Infrastructure Efficiency Analysis
                  </h4>
                  <p className={infoAreaClasses.description}>
                    Sometimes it can be good to look back at what we have.
                    Analyzing the existing to find ways to improve efficiency,
                    lower cost, lower carbon footprint, and gain control back on
                    your infrastructure. I can observe your use case and its
                    technical solution to provide insights and recommendations.
                  </p>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <div className={infoAreaClasses.infoArea}>
                <img className={classes.imageDefault} src={imageServices} />
                <div className={infoAreaClasses.descriptionWrapper}>
                  <h4 className={infoAreaClasses.title}>
                    Micro-Services Architecture
                  </h4>
                  <p className={infoAreaClasses.description}>
                    Is it a good time to pass this step to achieve business
                    scaling? I can help to assess the pros and cons of this kind
                    of team endeavor. Thinking from purely technical issues like
                    Docker/Kubernetes to organizational elements and security
                    concerns.
                  </p>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <div className={infoAreaClasses.infoArea}>
                <img className={classes.imageDefault} src={imageDevOps} />
                <div className={infoAreaClasses.descriptionWrapper}>
                  <h4 className={infoAreaClasses.title}>
                    DevOps and SDLC lifecycle
                  </h4>
                  <p className={infoAreaClasses.description}>
                    This is a crucial part to augment your ability to readjust
                    your product and allow it to evolve fast. Leveraging the
                    Azure DevOps platform, I can help with your development,
                    deployment, monitoring, security process. Analyzing and
                    evaluating what new technologies you could benefit from.
                  </p>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <div className={infoAreaClasses.infoArea}>
                <img className={classes.imageDefault} src={imageMore} />
                <div className={infoAreaClasses.descriptionWrapper}>
                  <h4 className={infoAreaClasses.title}>Many more</h4>
                  <p className={infoAreaClasses.description}>
                    Heavy background processings, data pipelines, 3D graphics,
                    Machine Learning, or even pure Research and Development, I
                    touched a lot of domains professionally or just for fun. If
                    you have specific challenging developments, reach out to me.
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
