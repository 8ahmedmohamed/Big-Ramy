import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            margin: 0,
        },
        splide: {
            '&.splide__slide': {
                marginLeft: '0px !important',
                marginRight: '0px !important'
            }
        }
    }
});

export default useStyles;