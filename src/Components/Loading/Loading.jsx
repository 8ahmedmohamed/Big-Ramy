import React from 'react';

// Material UI
import { Box, CircularProgress } from "@mui/material";

// Theme
import useStyles from './Theme';

const Loading = () => {
    const { classes } = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <CircularProgress color="success" />
            </Box>
        </React.Fragment>
    )
}

export default Loading;