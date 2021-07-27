import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '&.MultiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97px',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
    },
}));