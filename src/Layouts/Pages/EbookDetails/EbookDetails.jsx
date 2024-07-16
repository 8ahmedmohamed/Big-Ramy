import React, { useEffect, useState } from 'react';

import { GetEbookDetails } from "../../../Services/MasterStore/Reducers/EbookDetailsSlice";

// Master Hooks
import { useAppDispatch, useAppSelector } from "../../../Services/MasterStore/MasterHook";

// Material UI
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Pagination, Typography } from '@mui/material';

// Icons
import { ArrowBackIosNew, Bookmark, ExpandMore, ZoomIn, ZoomOut } from '@mui/icons-material';

// React Router
import { useNavigate } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

// Theme
import useStyles from './Theme';

const EbookDetails = () => {
    const { classes } = useStyles();
    const { t } = useTranslation(['Global', 'Header', 'EbookDetails']);
    const Navigate = useNavigate();
    const dispatch = useAppDispatch();
    const details = useAppSelector((state) => state.EbookDetails.EbookDetails);
    const [bookId, setBookId] = useState('');
    const [expanded, setExpanded] = useState('');
    const [pageNumber, setPagesNumber] = useState('1-2');
    const [bookmarked, setBookmarked] = useState(false);

    useEffect(() => {
        setBookId(localStorage.getItem('id'));
        localStorage.removeItem('id');
    }, [])

    useEffect(() => {
        bookId?.length && dispatch(GetEbookDetails(bookId));
    }, [dispatch, bookId])

    console.log(details);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Container className={classes.ebookDetailsContainer}>
                    <Box className={classes.backLink} onClick={() => { Navigate('/EbooksList'); }}>
                        <ArrowBackIosNew />
                        <Typography variant='h4' className={classes.title}>{details?.attributes?.book?.title}</Typography>
                    </Box>
                    <Box className={classes.bookDetails}>
                        <Box className={classes.pagesList}>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1bh-content" id="panel1bh-header" >
                                    <Typography>{t('EbookDetails:pages')}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className={pageNumber === '1-2' ? 'selected' : ''} onClick={() => { setPagesNumber('1-2') }}>{t('EbookDetails:page1-2')}</Typography>
                                    <Typography className={pageNumber === '3-4' ? 'selected' : ''} onClick={() => { setPagesNumber('3-4') }}>{t('EbookDetails:page3-4')}</Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2bh-content" id="panel2bh-header" >
                                    <Typography>{t('EbookDetails:bookmark')}</Typography>
                                </AccordionSummary>
                                <AccordionDetails></AccordionDetails>
                            </Accordion>
                        </Box>
                        <Box className={classes.pages}>
                            <Box className={classes.header}>
                                <Typography variant='h4' className={classes.title}>{t('Header:page') + pageNumber}</Typography>
                                <Button type='button' variant='contained' className={classes.bookmark + `${bookmarked ? ' bookmarked' : ''}`} onClick={() => { setBookmarked(!bookmarked) }}>
                                    <Bookmark />
                                    <Typography variant='h6'>{t('EbooksList:bookmark')}</Typography>
                                </Button>
                            </Box>
                            <Box className={classes.pagesDetails}></Box>
                            <Box className={classes.footer}>
                                <Box className={classes.zoom}>
                                    <Button type='button' variant='contained'>
                                        <ZoomIn />
                                    </Button>
                                    <Button type='button' variant='contained'>
                                        <ZoomOut />
                                    </Button>
                                </Box>
                                <Pagination className={classes.pagination} count={2} variant="outlined" shape="rounded" />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default EbookDetails;