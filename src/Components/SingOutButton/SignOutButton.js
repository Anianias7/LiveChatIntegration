import React from 'react'
import classes from './SignOutButton.css'

const SignOutButton = ({
                           onClick
                       }) => (
    <button onClick={onClick} className={classes.SignOutButton}>
        Sign out from <span className={classes.Live}>Live</span><span className={classes.Chat}>Chat</span>
    </button>
);

export default SignOutButton;