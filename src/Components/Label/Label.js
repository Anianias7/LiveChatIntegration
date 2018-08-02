import React from 'react'
import classes from './Label.css'

const Label = ({
                   children
               }) => (
    <div className={classes.Label}>
        {children}
    </div>
);

export default Label;