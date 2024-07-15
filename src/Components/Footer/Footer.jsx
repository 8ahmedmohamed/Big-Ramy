import React from 'react';

// Translation
import { useTranslation } from 'react-i18next';

//React Router
import { NavLink } from 'react-router-dom';

// Material UI
import { Box, Button, List, ListItem, Grid as MuiGrid, TextField, Typography } from '@mui/material';

// Icons
import { LinkedIn, Twitter, Instagram } from '@mui/icons-material';

import mainLogo from '../../Assets/main-logo.svg';

// Theme
import useStyles from './Theme';

const Footer = () => {
    const { classes } = useStyles();
    const { t } = useTranslation(['Global', 'Footer']);

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.topFooter}>
                    <MuiGrid container>
                        <MuiGrid item xs={12} sm={4} className={classes.footerWidget}>
                            <img src={mainLogo} alt='mainLogo' />
                        </MuiGrid>
                        <MuiGrid item xs={12} sm={2} className={classes.footerWidget}>
                            <List className={classes.footerContentWight}>
                                <ListItem>
                                    <NavLink to='/'>{t('Footer:joinOurNewsetter')}</NavLink>
                                </ListItem>
                            </List>
                        </MuiGrid>
                        <MuiGrid item xs={12} sm={6} className={classes.footerWidget}>
                            <Box className={classes.subscribeField}>
                                <TextField id="outlined-basic" label="What are you looking for?" variant="outlined" />
                                <Button type='button' variant='contained' className={classes.subscribe}>
                                    <Typography variant='p'>{t('Footer:subscribe')}</Typography>
                                </Button>
                            </Box>
                        </MuiGrid>
                    </MuiGrid>
                    <hr />
                    <MuiGrid container>
                        <MuiGrid item xs={12} sm={4} className={classes.footerWidget}>
                            <Typography variant='p'>Lorem Ipsum is simply dummy text of the printing and typesett ing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                            <Typography variant='p'>{t('Footer:followUsOn')}</Typography>
                            <List className={classes.footerIcons}>
                                <ListItem>
                                    <NavLink to='/'><Twitter /></NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to='/'><LinkedIn /></NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to='/'><Instagram /></NavLink>
                                </ListItem>
                            </List>
                        </MuiGrid>
                        <MuiGrid item xs={12} sm={4} className={classes.footerWidget}>
                            <List className={classes.footerContentWight}>
                                <ListItem>
                                    <NavLink to='/'>{t('Footer:news')}</NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to='/'>{t('Footer:tournaments')}</NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to='/'>{t('Footer:courses')}</NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to='/'>{t('Footer:ebooks')}</NavLink>
                                </ListItem>
                            </List>
                        </MuiGrid>
                        <MuiGrid item xs={12} sm={4} className={classes.footerWidget}>
                            <List className={classes.footerContentWight}>
                                <ListItem>
                                    <NavLink to='/'>{t('Footer:privacyPolicies')}</NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to='/'>{t('Footer:termsAndConditions')}</NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to='/'>{t('Footer:contactUs')}</NavLink>
                                </ListItem>
                            </List>
                        </MuiGrid>
                    </MuiGrid>
                </Box>
                <Box className={classes.bottomFooter}>
                    <MuiGrid container>
                        <MuiGrid item xs={12} className={classes.copyright}>
                            <Box className={classes.footerWidgetTitle}>
                                <Typography>{t('Footer:copyRight©2024')}</Typography>
                            </Box>
                        </MuiGrid>
                    </MuiGrid>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Footer;