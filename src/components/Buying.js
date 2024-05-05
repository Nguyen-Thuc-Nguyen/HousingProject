import { Box, Button, Card, CardActions, TextField, Typography, Grid, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addOrder, removeAllInCart } from '../redux/Redux';
export default function Buying() {
  const navigate = useNavigate()

  const logged = useSelector(state => state.auth.isAuthenticated)
  useEffect(() => {
    if (!logged) {
      navigate('/');
    }
  }, [logged, navigate]);

  const param = useParams()
  const dispatch = useDispatch()

  // const createOrder = useSelector((state) => state.auth.order)
  const carts = useSelector((state) => state.auth.shoppingCart)
  const userlog = useSelector((state) => state.auth.currentAccount)
  const myCarts = carts.filter((item) => item.userId === userlog.id && item.status === "open");
  const [addToCart, setAddToCart] = useState(myCarts)

  const handleDeleteFromCart = (item) => {
    if (window.confirm("Are you sure ?")) {
      setAddToCart(addToCart.filter((ele) => ele.orderId !== item.orderId))
    }
  }

  const handleProcessing = () => {
    let flag = false;
    addToCart.forEach(item => {
      if (item.quantity > 0) {
        item.status = "pending"
        flag = true;
      }
    })
    if (addToCart.length > 0) {
      if (flag) {
        if (window.confirm("Are you sure ?")) {
          dispatch(addOrder(addToCart))
          setAddToCart([])
          dispatch(removeAllInCart())
          navigate("/purchase")
        }
      } else {
        window.alert("Quantity must > 0")
      }
    } else {
      window.alert("Your Cart must not empty")
    }

  }
  console.log(addToCart)

  const handlechangeQuantity = (item, quantity) => {

    setAddToCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.orderId === item.orderId);

      if (existingItemIndex !== -1) {
        // Item already exists in the cart, update the quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = { ...updatedCart[existingItemIndex], quantity: quantity, total: quantity * item.product.price };
        return updatedCart;
      } else {
        // Item does not exist in the cart, add a new item
        return [...prevCart, { ...item, quantity: quantity }];
      }
    });
  }
  return (
    <>
      <Box maxWidth={"1000px"} margin={"auto"} marginTop={"80px"}   >
        <Typography textAlign={"center"} marginBottom={"40px"} variant="h5" color="initial">
          YOUR SHOPPING CART
        </Typography>
        <Grid container spacing={0} gap={2}>
          {addToCart.map((itemCart, index) => {

            return (
              <Grid xs={12} item key={index}>
                <Card>
                  <Grid container spacing={0} height={"200px"} sx={{ alignItems: "center", textAlign: 'center' }}>
                    <Grid xs={3}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={itemCart.product.images}
                      />
                    </Grid>
                    <Grid xs={3} sx={{ paddingLeft: '10px' }}>
                      <Typography variant="body2">{itemCart.product.productName}</Typography>
                    </Grid>
                    <Grid xs={2} >
                      <Typography variant="body2">${itemCart.product.price}</Typography>
                    </Grid >

                    <Grid item xs={2} key={index}>
                      <TextField
                        type="number"
                        label="Quantity"
                        size='small'
                        key={index}
                        value={itemCart.quantity}
                        onChange={(e) => {
                          handlechangeQuantity(itemCart, e.target.value)
                        }}
                      />
                    </Grid>
                    <Grid xs={2} item justifyContent={'right'}>
                      <CardActions >
                        <Button onClick={() => handleDeleteFromCart(itemCart)} variant="text" color="error">
                          <DeleteIcon />
                        </Button>
                      </CardActions>
                    </Grid>
                  </Grid>
                </Card>
              </Grid >
            )
          })}
        </Grid >
        <Box sx={{ width: '100%', textAlign: 'right', marginTop: '16px' }} >
          <Link to={`/product/${param.categories}`}>
            <Typography variant="body1" color="initial">
              Continue Shopping ?
            </Typography>
          </Link>
        </Box>
        <Box sx={{ width: '100%', textAlign: 'center' }} >
          <Button
            sx={{ marginTop: '10px', p: '10px', width: "200px" }}
            variant="contained" color="info"
            onClick={
              () => handleProcessing()
            }
          >
            Add to cart
          </Button>
        </Box>
      </Box >
    </>
  )

}
