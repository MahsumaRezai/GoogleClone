import { Fragment } from "react";
import React from 'react';
import classes from "./Home.module.css";

const Home = (props) => {

    return (
        <Fragment>
            <div className={classes.home}>
                <div className={classes.warrp}>
                    <span className={classes.title}>Goo</span>
                    <span className={classes.titletwo}>gle</span>
                </div>
                <div className={classes.flied}>
                    <input className={classes.input} />

                </div>

            </div>

        </Fragment>

    )
}
export default Home;