import React, { useEffect, useState } from 'react';

import { GetEbookDetails } from "../../../Services/MasterStore/Reducers/EbookDetailsSlice";

// Master Hooks
import { useAppDispatch, useAppSelector } from "../../../Services/MasterStore/MasterHook";

// Material UI
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Pagination, Typography } from '@mui/material';

// Icons
import { ArrowBackIosNew, Bookmark, ExpandMore, ZoomIn, ZoomOut } from '@mui/icons-material';

// React Router
import { useNavigate, useParams } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

// Theme
import useStyles from './Theme';

const EbookDetails = () => {
    const { classes } = useStyles();
    const { id } = useParams();
    const { t } = useTranslation(['EbookDetails']);
    const Navigate = useNavigate();
    const dispatch = useAppDispatch();
    const details = useAppSelector((state) => state.EbookDetails.EbookDetails);
    const [expanded, setExpanded] = useState('');
    const [pageNumber, setPagesNumber] = useState('1-2');
    const [bookmarkedPages, setBookmarkedPages] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        dispatch(GetEbookDetails(id)).then((res) => {
            const numPages = res ? res?.payload?.data?.attributes?.book.num_of_pages : 0;
            setPageCount(Math.ceil(numPages / 2));
        });
    }, [dispatch, id])

    const handleChange = (panel) => (_, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const bookmarkPages = () => {
        bookmarkedPages.filter((item) => item === pageNumber).length === 0 ?
            setBookmarkedPages((prev) => [...prev, pageNumber]) :
            setBookmarkedPages(bookmarkedPages.filter((item) => item !== pageNumber))
    }

    const selectPageByPaginate = (pageNum) => {
        setPagesNumber(pageNum === 1 ? '1-2' : (pageNum === 2 ? '3-4' : ''));
    }

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
                                    <Typography className={pageNumber === '1-2' ? 'selected' : ''} onClick={() => { setPagesNumber('1-2') }}>{t('EbookDetails:page') + ' 1-2'}</Typography>
                                    <Typography className={pageNumber === '3-4' ? 'selected' : ''} onClick={() => { setPagesNumber('3-4') }}>{t('EbookDetails:page') + ' 3-4'}</Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2bh-content" id="panel2bh-header" >
                                    <Typography>{t('EbookDetails:bookmarks')}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {bookmarkedPages.length ? bookmarkedPages.map((item, index) => (
                                        <Typography key={index} className={pageNumber === item ? 'selected' : ''} onClick={() => { setPagesNumber(item) }}>{t('EbookDetails:page') + ' ' + item}</Typography>
                                    )) : ''}
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                        <Box className={classes.pages}>
                            <Box className={classes.header}>
                                <Typography variant='h4' className={classes.title}>{t('EbookDetails:page') + pageNumber}</Typography>
                                <Button type='button' variant='contained' className={classes.bookmark + `${bookmarkedPages.filter((item) => item === pageNumber).length > 0 ? ' bookmarked' : ''}`} onClick={() => { bookmarkPages(); }}>
                                    <Bookmark />
                                    <Typography variant='h6'>{t('EbookDetails:bookmark')}</Typography>
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
                                <Pagination className={classes.pagination} count={pageCount} variant="outlined" shape="rounded"
                                    onChange={(_, pageNum) => { selectPageByPaginate(pageNum); }} />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default EbookDetails;