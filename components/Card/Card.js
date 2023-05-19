import React from "react";
import StyledCard from "./Card2";
import { Grid, Typography, Divider } from "@material-ui/core";
import SubwayIcon from "@material-ui/icons/Subway";
import ExploreIcon from "@material-ui/icons/Explore";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import AssessmentIcon from "@material-ui/icons/Assessment";

function App() {
  return (
    <Grid
      align="center"
      border="1px solid #000"
      alignItems="center"
      justify="center"
    >
      <Grid style={{ margin: 20 }}>
        <Typography variant="h4">
          <strong>Awsome Card</strong>
        </Typography>
      </Grid>
      <Grid style={{ margin: 20 }}>
        <Typography>change the screen size to see the effect!</Typography>
      </Grid>

      <Typography variant="h6">
        <strong>Hidden icon on breakpoints sm (between 600px - 960px</strong>
      </Typography>
      <Divider style={{ margin: 20 }} />
      <Grid container item xs={12} alignItems="center" justify="center">
        <Grid container item sm={6}>
          <Grid container item lg={6} style={{ marginBottom: 25 }}>
            <StyledCard
              primary="DonutSmall"
              secondary="Lorem ipsum dolor sit"
              percentage={89.4}
              color="linear-gradient(60deg, rgba(94,53,177,1) 0%, rgba(3,155,229,1) 100%)"
              iconPerformance={DonutSmallIcon}
            />
          </Grid>
          <Grid container style={{ marginBottom: 25 }} item lg={6}>
            <StyledCard
              primary="Assessment"
              secondary="Lorem ipsum dolor sit"
              percentage={100.78}
              color="linear-gradient(60deg, rgba(245,0,87,1) 0%, rgba(255,138,128,1) 100%)"
              iconPerformance={AssessmentIcon}
            />
          </Grid>
        </Grid>
        <Grid container item sm={6}>
          <Grid container item lg={6} style={{ marginBottom: 25 }}>
            <StyledCard
              primary="Explore"
              secondary="Lorem ipsum dolor sit"
              percentage={90.56}
              color="linear-gradient(60deg, rgba(251,140,0,1) 0%, rgba(255,202,41,1) 100%)"
              iconPerformance={ExploreIcon}
            />
          </Grid>

          <Grid container item lg={6} style={{ marginBottom: 25 }}>
            <StyledCard
              primary="Subway"
              // secondary="ksdnfkdsgk sdfnsd"
              percentage={78.8}
              color="linear-gradient(60deg, rgba(67,160,71,1) 0%, rgba(255,235,59,1) 100%)"
              iconPerformance={SubwayIcon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
