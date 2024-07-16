import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            margin: 0,
            backgroundColor: theme.palette.primary.dark
        },
        topHeader: {
            zIndex: '999',
            height: '40px',
            display: 'flex',
            padding: '0px 10px',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: theme.palette.primary.dark,
            borderBottom: '1px solid' + theme.palette.secondary.dark
        },
        changeLang: {
            display: 'flex',
            justifyContent: 'flex-end'
        },
        middleHeader: {
            zIndex: '999',
            display: 'flex',
            padding: '15px 10px',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: theme.palette.primary.dark,
            borderBottom: '1px solid' + theme.palette.primary.light
        },
        middleHeaderContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            '& img': {
                cursor: 'pointer'
            }
        },
        signInSignUp: {
            padding: '0px',
            display: 'flex',
            alignItems: 'center',
            height: 'fit-content',
            '& li': {
                padding: '0px 2px',
                width: 'fit-content'
            },
            '& span': {
                cursor: 'default',
                color: theme.palette.primary.contrastText
            }
        },
        sign: {
            width: '60px',
            padding: '0px',
            display: 'flex',
            height: 'fit-content',
            '& a': {
                gap: '5px',
                display: 'flex',
                cursor: 'pointer',
                textDecoration: 'none',
                color: theme.palette.primary.contrastText,
                '&:hover': {
                    color: theme.palette.secondary.main
                }
            }
        },
        setting: {
            display: 'flex',
        },
        userName: {
            display: 'flex',
            alignItems: 'center',
            '& h6': {
                color: theme.palette.primary.contrastText,
            }
        },
        lang: {
            gap: '4px',
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.primary.contrastText,
            '&:hover': {
                color: theme.palette.secondary.main
            },
            '& svg': {
                color: theme.palette.secondary.main
            }
        },
        bottomHeader: {
            backgroundColor: theme.palette.primary.light,
            borderBottom: '1px solid' + theme.palette.primary.dark
        },
        header: {
            top: '0px',
            zIndex: '999',
            display: 'flex',
            position: 'sticky',
            flexWrap: 'nowrap',
            marginBottom: '0px',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: theme.palette.primary.light
        },
        image: {
            width: '55px'
        },
        menuItems: {
            [theme.breakpoints.down('md')]: {
                display: 'none'
            }
        },
        list: {
            gap: '48px',
            display: 'flex',
            flexWrap: 'wrap',
            padding: '3px 0px',
            justifyContent: 'center',
        },
        item: {
            padding: '5px',
            width: 'fit-content'
        },
        menuLink: {
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: '500',
            textAlign: 'center',
            textDecoration: 'none',
            color: theme.palette.primary.contrastText,
            '&:hover': {
                color: theme.palette.secondary.main
            },
            [theme.breakpoints.down('lg')]: {
                fontSize: '18px'
            }
        },
        toggleMenu: {
            display: 'none',
            [theme.breakpoints.down('md')]: {
                display: 'block',
                '& button': {
                    color: theme.palette.secondary.main
                }
            }
        },
        mobileMenu: {
            top: '35px',
            left: '30px',
            width: '50%',
            position: 'absolute',
            backgroundColor: theme.palette.primary.light,
            borderTop: '1px solid ' + theme.palette.primary.dark,
            [theme.breakpoints.up('md')]: {
                display: 'none'
            }
        },
        mobileList: {
            gap: '25px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        mobileItem: {
            width: 'fit-content'
        },
        mobileLink: {
            fontSize: '18px',
            cursor: 'pointer',
            fontWeight: '700',
            textAlign: 'center',
            textDecoration: 'none',
            color: theme.palette.primary.contrastText,
            '&:hover': {
                color: theme.palette.secondary.main
            }
        },
        show: {
            display: 'block'
        },
        hide: {
            display: 'none'
        },
        cart: {
            gap: '4px',
            display: 'flex',
            fontWeight: '800',
            alignItems: 'center',
            color: theme.palette.primary.contrastText,
            '&:hover': {
                color: theme.palette.secondary.main
            },
            '& svg': {
                color: theme.palette.secondary.main
            }
        },
    }
});

export default useStyles;