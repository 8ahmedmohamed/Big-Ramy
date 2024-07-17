import React, { useEffect } from 'react';

// Translation
import i18next from "i18next";

// React Router
import { Outlet } from 'react-router-dom';

// Material UI
import { Box } from "@mui/material";

// Scroll To Top
import ScrollToTop from "react-scroll-to-top";

// Components
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

// Icons
import { KeyboardArrowUp } from '@mui/icons-material';

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
            <ScrollToTop smooth className={classes.scrollToTop + ` ${localStorage.language === 'ar' ? 'dirRight' : ''}`} component={<KeyboardArrowUp />} />
        </React.Fragment>
    )
}

export default Container;