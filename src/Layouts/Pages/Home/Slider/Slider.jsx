import React from 'react';

import { SplideSlide } from "@splidejs/react-splide";

import banner from '../../../../Assets/banner.5d002eef3c2ca31636eb.webp';

// Theme
import useStyles from './Theme';

const Slider = () => {
    const { classes } = useStyles();

    return (
        <React.Fragment>
            <SplideSlide className={classes.splide}><img src={banner} alt="cloud" /></SplideSlide>
            <SplideSlide className={classes.splide}><img src={banner} alt="cloud" /></SplideSlide>
            <SplideSlide className={classes.splide}><img src={banner} alt="cloud" /></SplideSlide>
        </React.Fragment>
    )
}

export default Slider;