import React, { useEffect, useState } from 'react';

import { GetEbooksList } from "../../../Services/MasterStore/Reducers/EbooksListSlice";

// Master Hooks
import { useAppDispatch, useAppSelector } from "../../../Services/MasterStore/MasterHook";

// Material UI
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, List, ListItem, Pagination, Rating, Tooltip, Typography } from '@mui/material';

// Icons
import { Info } from '@mui/icons-material';

// React Router
import { useNavigate } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

import Splide from '@splidejs/splide';

import empty from '../../../Assets/empty.svg';

// Theme
import useStyles from './Theme';

const EbooksList = () => {
    const { classes } = useStyles();
    const { t } = useTranslation(['EbooksList']);
    const Navigate = useNavigate();
    const dispatch = useAppDispatch();
    const list = useAppSelector((state) => state.EbooksList.EbooksList);
    const [optionId, setOptionId] = useState('1');

    useEffect(() => {
        dispatch(GetEbooksList());
    }, [dispatch])

    useEffect(() => {
        let splide = new Splide('.splide', {
            type: 'loop',
            drag: 'free',
            perPage: 5,
            perMove: 1,
            pagination: false,
            gap: '2rem',
            height: '3rem',
            direction: localStorage.language === 'ar' ? "rtl" : "ltr"
        });
        splide.mount();
    }, [])

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Container className={classes.ebooksContainer}>
                    <Box className={classes.ebooksSection}>
                        <Typography variant='h1'>{t('EbooksList:ebooks')}</Typography>
                        <Box className="splide" aria-label="Splide Basic HTML Example">
                            <Box className="splide__track">
                                <List className="splide__list">
                                    <ListItem className="splide__slide">
                                        <Box className={`splide__slide__container ${optionId === '1' ? 'selected' : ''}`} onClick={() => { setOptionId('1'); }}>
                                            <Typography variant='h6'>{t('EbooksList:all')}</Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem className="splide__slide">
                                        <Box className={`splide__slide__container ${optionId === '2' ? 'selected' : ''}`} onClick={() => { setOptionId('2'); }}>
                                            <Typography variant='h6'>{t('EbooksList:flexibilityTraining')}</Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem className="splide__slide">
                                        <Box className={`splide__slide__container ${optionId === '3' ? 'selected' : ''}`} onClick={() => { setOptionId('3'); }}>
                                            <Typography variant='h6'>{t('EbooksList:weightTraining')}</Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem className="splide__slide">
                                        <Box className={`splide__slide__container ${optionId === '4' ? 'selected' : ''}`} onClick={() => { setOptionId('4'); }}>
                                            <Typography variant='h6'>{t('EbooksList:cardioTraining')}</Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem className="splide__slide">
                                        <Box className={`splide__slide__container ${optionId === '5' ? 'selected' : ''}`} onClick={() => { setOptionId('5'); }}>
                                            <Typography variant='h6'>{t('EbooksList:courses')}</Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem className="splide__slide">
                                        <Box className={`splide__slide__container ${optionId === '6' ? 'selected' : ''}`} onClick={() => { setOptionId('6'); }}>
                                            <Typography variant='h6'>{t('EbooksList:fitnessMindest')}</Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem className="splide__slide">
                                        <Box className={`splide__slide__container ${optionId === '7' ? 'selected' : ''}`} onClick={() => { setOptionId('7'); }}>
                                            <Typography variant='h6'>{t('EbooksList:weightTraining')}</Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem className="splide__slide">
                                        <Box className={`splide__slide__container ${optionId === '8' ? 'selected' : ''}`} onClick={() => { setOptionId('8'); }}>
                                            <Typography variant='h6'>{t('EbooksList:onlineLearning')}</Typography>
                                        </Box>
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                        <Box className={classes.ebooks}>
                            {optionId === '1' && list.length ?
                                list.map((item, index) => (
                                    <Card className={classes.card} key={index}>
                                        {/* <CardMedia sx={{ height: 140 }} image={item.attributes.book.image_url} title="green iguana" /> */}
                                        <CardMedia className={classes.cardMedia} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BjFcg6Sp0FkUslmmrCuWQQPFlTn0e23efg&s' onClick={() => { Navigate('/EbookDetails/' + item.id); }} />
                                        <CardContent>
                                            <Tooltip title={item.attributes.book.title}>
                                                <Typography variant="h5" className={classes.title} onClick={() => { Navigate('/EbookDetails/' + item.id); }}>{item.attributes.book.title}</Typography>
                                            </Tooltip>
                                            <Box className={classes.rating}>
                                                <Rating name="read-only" value={5} readOnly />
                                                <Typography>(137)</Typography>
                                            </Box>
                                            <Box className={classes.price}>
                                                <Typography variant='h6' className={classes.currency}>{item.attributes.currency}</Typography>
                                                <Typography variant='h4' className={classes.priceNumber}>{item.attributes.compare_at_price}</Typography>
                                            </Box>
                                        </CardContent>
                                        <CardActions className={classes.cardActions}>
                                            <Button type='button' variant='contained' className={classes.showDetails} onClick={() => { Navigate('/EbookDetails/' + item.id); }}>
                                                <Typography variant='h6'>{t('EbooksList:showDetails')}</Typography>
                                            </Button>
                                            <Button type='button' variant='contained' className={classes.info}>
                                                <Info />
                                            </Button>
                                        </CardActions>
                                    </Card>
                                )) :
                                <Box className={classes.empty}>
                                    <img src={empty} alt="empty" />
                                    <Typography variant='h5'>{t('EbooksList:noEbooksAreAvailable')}</Typography>
                                    <Typography>{t('EbooksList:browseOurEbook')}</Typography>
                                </Box>
                            }
                        </Box>
                        {optionId === '1' && list.length ?
                            <Pagination className={classes.pagination} count={Number(Math.ceil(list.length / 4))} variant="outlined" shape="rounded" /> : ''
                        }
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default EbooksList;