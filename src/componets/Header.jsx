import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { usageStyle } from './HeaderStyle'
import Navbar from '../Navbar'

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
            </Box>
        </Box>
    )
}
