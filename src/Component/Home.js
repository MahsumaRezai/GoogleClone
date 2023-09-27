import { Fragment } from "react";
import React from 'react';
import classes from "./Home.module.css";
import Title from "./Title";
import Cart from "./Cart";
const Home = (props) => {

    return (
        <Fragment>
            <div className={classes.home}>
                <Title />
                <Cart />
            </div>
        </Fragment>

    )
}
export default Home;