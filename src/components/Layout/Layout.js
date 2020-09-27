import React from "react";
import Aux from "../../hoc/Auxillary";
import Classes from "./Layout.module.css";
import Toolbar from "../Navigation/ToolBar/ToolBar";
const layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <main className={Classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
