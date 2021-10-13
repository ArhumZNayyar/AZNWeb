import React, { Component } from 'react'  
import AppBar from '@material-ui/core/AppBar';  
import Toolbar from '@material-ui/core/Toolbar';  
import TextField from '@material-ui/core/TextField';  
import Checkbox from '@material-ui/core/Checkbox';  
export class Navbar extends Component {  
        render() {  
                return (  
                        <div>  
                                <AppBar position="static">  
                                        <Toolbar>  
                                         Arhum Z. Nayyar 
                                        </Toolbar>  
                                </AppBar>  
                                <TextField  
                                        placeholder="Placeholder"  
                                        label="TextBox" 
                                />  
                                <Checkbox  
                                        value="primary"  
                                        inputProps={{ 'aria-label': 'primary checkbox' }}  
                                />  
                        </div>  
                )  
        }  
}  
  
export default Navbar  