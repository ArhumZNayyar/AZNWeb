import { Box, Hidden } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React from 'react'
import { bodyStyling } from './BodyStyle'
import Image from '../assets/about.jpg'
import { RenderHeader } from './GeneralComponents'
import { Container } from '@material-ui/core'

export default function About() {
    const classes = bodyStyling()
    return (
        <Box className = {classes.BodySection}>
            <Container> 
            <Grid container spacing = {1}>
                <Grid item sm={5}> 
                 <img src = {Image} alt = "about me" className = {classes.responsiveImage} />
                </Grid>
                <Grid item xs={12} sm={7}> 
                    {RenderHeader({smText: "About Me", head: "Arhum Z. Nayyar", description: "I'm currently a student"})}
                </Grid>
            </Grid>
            </Container>
        </Box>
    )
}
