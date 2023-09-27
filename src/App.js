import { Fragment } from "react";
import React from 'react'
import Head from "./Component/Head";
import Home from "./Component/Home";

function App(props) {
    return (
        <Fragment>
            <Head />
            <Home/>
        </Fragment>
    )
}

export default App;
