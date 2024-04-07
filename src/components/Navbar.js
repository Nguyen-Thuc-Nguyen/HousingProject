import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import { theme } from '../theme/MyTheme';
import '../css/Homepage.css'



export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    let open = Boolean(anchorEl);

    const handleClick = (event) => {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleHover = () => {
        open = true
    };

    const handleClose = () => {
        open = false
        setTimeout(() => {
            if (!open) {
                setAnchorEl(null);
            }
        }, [50])

    };

    console.log(anchorEl)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: 'inline-flex', py: '20px' }}>
                        <Typography variant="h5" component="div" sx={{}}>
                            <img className='logoHeader' alt='' src='https://cozyliving.com.vn/cdn/shop/files/LOGO_COZY_1_569x330_afe5176a-c793-41c3-9075-afb99c972370.svg?v=1685772380&width=120'></img>
                        </Typography>

                        <Button sx={{ marginLeft: 8 }} color="inherit"><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/">Home</Link></Button>

                        <Button
                            sx={{
                                marginLeft: 4,
                                color: theme.palette.text.primary,
                                zIndex: 2
                            }}
                            variant='text'
                            color="inherit"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onMouseEnter={handleClick}
                            onMouseLeave={handleClose}
                        >
                            Product

                        </Button>
                        <Menu
                            sx={{
                                zIndex: 1
                            }}
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                onMouseEnter: handleHover,
                                onMouseLeave: handleClose
                            }}
                            getContentAnchorEl={null}
                            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                        >
                            <MenuItem onClick={handleClose}>Sofas</MenuItem>
                            <MenuItem onClick={handleClose}>Living Room</MenuItem>
                            <MenuItem onClick={handleClose}>Dining Room</MenuItem>
                            <MenuItem onClick={handleClose}>Bedroom</MenuItem>
                        </Menu>
                        <Button sx={{ marginLeft: 4 }} color="inherit"><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/About">About Us</Link></Button>

                    </Box>
                    <Button color="inherit"><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/login">Login</Link></Button>
                </Toolbar>
            </AppBar>
        </Box >
    )
}
