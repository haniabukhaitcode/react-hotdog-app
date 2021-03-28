import React from "react";
import Auxx from "../../hoc/Auxx";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = (props) => (
  <Auxx>
    <div className={classes.Container}>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>{props.children}</main>
    </div>
  </Auxx>
);

export default layout;
