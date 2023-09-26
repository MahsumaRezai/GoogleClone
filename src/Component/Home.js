import { Fragment } from "react";
import React from 'react';
import classes from "./Home.module.css";

const Home = (props) => {

    return (
        <Fragment>
            <div className={classes.home}>
                <div>
                    <h1 className={classes.title}>Google</h1>
                </div>

            </div>

        </Fragment>

    )
}
export default Home;