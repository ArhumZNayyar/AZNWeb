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
    }
}))