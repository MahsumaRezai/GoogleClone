import { Fragment } from "react";
import React from 'react'
import classes from "./Head.module.css";
import img from './image/dit.PNG';
import img1 from './image/profile.jpg';
import img2 from './image/chart.PNG';
import img3 from './image/fersh.PNG';
import img4 from './image/ondo.PNG';


const Head = (props) => {

    return (
        <Fragment>
            <div className={classes.head}>
                <img src={img4} alt="" />
                <img src={img3} alt="" />
                <input className={classes.input} />
                <img src={img2} alt="" />
                <img src={img1} alt="" className={classes.profile} />
                <img src={img} alt="" className={classes.shap} />









            </div>

        </Fragment>

    )
}
export default Head;