import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import xp1 from "assets/img/xps/vitrine.jpg";
import xp2 from "assets/img/xps/microservice.jpg";
import xp3 from "assets/img/xps/toutv-xbox.jpg";
import xp4 from "assets/img/xps/countlessapps.jpg";
import xp5 from "assets/img/xps/perf-whitepaper.jpg";
import xp6 from "assets/img/xps/leelh.jpg";

// style
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/experiencesStyle.js";
const useStyles = makeStyles(styles);

export default function ExperiencesSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={10} sm={12} md={12}>
            <h2 className={classes.title}>Past projects</h2>
            <h5 className={classes.description}>
              Here{"'"}s are few projects that I was lucky to work on:
            </h5>
            <h5 className={classes.description}> </h5>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "Microservices Architecture - 2020",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={4} md={4}>
                            <img className={classes.imageDefault} src={xp2} />
                          </GridItem>
                          <GridItem xs={12} sm={8} md={8}>
                            <p className={classes.projectDescription}>
                              How Officevibe could benefit from the microservice
                              philosophy using tools like DDD, Kubernetes, .net
                              core, and Azure DevOps while being compatible with
                              our Officevibe legacy code, 7 years old at the
                              time? After a year and a half of work, 50% of the
                              100+ deployments/week were done on microservices.
                              It&apos;s been one of my proudest and most
                              impactful projects. Still to this day Officevibe
                              use this microservices over 90% of the time.
                            </p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "Ecommerce Performance Whitepaper - 2015",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={4} md={4}>
                            <img className={classes.imageDefault} src={xp5} />
                          </GridItem>
                          <GridItem xs={12} sm={8} md={8}>
                            <p className={classes.projectDescription}>
                              Orckestra&apos;s product, Overture was an
                              Ecommerce platform with lots of features to be
                              competitive. One of its sale points was its
                              ability to quantify the max users count with
                              acceptable response time on fixed catalog size and
                              its load capacity at cloud infrastructure costs.
                              My goal was to respond to that question while
                              documenting my entire test process in a
                              methodology report and an eight-page performance
                              report whitepaper.
                            </p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "Tou.tv Xbox 360 - 2011",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={4} md={4}>
                            <img className={classes.imageDefault} src={xp3} />
                          </GridItem>
                          <GridItem xs={12} sm={8} md={8}>
                            <p className={classes.projectDescription}>
                              It was a fun one! And a bit of a stretch as
                              it&apos;s not a usual app to develop because of
                              the platform. It was using .NET & XAML conversion
                              technologies still in the beta phase at the time.
                              Working with memory leaks, Xbox Dev Kit hardware,
                              and the hard-to-get-through Microsoft
                              Certification process were definitively good
                              memories.
                            </p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "Lots of Windows 8/Windows Phone 8 Apps - 2010s",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={4} md={4}>
                            <img className={classes.imageDefault} src={xp4} />
                          </GridItem>
                          <GridItem xs={12} sm={8} md={8}>
                            <p className={classes.projectDescription}>
                              Microsoft was pushing hard to get lots of apps on
                              its store back in 2011. I worked with a team of 6
                              other devs to do as many apps as possible. We used
                              a strongly framework-centric and standardized dev
                              style to achieve this throughput. It was a crazy
                              time!
                              <br />
                              <a href="https://www.linkedin.com/in/etienne-lorthoy/#projects">
                                <i
                                  className={
                                    classes.socialIcons + " fab fa-linkedin"
                                  }
                                />
                              </a>
                            </p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "Leelh Game Engine Development - 2009",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={4} md={4}>
                            <img className={classes.imageDefault} src={xp6} />
                          </GridItem>
                          <GridItem xs={12} sm={8} md={8}>
                            <p className={classes.projectDescription}>
                              Working for a game company was a dream of mine. I
                              was in the game dev engine team of 6. We worked
                              with VRML, javascript and Java Darkstar Framework
                              for a game ambitioned to become an MMORPG. Open
                              sockets from javascript and sending/receiving bits
                              literally as a message to/from a Java Server was
                              something!
                              <br />
                            </p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "This Very Vitrine Website - 2022",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={4} md={4}>
                            <img className={classes.imageDefault} src={xp1} />
                          </GridItem>
                          <GridItem xs={12} sm={8} md={8}>
                            <p className={classes.projectDescription}>
                              This very minimal vitrine website for advertising
                              Freelancing activities build on top of Material
                              Kit React. Outside of my core skills, but I do
                              love test and work with stuff outside my comfort
                              zone.
                              <br />
                              <a href="https://github.com/EtienneLorthoy/etienne-consulting">
                                <i
                                  className={
                                    classes.socialIcons + " fab fa-github"
                                  }
                                />
                              </a>
                            </p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
