import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            margin: 0,
            width: '100%',
            display: 'flex',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            '& .MuiCircularProgress-root': {
                backgroundColor: 'transparent',
            }
        }
    }
});

export default useStyles;