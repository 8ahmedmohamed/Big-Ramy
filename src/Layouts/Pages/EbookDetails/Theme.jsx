import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            margin: 0,
            backgroundColor: theme.palette.primary.dark
        },
        ebookDetailsContainer: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        },
        backLink: {
            gap: '20px',
            width: '100%',
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            margin: '80px 0px',
            justifyContent: 'flex-start',
            '& h4': {
                fontWeight: '800',
                fontStyle: 'italic',
                alignSelf: 'flex-start',
                color: theme.palette.primary.contrastText,
            },
            '& svg': {
                color: theme.palette.secondary.main
            }
        },
        bookDetails: {
            gap: '20px',
            width: '100%',
            height: '600px',
            display: 'flex',
            marginBottom: '50px',
            justifyContent: 'center'
        },
        pagesList: {
            width: '30%',
            maxWidth: '400px',
            backgroundColor: theme.palette.secondary.bgColor,
            '& .MuiAccordion-root': {
                boxShadow: 'none',
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.secondary.bgColor,
                '& .MuiAccordionSummary-root': {
                    '& p': {
                        fontSize: '24px',
                        fontWeight: '800'
                    },
                    '& svg': {
                        fontSize: '30px',
                        color: theme.palette.secondary.main
                    }
                },
                '& .MuiAccordionDetails-root': {
                    padding: '0px',
                    '& p': {
                        padding: '10px',
                        cursor: 'pointer',
                        marginBottom: '10px',
                        borderLeft: '4px solid transparent',
                        '&.selected': {
                            backgroundColor: theme.palette.secondary.light,
                            borderLeft: '4px solid ' + theme.palette.secondary.main
                        }
                    }
                }
            },
        },
        pages: {
            gap: '20px',
            width: '70%',
            display: 'flex',
            flexDirection: 'column'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            '& h4': {
                fontWeight: '800',
                color: theme.palette.primary.contrastText
            }
        },
        bookmark: {
            gap: '10px',
            minWidth: '20%',
            backgroundColor: theme.palette.primary.dark,
            border: '1px solid ' + theme.palette.secondary.main,
            '& svg': {
                fill: theme.palette.secondary.main,
            },
            '&:hover': {
                color: theme.palette.primary.dark,
                backgroundColor: theme.palette.secondary.main,
                border: '1px solid ' + theme.palette.secondary.bgColor,
                '& svg': {
                    fill: theme.palette.primary.dark,
                }
            },
            '&.bookmarked': {
                color: theme.palette.primary.dark,
                backgroundColor: theme.palette.secondary.main,
                border: '1px solid ' + theme.palette.secondary.bgColor,
                '& svg': {
                    fill: theme.palette.primary.dark,
                }
            }
        },
        pagesDetails: {
            height: '-webkit-fill-available',
            backgroundColor: theme.palette.secondary.bgColor
        },
        footer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        zoom: {
            border: '1px solid ' + theme.palette.secondary.main,
            '& button': {
                padding: '5px 10px',
                boxShadow: 'none',
                minWidth: 'fit-content',
                color: theme.palette.secondary.main,
                backgroundColor: theme.palette.primary.dark,
                '& svg': {
                    fontSize: '30px'
                }
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