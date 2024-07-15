import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            margin: 0
        },
        avatar: {
            height: '30px',
            padding: '10px',
            borderRadius: '15px',
            width: 'fit-content !important'
        },
        sliderImages: {
            marginBottom: '0px'
        },
        cardNumbers: {
            padding: '25px',
            marginBottom: '30px'
        },
        cardSlider: {
            padding: '25px',
            textAlign: 'center',
            '& h3': {
                fontWeight: 'bold',
                marginBottom: '15px'
            },
            '& .splide': {
                height: '500px'
            },
            '& .splide__track': {
                height: '490px'
            },
        },
        about: {
            fontWeight: 'bold',
            marginBottom: '30px'
        },
        moreContent: {
            gap: '10px',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px',
            justifyContent: 'flex-end',
            '& p': {
                fontSize: '15px',
                cursor: 'pointer',
                fontWeight: 'bold'
            },
            '& svg': {
                fontSize: '26px',
                cursor: 'pointer',
                color: theme.palette.primary.main
            }
        }
    }
});

export default useStyles;