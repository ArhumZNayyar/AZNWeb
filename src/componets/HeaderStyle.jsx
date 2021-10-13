import { makeStyles } from "@material-ui/core"
import { Theme } from "./Theme"
import Image from '../assets/banner.jpg'

export const usageStyle = makeStyles(() => ({
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
        width: "100%",
        minHeight: "90vh",
        height: "auto",
        display: "flex",
        padding: "20px",
        flexFlow: "column wrap",
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        fontSize: "3rem"
    },
    headerDescription: {
        fontSize: "2rem"
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