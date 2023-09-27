import { Fragment } from "react";
import React from 'react';
import classes from "./Home.module.css";


const Title = (props) => {
    return (
        <Fragment>
            <div className={classes.warrp}>
                <span className={classes.title}>Goo</span>
                <span className={classes.titletwo}>gle</span>
            </div>
            <div className={classes.flied}>
                <input className={classes.input} />
            </div>
        </Fragment>
    )
}
export default Title;