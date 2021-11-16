import React from 'react'
import {Box, Typography} from '@material-ui/core';
import { usageStyle } from './HeaderStyle'
import { bodyStyling } from './BodyStyle'


export const Eyecandy = ({Label, withIcon, Icon, Stylage}) => {
    const headerClass = usageStyle();
    return (
        <Box className = {headerClass.eyeCandy} Stylage = {Stylage}>
        <Typography variant = "span" className = {headerClass.eyeCandyText}>
            {Label}
        </Typography>
        {withIcon ? (
         <Typography variant = "span" className = {headerClass.arrow}>
            {Icon}
        </Typography> 
        ) : null}
    </Box>
    );
};

export const Divider = () => {
    const bodyClass = bodyStyling();
    return <Typography variant = "span" className = {bodyClass.Divider}> </Typography>
}

export const RenderHeader = ({smText, head, description, alignCenter}) => {
    const bodyClass = bodyStyling();
    return ( <Box>
    {Eyecandy({Label:smText, withIcon: false, Stylage: alignCenter ? {width: "100px", margin: "10px auto"} : {}, })}
    <Typography variant = 'h4' align = {alignCenter ? "center" : "left"} className={bodyClass.headSection}> {head} </Typography>
    {Divider()}
    <Typography variant = 'body1' align = {alignCenter ? "center" : "left"} component = 'h6' className={bodyClass.headSection}> {description} </Typography>
    </Box>
    );
}