import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            margin: 0,
        },
        splide: {
            '&.splide__slide': {
                width: '100%',
                marginLeft: '0px !important',
                marginRight: '0px !important',
                '& img': {
                    width: '100%'
                }
            }
        },
        imgContanier: {
            textAlign: 'center',
            position: 'relative',
            color: theme.palette.primary.contrastText,
        },
        overlay: {
            top: '50%',
            left: '50%',
            width: '100%',
            display: 'flex',
            padding: '14% 0',
            position: 'absolute',
            alignItems: 'center',
            flexDirection: 'column',
            transform: 'translate(-50%, -50%)',
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
            '& h2': {
                width: '69%',
                fontWeight: 'bold',
                fontStyle: 'italic',
                letterSpacing: '2px',
                marginBottom: '15px',
                [theme.breakpoints.down('lg')]: {
                    fontSize: '2.5rem',
                    marginBottom: '5px'
                },
                [theme.breakpoints.down('md')]: {
                    fontSize: '1.5rem'
                },
                [theme.breakpoints.down('sm')]: {
                    fontSize: '0.8rem'
                }
            },
            '& h5': {
                fontStyle: 'italic',
                letterSpacing: '2px',
                marginBottom: '15px',
                [theme.breakpoints.down('md')]: {
                    fontSize: '1rem',
                    marginBottom: '5px'
                },
                [theme.breakpoints.down('sm')]: {
                    fontSize: '0.5rem'
                }
            }
        },
        about: {
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
            },
            [theme.breakpoints.down('md')]: {
                padding: '2px',
                '& h6': {
                    fontSize: '0.5rem'
                },
            },
        },
    }
});

export default useStyles;