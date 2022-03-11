import React from "react";

// @material-ui/icons
import ImportContactsIcon from "@material-ui/icons/ImportContacts";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/skillsStyle.js";
const useStyles = makeStyles(styles);

export default function InfluencesSections() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Influences</h2>
            <h5 className={classes.description}>
              Here{"'"}s are some of our influences that motivated Live Planner
              :
            </h5>
            <h5 className={classes.description}> </h5>
            <CustomTabs
              headerColor="primary"
              tabs={[
                {
                  tabName: "Deep Work",
                  tabIcon: ImportContactsIcon,
                  tabContent: (
                    <p className={classes.textCenter}>
                      Deep Work: Rules for Focused Success in a Distracted World
                    </p>
                  ),
                },
                {
                  tabName: "Flow",
                  tabIcon: ImportContactsIcon,
                  tabContent: (
                    <p className={classes.textCenter}>
                      I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. I will be the leader of a company that
                      ends up being worth billions of dollars, because I got the
                      answers. I understand culture. I am the nucleus. I think
                      that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at.
                    </p>
                  ),
                },
                {
                  tabName: "The Power of Habit",
                  tabIcon: ImportContactsIcon,
                  tabContent: (
                    <p className={classes.textCenter}>
                      think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. So when you get something that has the
                      name Kanye West on it, it’s supposed to be pushing the
                      furthest possibilities. I will be the leader of a company
                      that ends up being worth billions of dollars, because I
                      got the answers. I understand culture. I am the nucleus.
                    </p>
                  ),
                },
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
