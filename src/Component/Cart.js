import { Fragment } from "react";
import classes from "./Home.module.css";


const Cart = (props) => {
    return (
        <Fragment>
            <div className={classes.cartitems}>
                <div className={classes.carts}>
                    <div className={classes.cart}>
                        <div className={classes.item}></div>
                    </div>
                    <p className={classes.text}>Web Store</p>
                </div>

                <div className={classes.carts}>
                    <div className={classes.cart}>
                        <div className={classes.item}></div>

                    </div>
                    <p className={classes.text}>Web Store</p>
                </div>

                <div className={classes.carts}>
                    <div className={classes.cart}>
                        <div className={classes.item}></div>

                    </div>
                    <p className={classes.text}>Web Store</p>
                </div>

            </div>

        </Fragment>
    )
}
export default Cart