import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { usageStyle } from './HeaderStyle'
import Navbar from './Navbar'

export default function Header() {
    const headerClass = usageStyle() 
    return (
        <Box className = {headerClass.headerWrap}>
            <Navbar/>
            <Box className={headerClass.headerWrap}>
                <Typography variant = "h2">Hello World!</Typography>
            </Box>
        </Box>
    )
}
