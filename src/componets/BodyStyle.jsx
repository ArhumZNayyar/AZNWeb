import { makeStyles } from "@material-ui/core";
import { Theme } from "./Theme";

export const bodyStyling = makeStyles((theme) => ({
    BodySection: {
        backgroundColor: Theme.themeColor.base,
        padding: theme.spacing(10, 0, 8, 0),
    },

    Divider: {
        width: "65px",
        height: "4px",
        backgroundColor: Theme.themeColor.primary,
    },

    responsiveImage: {
        width: "100%",
        height: "auto",
    },
}));