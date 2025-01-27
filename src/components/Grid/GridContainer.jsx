import React from "react";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const style = {
  grid: {
    margin: "0 -15px !important",
    width: "unset"
  }
};

const GridContainer = props => {
  const { classes, children, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};

export default withStyles(style)(GridContainer);
