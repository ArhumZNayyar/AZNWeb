import React from 'react'
import {Box, Typography} from '@material-ui/core';
import { usageStyle } from './HeaderStyle'
import { ArrowDownward } from '@material-ui/icons';

export const Eyecandy = ({Label, withIcon, Icon}) => {
    const headerClass = usageStyle();
    return (
        <Box className = {headerClass.eyeCandy}>
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