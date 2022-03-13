import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles((theme) => ({
    main: {
        marginLeft: "54px",
        fontSize: "1.1em",
        // marginTop: "10%",
        height: "100vh",
        width: "70vw",
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "start",
    },
    links: {
        textDecoration: "none",
        color: "inherit"
    },
    h1: {
        fontSize: "2rem"
    }
}));