import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCarts } from '../redux/Redux'

export default function Product() {
    const param = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userlog = useSelector((state) => state.auth.currentAccount)
    const authen = useSelector((state) => state.auth.isAuthenticated)
    const products = useSelector((state) => state.auth.product)
    const product = products.filter((product) => product.categories === param.categories)
    const shoppingCart = useSelector((state) => state.auth.shoppingCart)


    const addToCart = {
        "orderId": "",
        "userId": "",
        "product": {},
        "total": 0,
        "quantity": 0,
        "status": "open",
    }


    const generateID = () => {
        let flag = true;
        while (flag) {
            let randomNum = Math.floor(Math.random() * 100) + 1
            const setID = shoppingCart.find((item) => item.orderId === String(randomNum))
            if (!setID) {
                flag = false
                return String(randomNum);
            }
        }
    }
    const validateProduct = (product) => {
        for (let key in product) {
            if (product[key] === '') {
                return false;
            }
        }
        return true;
    }

    const handleAddCart = (prod) => {
        const orderId = generateID()
        const userId = userlog.id
        const product = prod
        const newAddToCart = { ...addToCart, orderId, userId, product }
        let flag = true;
        shoppingCart.forEach(element => {
            if (element.product.id === product.id) {
                flag = false
            }
        });
        if (flag) {
            if (validateProduct(newAddToCart)) {
                dispatch(addToCarts(newAddToCart))
                navigate(`/buy/${param.categories}`);
            }
        } else {
            window.alert("Product already in cart")
        }
    }
    return (
        <>
            <Box
                maxWidth={'1300px'}
                margin={'auto'}
                marginTop={'80px'}
            >
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                >

                    {product.map((pro) => {
                        return (
                            <Grid xs={5} item>
                                <Card key={pro.id} sx={{ position: 'relative', marginBottom: '20px' }}>
                                    <CardMedia
                                        component="img"
                                        height="550px"
                                        image={pro.images}
                                        alt="Paella dish">
                                    </CardMedia>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {pro.productName}
                                        </Typography>
                                        <br />
                                        <Typography variant="body2" color="text.secondary">
                                            ${pro.price}
                                        </Typography>
                                    </CardContent>
                                    {!authen ? "" :
                                        <CardActions>
                                            <Button onClick={() => handleAddCart(pro)} variant="contained" sx={{ justifyContent: 'right' }} color="info">
                                                Buy Now
                                            </Button>
                                        </CardActions>
                                    }
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid >
            </Box >
        </>
    )
}
