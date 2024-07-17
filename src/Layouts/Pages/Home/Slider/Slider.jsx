import React from 'react';

// Material UI
import { Box, Button, Typography } from '@mui/material';

import { SplideSlide } from "@splidejs/react-splide";

import banner from '../../../../Assets/banner.5d002eef3c2ca31636eb.webp';

// Theme
import useStyles from './Theme';

// Translation
import { useTranslation } from 'react-i18next';

const Slider = () => {
    const { classes } = useStyles();
    const { t } = useTranslation(['Home']);

    return (
        <React.Fragment>
            <SplideSlide className={classes.splide}>
                <Box className={classes.imgContanier}>
                    <img src={banner} alt="cloud" />
                    <Box className={classes.overlay}>
                        <Typography variant='h5'>{t('Home:trainingCoursesBooks')}</Typography>
                        <Typography variant='h2'>{t('Home:makeYourHealthyBodyStrongIsOurResponsability')}</Typography>
                        <Button type='button' variant='contained' className={classes.about}>
                            <Typography variant='h6'>{t('Home:aboutUs')}</Typography>
                        </Button>
                    </Box>
                </Box>
            </SplideSlide>
            <SplideSlide className={classes.splide}>
                <Box className={classes.imgContanier}>
                    <img src={banner} alt="cloud" />
                    <Box className={classes.overlay}>
                        <Typography variant='h5'>{t('Home:trainingCoursesBooks')}</Typography>
                        <Typography variant='h2'>{t('Home:makeYourHealthyBodyStrongIsOurResponsability')}</Typography>
                        <Button type='button' variant='contained' className={classes.about}>
                            <Typography variant='h6'>{t('Home:aboutUs')}</Typography>
                        </Button>
                    </Box>
                </Box>
            </SplideSlide>
            <SplideSlide className={classes.splide}>
                <Box className={classes.imgContanier}>
                    <img src={banner} alt="cloud" />
                    <Box className={classes.overlay}>
                        <Typography variant='h5'>{t('Home:trainingCoursesBooks')}</Typography>
                        <Typography variant='h2'>{t('Home:makeYourHealthyBodyStrongIsOurResponsability')}</Typography>
                        <Button type='button' variant='contained' className={classes.about}>
                            <Typography variant='h6'>{t('Home:aboutUs')}</Typography>
                        </Button>
                    </Box>
                </Box>
            </SplideSlide>
        </React.Fragment>
    )
}

export default Slider;