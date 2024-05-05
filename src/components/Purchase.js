import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { completeOrder } from '../redux/Redux'

export default function Purchase() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logged = useSelector(state => state.auth.isAuthenticated)
    useEffect(() => {
        if (!logged) {
            navigate('/');
        }
    }, [logged, navigate]);



    const acc = useSelector((state) => state.auth.currentAccount)
    const orders = useSelector((state) => state.auth.order)
    const ordersByAcc = orders.filter((item) => item.userId === acc.id && item.status === "pending")

    const handlePayBill = () => {
        if (window.confirm("Are you sure ?")) {
            dispatch(completeOrder())
            window.alert("Thank you for trusting us.")
        }
    }

    let total = 0;
    if (ordersByAcc.length > 0) {
        ordersByAcc.forEach(element => {
            total += element.total
        })
        return (
            <Box maxWidth={"1200px"} margin={"auto"} marginTop={"80px"}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="right">Product Name</TableCell>
                                <TableCell align="right">Categories</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ordersByAcc.map((order) => (
                                <TableRow
                                    key={order.orderId}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {order.orderId}
                                    </TableCell>
                                    <TableCell align="right">{order.product.productName}</TableCell>
                                    <TableCell align="right">{order.product.categories}</TableCell>
                                    <TableCell align="right">{order.product.price}</TableCell>
                                    <TableCell align="right">{order.quantity}</TableCell>
                                    <TableCell align="right">{order.total}</TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell align="left" colSpan={1}>
                                    <Typography variant="body1">
                                        Total of Your Cart is ${total}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right" colSpan={6}>
                                    <Button onClick={() => handlePayBill()} variant="contained" color='info'>
                                        Pay the bill
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Box>
        )
    } else {
        return (
            <Box maxWidth={"1200px"} height="136px" margin={"auto"} marginTop={"80px"} textAlign={'center'}>
                <Typography variant="h5" color="red">You have not order any product yet !</Typography>
            </Box>
        )
    }

}
