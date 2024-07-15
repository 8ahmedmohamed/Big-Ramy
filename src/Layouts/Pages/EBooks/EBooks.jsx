import React from 'react';

// Material UI
import { Box } from '@mui/material';

// Translation
// import { useTranslation } from 'react-i18next';

// Theme
import useStyles from './Theme';

const EBooks = () => {
    const { classes } = useStyles();
    // const { t } = useTranslation(['Home']);

    return (
        <React.Fragment>
            <Box className={classes.root}>
            </Box>
        </React.Fragment>
    )
}

export default EBooks;