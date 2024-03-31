import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import { theme } from '../theme/MyTheme';



export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleHover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: 'inline-flex' }}>
                        <Typography variant="h5" component="div" sx={{}}>
                            CozyLiving
                        </Typography>

                        <Button sx={{ marginLeft: 8 }} color="inherit"><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/">Home</Link></Button>
                        <Button
                            sx={{ marginLeft: 4, color: theme.palette.text.primary }}
                            color="inherit"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onMouseEnter={handleHover}
                        >
                            Product
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Sofas</MenuItem>
                            <MenuItem onClick={handleClose}>Living Room</MenuItem>
                            <MenuItem onClick={handleClose}>Dining Room</MenuItem>
                            <MenuItem onClick={handleClose}>Bedroom</MenuItem>
                        </Menu>
                        <Button sx={{ marginLeft: 4 }} color="inherit"><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/">About Us</Link></Button>
                        <Button sx={{ marginLeft: 4 }} color="inherit"><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/">Contact</Link></Button>

                    </Box>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box >
    )
}
