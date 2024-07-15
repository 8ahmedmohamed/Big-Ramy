import React, { useEffect } from 'react';

// Translation
import i18next from "i18next";

// React Router
import { Outlet } from 'react-router-dom';

// Material UI
import { Box } from "@mui/material";

// Components
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

// Theme
import useStyles from './Theme';

const Container = () => {
    const { classes } = useStyles();

    useEffect(() => {
        i18next.changeLanguage(localStorage.language === "en" ? "en" : "ar");
    }, [])

    return (
        <React.Fragment>
            <Header />
            <Box className={classes.root}>
                <Outlet />
            </Box>
            <Footer />
        </React.Fragment>
    )
}

export default Container;