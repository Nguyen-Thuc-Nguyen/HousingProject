import { Avatar, Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
    const user = useSelector((state) => state.auth.currentAccount)
    const orders = useSelector((state) => state.auth.order)
    const ordersByAcc = orders.filter((item) => item.userId === user.id)

    return (
        <Box sx={{ maxWidth: 1200, margin: 'auto', marginTop: "30px", padding: 2 }}>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={3} lg={2}>
                        <Avatar variant='square' alt={user.fullName} src={user.avatar} sx={{ width: 140, height: 140, borderRadius: "10px" }} />
                    </Grid>
                    <Grid item xs={12} sm={8} md={9} lg={10}>
                        <Typography variant="h4" component="div" gutterBottom>
                            {user.fullName}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Email: {user.email}
                        </Typography>
                        <br />
                        <Typography variant="body1">
                            Date of Birth: {new Date(user.dateOfBirth).toLocaleDateString('en-GB')}
                        </Typography>
                    </Grid>
                </Grid>
                <br />
                <br />

                <Typography variant="h5" component="div" gutterBottom>
                    {/* Order History */}
                </Typography>
                <Grid container spacing={0}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Order ID</TableCell>
                                    <TableCell>Product Name</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Total</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {ordersByAcc.map((order) => {
                                    return (
                                        <TableRow>

                                            <TableCell>{order.orderId}</TableCell>
                                            <TableCell>{order.product.productName}</TableCell>
                                            <TableCell>${order.product.price}</TableCell>
                                            <TableCell>{order.quantity}</TableCell>
                                            <TableCell>${order.total}</TableCell>
                                            <TableCell>{order.status}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>



                </Grid>
            </Paper>
        </Box >
    )
}
