import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            margin: 0,
            backgroundColor: theme.palette.primary.dark
        },
        ebooksSection: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            '& h1': {
                fontSize: '46px',
                margin: '40px 0px 0px',
                fontWeight: '800',
                fontStyle: 'italic',
                alignSelf: 'flex-start',
                color: theme.palette.primary.contrastText,
            },
            '& .splide': {
                width: '100%',
                margin: '30px 0px',
                '& .splide__arrow': {
                    backgroundColor: 'transparent',
                    '&.splide__arrow--prev': {
                        left: '-5px'
                    },
                    '&.splide__arrow--next': {
                        right: '-5px'
                    },
                    '& svg': {
                        fontSize: '25px',
                        fill: theme.palette.secondary.main,
                    }
                }
            },
            '& .splide__track': {
                margin: '10px 40px'
            },
            '& .splide__slide': {
                padding: '0px',
                width: 'fit-content !important',
                color: theme.palette.primary.contrastText,
            },
            '& .splide__slide__container': {
                display: 'flex',
                minWidth: '5rem',
                cursor: 'pointer',
                padding: '0px 20px',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                    backgroundColor: theme.palette.primary.light
                }
            }
        },
        ebooks: {
            margin: '30px 0px'
        },
        card: {
            cursor: 'default',
            minWidth: '275px',
            maxWidth: '345px',
            backgroundColor: theme.palette.secondary.bgColor,
        },
        cardMedia: {
            height: '240px',
            cursor: 'pointer',
        },
        title: {
            width: '200px',
            cursor: 'pointer',
            fontWeight: '800',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            color: theme.palette.primary.contrastText
        },
        rating: {
            gap: '5px',
            display: 'flex',
            margin: '15px 0px',
            alignItems: 'center',
            '& p': {
                color: theme.palette.primary.contrastText
            }
        },
        price: {
            gap: '5px',
            display: 'flex',
            alignItems: 'flex-end',
            '& p': {
                color: theme.palette.primary.contrastText
            }
        },
        currency: {
            color: theme.palette.primary.contrastText
        },
        priceNumber: {
            fontWeight: '800',
            fontSize: '1.7rem',
            color: theme.palette.primary.contrastText
        },
        cardActions: {
            alignItems: 'stretch'
        },
        showDetails: {
            minWidth: '77%',
            borderRadius: '0px',
            backgroundColor: theme.palette.secondary.main,
            border: '1px solid ' + theme.palette.secondary.main,
            '& h6': {
                fontWeight: '800',
                color: theme.palette.primary.dark,
            },
            '&:hover': {
                backgroundColor: theme.palette.secondary.bgColor,
                border: '1px solid ' + theme.palette.secondary.main,
                '& h6': {
                    color: theme.palette.secondary.main,
                },
            }
        },
        info: {
            minWidth: '20%',
            borderRadius: '0px',
            backgroundColor: theme.palette.secondary.bgColor,
            border: '1px solid ' + theme.palette.secondary.main,
            '& svg': {
                fill: theme.palette.secondary.main,
            },
            '&:hover': {
                backgroundColor: theme.palette.secondary.main,
                border: '1px solid ' + theme.palette.secondary.bgColor,
                '& svg': {
                    fill: theme.palette.primary.dark,
                },
            }
        },
        pagination: {
            margin: '20px 0px',
            '& .MuiPaginationItem-previousNext': {
                color: theme.palette.primary.contrastText,
                '& svg': {
                    fontSize: '40px'
                }
            },
            '& .MuiPaginationItem-page': {
                color: theme.palette.secondary.main,
                border: '1px solid ' + theme.palette.secondary.main,
            }
        }
    }
});

export default useStyles;