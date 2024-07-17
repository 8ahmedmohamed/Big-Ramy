import React, { useState, useEffect } from 'react';

// Translation
import i18next from "i18next";
import { useTranslation } from 'react-i18next';

//React Router
import { NavLink } from 'react-router-dom';

// Material UI
import { Box, Button, Container, List, ListItem, Typography } from '@mui/material';

// Icons
import { Menu, Language, ShoppingCart } from '@mui/icons-material';

import mainLogo from '../../../src/Assets/main-logo.svg';

// Theme
import useStyles from './Theme';

const Header = () => {
    const { classes } = useStyles();
    const { t } = useTranslation(['Global', 'Header']);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [position, setPosition] = useState(localStorage.language === 'ar' ? false : true);
    const [option, setOption] = useState('home');

    useEffect(() => {
        setOption(localStorage.getItem('option'));
    }, [])

    const ChangeLanguage = () => {
        setPosition(!position);
    }

    useEffect(() => {
        const htmlRoot = document.querySelector("html");
        htmlRoot.setAttribute("dir", position ? "ltr" : "rtl");
        htmlRoot.setAttribute("lang", position ? "en" : "ar");
        localStorage.language = position ? "en" : "ar";
        localStorage.languageDir = position ? "ltr" : "rtl";
        i18next.changeLanguage(position ? "en" : "ar");
    }, [position])

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.topHeader}>
                    <Container className={classes.changeLang}>
                        <Button type='button' className={classes.lang} onClick={ChangeLanguage}>
                            <Language />
                            <Typography variant='p'>{t('Header:language')}</Typography>
                        </Button>
                    </Container>
                </Box>
                <Box className={classes.middleHeader}>
                    <Container className={classes.middleHeaderContainer}>
                        <List className={classes.signInSignUp}>
                            <ListItem className={classes.sign}>
                                <NavLink to='/' className={classes.menuLink} onClick={() => { setOption('home'); localStorage.setItem('option', 'home'); }}>
                                    <img src={mainLogo} alt='mainLogo' />
                                </NavLink>
                            </ListItem>
                        </List>
                        <List className={classes.signInSignUp}>
                            <ListItem className={classes.sign}>
                                <NavLink to='/' className={classes.menuLink}>{t('Global:signIn')}</NavLink>
                            </ListItem>
                            <ListItem>
                                <Typography variant='p'>{t('Header:or')}</Typography>
                            </ListItem>
                            <ListItem className={classes.sign}>
                                <NavLink to='/' className={classes.menuLink}>{t('Global:signUp')}</NavLink>
                            </ListItem>
                        </List>
                    </Container>
                </Box>
                <Box className={classes.bottomHeader}>
                    <Container className={classes.header}>
                        <Box className={classes.menuItems}>
                            <List className={classes.list}>
                                <ListItem className={classes.item}>
                                    <NavLink to='/' className={classes.menuLink + ` ${option === 'home' ? 'selected' : ''}`} onClick={() => { setOption('home'); localStorage.setItem('option', 'home'); }}>{t('Global:home')}</NavLink>
                                </ListItem>
                                <ListItem className={classes.item}>
                                    <NavLink to='/' className={classes.menuLink + ` ${option === 'news' ? 'selected' : ''}`} onClick={() => { setOption('news'); localStorage.setItem('option', 'news'); }}>{t('Header:news')}</NavLink>
                                </ListItem>
                                <ListItem className={classes.item}>
                                    <NavLink to='/' className={classes.menuLink + ` ${option === 'courses' ? 'selected' : ''}`} onClick={() => { setOption('courses'); localStorage.setItem('option', 'courses'); }}>{t('Header:courses')}</NavLink>
                                </ListItem>
                                <ListItem className={classes.item}>
                                    <NavLink to='/EbooksList' className={classes.menuLink + ` ${option === 'ebooks' ? 'selected' : ''}`} onClick={() => { setOption('ebooks'); localStorage.setItem('option', 'ebooks'); }}>{t('Header:ebooks')}</NavLink>
                                </ListItem>
                                <ListItem className={classes.item}>
                                    <NavLink to='/' className={classes.menuLink + ` ${option === 'contactUs' ? 'selected' : ''}`} onClick={() => { setOption('contactUs'); localStorage.setItem('option', 'contactUs'); }}>{t('Header:contactUs')}</NavLink>
                                </ListItem>
                            </List>
                        </Box>
                        <Box className={classes.toggleMenu}>
                            <Button type="button" onClick={() => setMobileMenu(!mobileMenu)}>
                                <Menu />
                            </Button>
                        </Box>
                        <Box className={`${classes.mobileMenu} ${mobileMenu ? classes.show : classes.hide}`}>
                            <List className={classes.mobileList}>
                                <ListItem className={classes.mobileItem}>
                                    <NavLink to='/' className={classes.mobileLink + ` ${option === 'home' ? 'selected' : ''}`} onClick={() => { setOption('home'); localStorage.setItem('option', 'home') }}>{t('Global:home')}</NavLink>
                                </ListItem>
                                <ListItem className={classes.mobileItem}>
                                    <NavLink to='/' className={classes.mobileLink + ` ${option === 'news' ? 'selected' : ''}`} onClick={() => { setOption('news'); localStorage.setItem('option', 'news') }}>{t('Header:news')}</NavLink>
                                </ListItem>
                                <ListItem className={classes.mobileItem}>
                                    <NavLink to='/Courses' className={classes.mobileLink + ` ${option === 'courses' ? 'selected' : ''}`} onClick={() => { setOption('courses'); localStorage.setItem('option', 'courses') }}>{t('Header:courses')}</NavLink>
                                </ListItem>
                                <ListItem className={classes.mobileItem}>
                                    <NavLink to='/' className={classes.mobileLink + ` ${option === 'ebooks' ? 'selected' : ''}`} onClick={() => { setOption('ebooks'); localStorage.setItem('option', 'ebooks') }}>{t('Header:ebooks')}</NavLink>
                                </ListItem>
                                <ListItem className={classes.mobileItem}>
                                    <NavLink to='/' className={classes.mobileLink + ` ${option === 'contactUs' ? 'selected' : ''}`} onClick={() => { setOption('contactUs'); localStorage.setItem('option', 'contactUs') }}>{t('Header:contactUs')}</NavLink>
                                </ListItem>
                            </List>
                        </Box>
                        <Button type='button' className={classes.cart}>
                            <ShoppingCart />
                            <Typography variant='p'>{t('Header:cart')}</Typography>
                        </Button>
                    </Container>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Header;