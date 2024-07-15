import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            margin: 0
        },
        topFooter: {
            padding: '110px 85px 60px',
            backgroundColor: theme.palette.primary.light,
            '& .MuiGrid-item': {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center'
            },
            '& hr': {
                margin: '30px 10px',
                border: '1px solid' + theme.palette.secondary.dark,
            },
            [theme.breakpoints.down('md')]: {
                padding: '30px',
                '& .MuiGrid-container': {
                    justifyContent: 'center'
                }
            },
            [theme.breakpoints.down('sm')]: {
                '& .MuiGrid-item': {
                    alignItems: 'center'
                },
            }
        },
        footerWidget: {
            gap: '15px',
            display: 'flex',
            padding: '0px 10px',
            alignItems: 'flex-start !important',
            '& span': {
                color: theme.palette.primary.contrastText
            },
            '& img': {
                cursor: 'pointer'
            }
        },
        footerWidgetTitle: {
            color: theme.palette.primary.contrastText
        },
        footerContentWight: {
            padding: '0px',
            marginTop: '12px',
            '& li': {
                padding: '0px'
            },
            '& a': {
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '45px',
                textDecoration: 'none',
                color: theme.palette.primary.contrastText,
                '&:hover': {
                    color: theme.palette.secondary.main
                }
            }
        },
        subscribeField: {
            width: '100%',
            display: 'flex',
            '& .MuiTextField-root': {
                width: '100%'
            },
            '& label': {
                color: theme.palette.secondary.dark,
                '&.Mui-focused': {
                    color: theme.palette.secondary.main,
                }
            },
            '& .MuiInputBase-root': {
                '&:hover': {
                    '& fieldset': {
                        border: '1px solid ' + theme.palette.secondary.main
                    }
                }
            },
            '& .Mui-focused': {
                '& fieldset': {
                    border: '1px solid ' + theme.palette.secondary.main + '!important'
                }
            },
            '& .MuiInputBase-input': {
                color: theme.palette.secondary.dark
            },
            '& fieldset': {
                borderRadius: '0px !important',
                border: '1px solid ' + theme.palette.secondary.dark
            }
        },
        subscribe: {
            borderRadius: '0px',
            backgroundColor: theme.palette.secondary.main,
            '& span': {
                fontWeight: '800',
                color: theme.palette.primary.dark,
            }
        },
        bottomFooter: {
            padding: '7px 60px',
            backgroundColor: theme.palette.primary.dark,
            [theme.breakpoints.down('md')]: {
                padding: '20px'
            },
        },
        copyright: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]: {
                flexWrap: 'wrap',
                justifyContent: 'center'
            },
        },
        footerIcons: {
            display: 'flex',
            gap: '15px',
            '& li': {
                padding: '0px !important'
            },
            '& a': {
                display: 'flex',
                '& svg': {
                    padding: '10px',
                    fontSize: '40px',
                    borderRadius: '25px',
                    color: theme.palette.primary.light,
                    backgroundColor: theme.palette.secondary.main,
                    '&:hover': {
                        backgroundColor: theme.palette.primary.contrastText
                    },
                }
            }
        }
    }
});

export default useStyles;