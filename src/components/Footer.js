import { Box, Grid, List, ListItem, ListItemText, Typography, TextField, Button, ListItemIcon } from '@mui/material'
import React from 'react'
import '../css/Homepage.css'
import { theme } from '../theme/MyTheme'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <Box sx={{ bgcolor: 'primary.main', mt: 5, py: 10, px: 20 }}>
            <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="center"
                alignContent="center"
                wrap="wrap"
            >
                <Grid
                    xs={3}
                    item
                >
                    <Typography
                        variant='h5'
                    >
                        <List
                            sx={{ width: '100%', maxWidth: 360, fontSize: theme.typography.footerItem }}
                            component="nav"
                            dense={true}
                        >
                            <ListItem>
                                <img className='logo' alt='' src='https://cozyliving.com.vn/cdn/shop/files/LOGO_COZY_1_569x330_afe5176a-c793-41c3-9075-afb99c972370.svg?v=1685772380&width=120'></img>
                            </ListItem>
                        </List>
                    </Typography>

                </Grid>
                <Grid
                    xs={3}
                    item
                >
                    <List
                        sx={{ width: '100%', maxWidth: 360, fontSize: 13 }}
                        component={'div'}
                        dense={true}
                    >
                        <ListItem>

                            DELIVERY<br />
                            GUARANTEE<br />
                            MAINTENANCE<br />
                            ORDER<br />
                            FAQ<br />
                            SECURITY<br />
                            SHOP<br />
                            CONTACT<br />
                        </ListItem>
                    </List>
                </Grid>
                <Grid
                    xs={3}
                    item
                >
                    <List
                        sx={{ width: '100%', maxWidth: 360, fontSize: theme.typography.footerItem.fontSize, color: theme.typography.footerItem.color }}
                        component={'nav'}
                        dense={true}
                    >
                        <ListItem>
                            ABOUT COZY<br />
                            WHY CHOOSE COZY<br />
                            CHARITY FUND<br />
                            PRIZE<br />
                            COMPANY NEWS<br />
                            INTERIOR NEWS<br />
                            SITEMAP<br />
                            COLLECTION<br />
                        </ListItem>
                    </List>

                </Grid>
                <Grid
                    xs={3}
                    item
                >
                    <Typography
                        variant='h5'
                    >
                        <List
                            sx={{ width: '100%', maxWidth: 360, fontSize: theme.typography.footerItem.fontSize, color: theme.typography.footerItem.color }}
                            component="nav"
                            dense={true}
                        >
                            <ListItem>
                                <ListItemText>Đăng ký để nhận ưu đãi</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText primaryTypographyProps={{
                                    style: {
                                        fontSize: '10px'
                                    }
                                }}>
                                    Đăng ký để nhận ngay ưu đãi của COZY dành cho đơn hàng đầu tiên!
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <TextField
                                    label="Email"
                                    color='secondary'
                                    variant='standard'
                                />
                            </ListItem>
                            <ListItem>
                                <Button variant='text' sx={{ fontSize: '0.7rem', border: 1, borderRadius: 0, px: 2 }} color='secondary'>
                                    Đăng ký
                                </Button>
                            </ListItem>
                        </List>
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
            >
                <Grid
                    xs={9}
                    item
                >
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            fontSize: theme.typography.footerItem.fontSize,
                            color: theme.typography.footerItem.color,
                            textAlign: 'left'
                        }}
                        component="nav"
                        dense={true}
                    >
                        <ListItem>
                            © 2024 Cozy Living Company Limited | Registration
                        </ListItem>
                        <ListItem>
                            Number: 0304228535 | All right reserved
                        </ListItem>
                    </List>
                </Grid>
                <Grid
                    xs={3}
                    item
                >
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            textAlign: 'right'
                        }}
                        component="nav"
                        dense={true}
                    >
                        <ListItem>
                            <ListItemIcon>
                                <Button color='secondary'>
                                    <FacebookIcon />
                                </Button>
                                <Button color='secondary'>
                                    <InstagramIcon />
                                </Button>
                                <Button color='secondary'>
                                    <YouTubeIcon />
                                </Button>
                            </ListItemIcon>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box >
    )
}
