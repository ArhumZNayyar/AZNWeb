import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { usageStyle } from './componets/HeaderStyle';
import { Hidden } from '@material-ui/core';
import MenuOpenItem from '@material-ui/icons/MenuOpen';
import { MenuOpenRounded } from '@material-ui/icons';

export default function Navbar() {
    const navClass = usageStyle()
    const navLink = [
            {label: "Portfolio", Id: "portfolio"},
            {label: "About", Id: "about"},
            {label: "Contact", Id: "contact"}
    ];   
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className = {navClass.navBar}>
                <Toolbar className = {navClass.toolBar}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Arhum Z. Nayyar's Portfolio
                    </Typography>
                    {/*<Button color="inherit">Login</Button> */}
                    <Box component = {Hidden} xsDown>
                            <Box>
                                {navLink.map((item, index) => <Button className = {navClass.navLink}>{item.label}</Button>)}
                            </Box>
                    </Box>
                    <Box component = {Hidden} smUp>
                            <IconButton color = "inherit" onClick={() => console.log("Menu was clicked.")}>
                                    <MenuOpenRounded></MenuOpenRounded>
                            </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}