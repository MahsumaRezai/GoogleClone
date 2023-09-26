import { Fragment } from "react";
import React from 'react'
import classes from "./Head.module.css";
import img from './image/dit.PNG'

const Head = (props) => {

    return (
        <Fragment>
            <div className={classes.head}>
                <div>
                    <div className={classes.postion}>
                        <img src={img} alt="" className={classes.shap} />

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>




                </div>


            </div>

        </Fragment>

    )
}
export default Head;