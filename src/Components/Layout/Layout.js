import React from 'react'
import classes from './Layout.css'

const Layout = ({children}) => (
    <main className={classes.Layout}>
        {children}
    </main>
);
export default Layout;