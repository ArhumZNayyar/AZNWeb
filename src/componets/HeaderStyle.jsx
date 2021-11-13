import { makeStyles } from "@material-ui/core"
import { Theme } from "./Theme"
import Image from '../assets/banner.jpg'

export const usageStyle = makeStyles((theme) => ({
    headerWrap:{
        background: `linear-gradient(to bottom right,#04303140, #00606473),url(${Image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: '100%',
        minHeight: "90vh",
        height: "auto"
    //  backgroundColor: Theme.themeColor.base,
    },
    headerContainer: {
        color: Theme.themeColor.back,
        fontFamily: "roboto",
        width: "85%",
        minHeight: "90vh",
        height: "auto",
        display: "flex",
        padding: "20px",
        flexFlow: "column wrap",
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        fontSize: "3rem",
        margin: theme.spacing(1, 0),
        [theme.breakpoints.down("xs")]: {
        fontSize: "2rem",
        },
    },
    headerDescription: {
        fontSize: "2rem",
        margin: theme.spacing(1, 0),
        [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem",
        margin: theme.spacing(2, 0),
        },
    },
    eyeCandy: {
        position: "relative",
        marginTop: "20px",
        display: "flex",
        fontWeight: "bolder",
        fontFamily: "roboto",
        '&:before': {
            width: "40px",
            height: "40px",
            backgroundColor: Theme.themeColor.primary,
            content: '""',
            borderRadius: "50%"
        }
    },
    eyeCandyText: {
        position: "absolute",
        lineHeight: "25px",
        left: "40px"
    },
    arrow: {
        animationName: "upDown",
        animationDuration: "0.7s",
        animationIterationCount: "infinite",
        position: "absolute",
        lineHeight: "50px",
        left: "95px"
    },
    '@global': {
        "@keyframes upDown": {
            "0%": {
              transform: "scale(1,1)",
              paddingTop: "0px",
            },
            "100%": {
              transform: "scale(1,2)",
              paddingTop: "10px",
            },
        }, 
    },
    navBar: {
        backgroundColor: Theme.themeColor.base,
        color: Theme.themeColor.back
    },
    navLink: {
        color: Theme.themeColor.back
    },
    toolBar: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
    }
}))