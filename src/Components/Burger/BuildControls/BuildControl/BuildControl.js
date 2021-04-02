import React from "react";
import classes from './BuildControl.module.scss';

const buildControl = props => {
    return(
      <div className={classes.BuildControl}>
          <div className={classes.Label}>{props.label}</div>
          <button disabled={props.disabled} onClick={props.remove} className={classes.Less}>less</button>
          <button onClick={props.added} className={classes.More}>more</button>
      </div>
    );
}

export default buildControl;