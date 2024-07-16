import React, { useEffect } from 'react';

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

// Theme
import useStyles from './Theme';

const EbooksList = () => {
    const { classes } = useStyles();
    const { t } = useTranslation(['Global', 'Header', 'EbooksList']);
    const Navigate = useNavigate();
    const dispatch = useAppDispatch();
    const list = useAppSelector((state) => state.EbooksList.EbooksList);

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
            height: '3rem'
        });
        splide.mount();
    }, [])

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Container className={classes.ebooksContainer}>
                    <Box className={classes.ebooksSection}>
                        <Typography variant='h1'>{t('Header:ebooks')}</Typography>
                        <Box className="splide" aria-label="Splide Basic HTML Example">
                            <Box className="splide__track">
                                <List className="splide__list">
                                    <ListItem className="splide__slide">
                                        <Box className="splide__slide__container">
                                            <Typography variant='h6'>{t('Header:all')}</Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem className="splide__slide">
                                        <Box className="splide__slide__container">
                                            <Typography variant='h6'>{t('Header:flexibilityTraining')}</Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem className="splide__slide">
                                        <Box className="splide__slide__container">
                                            <Typography variant='h6'>{t('Header:weightTraining')}</Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem className="splide__slide">
                                        <Box className="splide__slide__container">
                                            <Typography variant='h6'>{t('Header:cardioTraining')}</Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem className="splide__slide">
                                        <Box className="splide__slide__container">
                                            <Typography variant='h6'>{t('Header:courses')}</Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem className="splide__slide">
                                        <Box className="splide__slide__container">
                                            <Typography variant='h6'>{t('Header:fitnessMindest')}</Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem className="splide__slide">
                                        <Box className="splide__slide__container">
                                            <Typography variant='h6'>{t('Header:weightTraining')}</Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem className="splide__slide">
                                        <Box className="splide__slide__container">
                                            <Typography variant='h6'>{t('Header:onlineLearning')}</Typography>
                                        </Box>
                                    </ListItem>
                                </List>
                                {/* <ul class="splide__list">
                                    <li class="splide__slide">
                                        <div class="splide__slide__container">
                                            <img style={{ width: '100%', height: '100%' }} src={banner} alt='banner' />
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div class="splide__slide__container">
                                            <img style={{ width: '100%', height: '100%' }} src={banner} alt='banner' />
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div class="splide__slide__container">
                                            <img style={{ width: '100%', height: '100%' }} src={banner} alt='banner' />
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div class="splide__slide__container">
                                            <img style={{ width: '100%', height: '100%' }} src={banner} alt='banner' />
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div class="splide__slide__container">
                                            <img style={{ width: '100%', height: '100%' }} src={banner} alt='banner' />
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div class="splide__slide__container">
                                            <img style={{ width: '100%', height: '100%' }} src={banner} alt='banner' />
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div class="splide__slide__container">
                                            <img style={{ width: '100%', height: '100%' }} src={banner} alt='banner' />
                                        </div>
                                    </li>
                                </ul> */}
                            </Box>
                        </Box>
                        <Box className={classes.ebooks}>
                            {list.length && list.map((item, index) => (
                                <Card className={classes.card} key={index}>
                                    {/* <CardMedia sx={{ height: 140 }} image={item.attributes.book.image_url} title="green iguana" /> */}
                                    <CardMedia className={classes.cardMedia} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BjFcg6Sp0FkUslmmrCuWQQPFlTn0e23efg&s' onClick={() => { localStorage.setItem('id', item.id); Navigate('/EbookDetails'); }} />
                                    <CardContent>
                                        <Tooltip title={item.attributes.book.title}>
                                            <Typography variant="h5" className={classes.title} onClick={() => { localStorage.setItem('id', item.id); Navigate('/EbookDetails'); }}>{item.attributes.book.title}</Typography>
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
                                        <Button type='button' variant='contained' className={classes.showDetails} onClick={() => { localStorage.setItem('id', item.id); Navigate('/EbookDetails'); }}>
                                            <Typography variant='h6'>{t('EbooksList:showDetails')}</Typography>
                                        </Button>
                                        <Button type='button' variant='contained' className={classes.info}>
                                            <Info />
                                        </Button>
                                    </CardActions>
                                </Card>
                            ))}
                        </Box>
                        <Pagination className={classes.pagination} count={Number(Math.ceil(list.length / 4))} variant="outlined" shape="rounded" />
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default EbooksList;