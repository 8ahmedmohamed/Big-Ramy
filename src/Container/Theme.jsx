import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            margin: 0
        },
        scrollToTop: {
            display: 'flex',
            borderRadius: '50% !important',
            alignItems: 'center',
            justifyContent: 'center',
            '&.dirRight': {
                left: '40px !important',
                right: 'auto',
            }
        }
    }
});

export default useStyles;