import React from 'react'
import classes from './Profile.css'
import Label from "../Label/Label";

const Profile = ({
                     userInfo,
                     loggin
                 }) => {
    console.log(userInfo)


    return (
        loggin ? (
            <div className={classes.Profile}>
                <div className={classes.infoPart}>
                    <div className={classes.LabelWithContent}>
                        <Label>Name</Label>
                        <p className={classes.Info}>{userInfo.name}</p>
                    </div>
                   <div className={classes.LabelWithContent}>
                       <Label>Login</Label>
                       <p className={classes.Info}>{userInfo.login}</p>
                   </div>
                    <div className={classes.LabelWithContent}>
                        <Label>Permission</Label>
                        <p className={classes.Info}>{userInfo.permission}</p>
                    </div>
                    <div className={classes.LabelWithContent}>
                        <Label>Status</Label>
                        <p className={classes.Info}>{userInfo.status}</p>
                    </div>
                </div>
            </div>) : null
    );
};


export default Profile;