import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

import { Link } from 'react-router-dom';
import { theme } from '../theme/MyTheme';



export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: 'inline-flex' }}>
                        <Typography variant="h5" component="div" sx={{}}>
                            CozyLiving
                        </Typography>

                        <Button sx={{ marginLeft: 8 }} color="inherit"><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/">Home</Link></Button>
                        <Button sx={{ marginLeft: 4 }} color="inherit"><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/">Products</Link></Button>
                        <Button sx={{ marginLeft: 4 }} color="inherit"><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/">About Us</Link></Button>
                        <Button sx={{ marginLeft: 4 }} color="inherit"><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/">Contact</Link></Button>

                    </Box>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
