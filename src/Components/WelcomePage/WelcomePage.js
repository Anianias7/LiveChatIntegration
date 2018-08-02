import React from 'react'
import classes from './WelcomePage.css'
import SignOutButton from "../SingOutButton/SignOutButton";
import img from "../../assets/livechat.png"

const WelcomePage = ({
                         loggIn,
                         logOutHandler
                     }) => (
    <div className={classes.WelcomePage}>
        <div className={classes.GreetingWrapper}>
            <p className={classes.greetingColor}>Welcome!</p>
            <div className={classes.buttonWrapper}>
                {!loggIn ? <div className="livechat-login-button"></div> : <SignOutButton onClick={logOutHandler}/>}
            </div>
        </div>
        <div className={classes.imageWrapper}>
            <img src={img} width='200px' />
        </div>
    </div>

);

export default WelcomePage;