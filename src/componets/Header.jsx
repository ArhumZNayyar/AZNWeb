import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { usageStyle } from './HeaderStyle'
import Navbar from '../Navbar'
import { Eyecandy } from './GeneralComponents'
import { ArrowDownward } from '@material-ui/icons';

export default function Header() {
    const headerClass = usageStyle() 
    return (
        <Box className = {headerClass.headerWrap}>
            <Navbar/>
            <Box className={headerClass.headerContainer}>
                <Typography variant = "h3" component = "h4" className = {headerClass.headerTitle}>
                    Hello World!
                </Typography>
                <Typography variant = "h3" component = "h4" className = {headerClass.headerDescription}>
                    Fullstack developer placeholder placeholder
                </Typography>
                {Eyecandy({Label: "About Me", withIcon: true, Icon:<ArrowDownward/>})}
            </Box>
        </Box>
    )
}
