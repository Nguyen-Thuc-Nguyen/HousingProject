import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import { theme } from '../theme/MyTheme';
import '../css/Homepage.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/Redux';



export default function Navbar() {

    const dispatch = useDispatch()

    const logged = useSelector((state) => state.auth.currentAccount)
    const authen = useSelector((state) => state.auth.isAuthenticated)

    const [anchorEl1, setAnchorEl1] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);

    let open1 = Boolean(anchorEl1);
    let open2 = Boolean(anchorEl2);

    const handleClick1 = (event) => {
        if (anchorEl1 !== event.currentTarget) {
            setAnchorEl1(event.currentTarget);
        }
    };

    const handleHover1 = () => {
        open1 = true;
    };

    const handleClose1 = () => {
        open1 = false
        setTimeout(() => {
            if (!open1) {
                setAnchorEl1(null);
            }
        }, [300]);
    };


    const handleClick2 = (event) => {
        if (anchorEl2 !== event.currentTarget) {
            setAnchorEl2(event.currentTarget);
        }
    };

    const handleHover2 = () => {
        open2 = true
    };

    const handleClose2 = () => {
        open2 = false
        setTimeout(() => {
            if (!open2) {
                setAnchorEl2(null);
            }
        }, [300]);
    };

    const handleLogout = () => {
        dispatch(logout())
        handleClose2()
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: 'inline-flex', py: '20px' }}>
                        <Typography variant="h5" component="div" sx={{}}>
                            <img className='logoHeader' alt='' src='https://cozyliving.com.vn/cdn/shop/files/LOGO_COZY_1_569x330_afe5176a-c793-41c3-9075-afb99c972370.svg?v=1685772380&width=120'></img>
                        </Typography>

                        <Button sx={{ marginLeft: 8 }} color="inherit"><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/">Home</Link></Button>
                        {logged.role !== 'admin' ?
                            "" :
                            <Button sx={{ marginLeft: 4 }} color="inherit"><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/dashboard">Dashboard</Link></Button>
                        }
                        <Button
                            sx={{
                                marginLeft: 4,
                                color: theme.palette.text.primary,
                                zIndex: 2
                            }}
                            variant='text'
                            color="inherit"
                            id="basic-button"
                            aria-controls={open1 ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open1 ? 'true' : undefined}
                            onMouseEnter={handleClick1}
                            onMouseLeave={handleClose1}
                        >
                            Product
                        </Button>

                        <Menu
                            sx={{
                                zIndex: 1
                            }}
                            id="basic-menu"
                            anchorEl={anchorEl1}
                            open={open1}
                            onClose={handleClose1}
                            MenuListProps={{
                                onMouseEnter: handleHover1,
                                onMouseLeave: handleClose1
                            }}
                            // getContentAnchorEl={null}
                            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                        >
                            <MenuItem onClick={handleClose1}><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/product/sofas">Sofas</Link></MenuItem>
                            <MenuItem onClick={handleClose1}><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/product/living room">Living Room</Link></MenuItem>
                            <MenuItem onClick={handleClose1}><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/product/dining room">Dining Room</Link></MenuItem>
                            <MenuItem onClick={handleClose1}><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/product/bedroom">Bedroom</Link></MenuItem>
                        </Menu>
                        <Button sx={{ marginLeft: 4 }} color="inherit"><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/About">About Us</Link></Button>

                    </Box>
                    {authen ?
                        <>
                            <Button
                                sx={{
                                    color: theme.palette.text.primary,
                                    zIndex: 2,
                                    marginRight: 2
                                }}
                                variant='text'
                                color="inherit"
                                id="basic-button2"
                                aria-controls={open2 ? 'basic-avatar' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open2 ? 'true' : undefined}
                                onMouseEnter={handleClick2}
                                onMouseLeave={handleClose2}
                            >
                                <img src={logged.avatar} style={{ width: '52px', height: '52px', borderRadius: "50%" }} alt="avatar" />
                            </Button>
                            <Menu
                                sx={{
                                    zIndex: 1
                                }}
                                id="basic-avatar"
                                anchorEl={anchorEl2}
                                open={open2}
                                onClose={handleClose2}
                                MenuListProps={{
                                    onMouseEnter: handleHover2,
                                    onMouseLeave: handleClose2
                                }}
                                // getContentAnchorEl={null}
                                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                            >
                                <MenuItem onClick={handleClose2}><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/profile">Profile</Link></MenuItem>
                                <MenuItem onClick={handleClose2}>< Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/buy/sofas">Shopping Cart</Link></MenuItem>
                                <MenuItem onClick={handleClose2}>< Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/purchase">Bills</Link></MenuItem>
                                <MenuItem onClick={handleLogout}><Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/product/sofas">Logout</Link></MenuItem>
                            </Menu>
                        </>
                        :
                        <Button color="inherit">
                            <Link style={{ textDecoration: "none", color: theme.palette.text.primary }} to="/login">
                                Login
                            </Link>
                        </Button>
                    }
                </Toolbar>
            </AppBar>
        </Box >
    )
}
