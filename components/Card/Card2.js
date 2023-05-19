import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    position: "relative",
    border: "1px solid #000",
    padding: theme.spacing(1, 2),
    width: "100%",
    margin: theme.spacing(2)
  },
  title: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0)
  },
  persentage: {
    padding: theme.spacing(1),
    // border: "1px solid #000",
    margin: theme.spacing(1)
  },
  detail: {
    padding: theme.spacing(1),
    margin: theme.spacing(2, 0, 2, 0)
    // border: "1px solid #000",
  },

  boxicon: {
    height: "100px",
    width: "100px",
    display: "flex",
    position: "absolute",
    zIndex: 1,
    top: -20,
    left: 12,
    color: "#ff0000",
    // background:"linear-gradient(90deg, rgba(40,214,0,1) 0%, rgba(93,170,67,1) 88%)",
    // border: "2px solid #745223",
    borderRadius: "25%",
    justifyContent: "center",
    alignItems: "center"
  },
  icons: {
    minWidth: 60,
    minHeight: 60,
    color: "#ffffff"
  }
}));

export default function Card(props) {
  const classes = useStyles();
  const percen = Math.round((props.percentage + Number.EPSILON) * 100) / 100;
  const pers = percen <= 100 ? percen : 100;
  const IconPerformance = props.iconPerformance;

  return (
    <Paper className={classes.card}>
      <Grid container>
        <Hidden only="sm">
          <Grid className={classes.boxicon} style={{ background: props.color }}>
            <IconPerformance className={classes.icons} />
          </Grid>
        </Hidden>

        <Grid
          container
          className={classes.persentage}
          justifyContent="flex-end"
        >
          <Typography variant="h4"> {pers}%</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container justifyContent="flex-end" className={classes.detail}>
          <Typography variant="h6" align="left">
            {props.secondary != null ? props.secondary : "..."}
          </Typography>
        </Grid>
      </Grid>

      <Divider style={{ color: "#000" }} />

      <Grid container xs justify="flex-start" className={classes.title}>
        <Typography>
          <strong>{props.primary}</strong>
        </Typography>
      </Grid>

      {/* <Grid item xs align="center">
        <Typography>{third}</Typography>
      </Grid> */}
    </Paper>
  );
}
