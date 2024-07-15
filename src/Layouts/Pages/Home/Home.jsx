import React, { useEffect, useState } from 'react';

// Material UI
import { Box } from '@mui/material';

import { Splide } from "@splidejs/react-splide";


import Slider from './Slider/Slider';

// Translation
import { useTranslation } from 'react-i18next';

// Theme
import useStyles from './Theme';

const Home = () => {
    const { classes } = useStyles();
    const { t } = useTranslation(['Home']);
    const [position] = useState(localStorage.language);
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        // i18next.changeLanguage(position);
        setLanguage(position)
    }, [t, position])

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.sliderImages}>
                    <Splide aria-label="My Favorite Images" options={{ type: "loop", direction: language === 'ar' ? "rtl" : "ltr", autoWidth: true, perMove: 1, autoplay: true, speed: 3000, gap: "10px", }}>
                        <Slider />
                    </Splide>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Home;