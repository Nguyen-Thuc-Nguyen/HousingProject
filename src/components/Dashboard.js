import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, MenuItem, Modal, Pagination, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct, deleteProduct, updateProduct } from '../redux/Redux';

export default function Dashboard() {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const product = useSelector(state => state.auth.product)

    const itemPerPage = 6;

    const [page, setPage] = useState(1)

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const logged = useSelector(state => state.auth.isAuthenticated)

    const generateID = () => {
        let flag = true;
        while (flag) {
            let randomNum = Math.floor(Math.random() * 100) + 1
            const setID = product.find((product) => product.id === String(randomNum))
            console.log(setID)
            if (!setID) {
                flag = false
                return String(randomNum);
            }
        }
    }

    console.log(logged)
    useEffect(() => {
        if (!logged) {
            navigate('/');
        }
    }, [logged, navigate]);

    const [addNewProduct, setaddNewProduct] = useState({
        "productName": "",
        "price": 0,
        "categories": "",
        "images": "",
        "id": ""
    })

    const [updateProducts, setUpdateProducts] = useState({
        "productName": "",
        "price": 0,
        "categories": "",
        "images": "",
        "id": ""
    })

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const validateProduct = (product) => {
        for (let key in product) {
            if (product[key] === '') {
                return false;
            }
        }
        return true;
    }

    const handleDeleteProduct = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            dispatch(deleteProduct(id))
        }
    }

    const handleAddProduct = () => {
        const id = generateID();
        const newProduct = { ...addNewProduct, id };
        if (validateProduct(newProduct)) {
            if (window.confirm("Are you sure you want to add this product?")) {
                dispatch(addProduct(newProduct))
            }
        } else {
            alert('Please fill in all fields.');
        }
    }
    const handleUpdateProduct = (update) => {
        if (validateProduct(update)) {
            if (window.confirm("Are you sure you want to update this product?")) {
                dispatch(updateProduct(update))
                setOpen(false)
            }
        } else {
            alert('Please fill in all fields.');
        }
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setaddNewProduct({ ...addNewProduct, images: reader.result });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };


    return (
        <>
            <Container sx={{ marginTop: '50px' }} maxWidth="xl">
                <Grid container spacing={0}>
                    <Grid container gap={2} display={'flex'} textAlign={'center'} xs={3} sx={{ height: '550px' }} padding={2} borderRadius={3} border={1}>
                        <Grid xs={12} >
                            <Typography variant='h5' component={'div'}>ADD PRODUCT</Typography>
                        </Grid>
                        <Grid xs={12} >
                            <TextField
                                sx={{ width: '100%' }}
                                size='small'
                                id=""
                                label="Product Name"
                                value={addNewProduct.productName}
                                onChange={(e) => setaddNewProduct({ ...addNewProduct, productName: e.target.value })}
                            />
                        </Grid>
                        <Grid xs={12} >
                            <TextField
                                sx={{ width: '100%' }}
                                type="number"
                                size='small'
                                id=""
                                label="Price"
                                value={addNewProduct.price}
                                onChange={(e) => setaddNewProduct({ ...addNewProduct, price: e.target.value })}
                            />
                        </Grid>
                        <Grid xs={12}>

                            <Select
                                size='small'
                                sx={{ width: '100%' }}
                                value={addNewProduct.categories}
                                defaultValue='Sofas'
                                onChange={(e) => setaddNewProduct({ ...addNewProduct, categories: e.target.value })}
                            >
                                <MenuItem value={'sofas'}>Sofas</MenuItem>
                                <MenuItem value={'living room'}>Living room</MenuItem>
                                <MenuItem value={'dining room'}>Dining room</MenuItem>
                                <MenuItem value={'bedroom'}>Bedroom</MenuItem>

                            </Select>
                        </Grid>
                        <Grid xs={12}>
                            <TextField
                                sx={{ width: '100%' }}
                                type='file'
                                onChange={(e) => handleFileChange(e)}
                            />
                        </Grid>
                        <Grid xs={12} spacing={0}>
                            <Button sx={{ width: '70%' }} onClick={() => handleAddProduct(addNewProduct)} variant='contained' type='submit' size='small'>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container xs={9}  >

                        <Grid
                            xs={12}
                            container
                            gap={4}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            alignContent="center"
                            wrap="wrap"
                        >
                            {product
                                .slice((page - 1) * itemPerPage, page * itemPerPage)
                                .map((item, index) => (
                                    <>
                                        <Grid xs={4}>
                                            <Card sx={{ height: '550px' }}>
                                                <CardMedia
                                                    sx={{ height: '320px' }}
                                                    image={item.images}
                                                />
                                                <CardContent>
                                                    <Grid container spacing={0}>
                                                        <Grid xs="12">
                                                            <Typography
                                                                gutterBottom
                                                                variant='h5'
                                                                component='div'
                                                            >
                                                                {item.productName}
                                                            </Typography>
                                                            <Typography
                                                                gutterBottom
                                                                variant='body2'
                                                                component='div'
                                                                sx={{ textTransform: 'UpperCase' }}
                                                            >
                                                                {item.categories}
                                                            </Typography>
                                                        </Grid>
                                                        <br />
                                                        <Grid xs="12">
                                                            <Typography
                                                                gutterBottom
                                                                variant='body1'
                                                                component='div'
                                                            >
                                                                ${item.price}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>

                                                </CardContent>
                                                <CardActions>
                                                    <Button gutterBottom onClick={() => handleDeleteProduct(item.id)} variant='contained' color='error' size="small">
                                                        DELETE
                                                    </Button>
                                                    <Button gutterBottom variant='contained' color='success' size="small" onClick={() => { handleOpen(); setUpdateProducts(item); }}>
                                                        UPDATE
                                                    </Button>

                                                    <Modal
                                                        open={open}
                                                        onClose={handleClose}
                                                        sx={{
                                                            '& .MuiBackdrop-root': {
                                                                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                                            },
                                                        }}
                                                        keepMounted
                                                    >
                                                        <Box sx={{ borderRadius: 3, bgcolor: 'white', p: 2, maxWidth: '500px', margin: 'auto', marginTop: '150px' }}>
                                                            <Grid container gap={2} display={'flex'} textAlign={'center'} xs={12} sx={{ height: '550px' }} padding={2} borderRadius={3} >
                                                                <Grid xs={12} >
                                                                    <Typography variant='h5' component={'div'}>UPDATE PRODUCT {updateProducts.id}</Typography>
                                                                </Grid>
                                                                <Grid xs={12} >
                                                                    <TextField
                                                                        sx={{ width: '100%' }}
                                                                        size='small'
                                                                        id=""
                                                                        label={`Product Name`}
                                                                        value={updateProducts.productName}
                                                                        onChange={(e) => setUpdateProducts({ ...updateProducts, productName: e.target.value })}
                                                                    />
                                                                </Grid>
                                                                <Grid xs={12} >
                                                                    <TextField
                                                                        sx={{ width: '100%' }}
                                                                        size='small'
                                                                        id=""
                                                                        label="Price"
                                                                        value={updateProducts.price}
                                                                        onChange={(e) => setUpdateProducts({ ...updateProducts, price: e.target.value })}
                                                                    />
                                                                </Grid>
                                                                <Grid xs={12}>
                                                                    <TextField
                                                                        size='small'
                                                                        sx={{ width: '100%' }}
                                                                        id=""
                                                                        type=''
                                                                        label="Categories"
                                                                        value={updateProducts.categories}
                                                                        onChange={(e) => setUpdateProducts({ ...updateProducts, categories: e.target.value })}
                                                                    />
                                                                </Grid>
                                                                <Grid xs={12}>
                                                                    <TextField
                                                                        size='small'
                                                                        sx={{ width: '100%' }}
                                                                        id=""
                                                                        type='url'
                                                                        label="Images"
                                                                        value={updateProducts.images}
                                                                        onChange={(e) => setUpdateProducts({ ...updateProducts, images: e.target.value })}
                                                                    />
                                                                </Grid>
                                                                <Grid xs={12} spacing={0}>
                                                                    <Button sx={{ width: '70%' }} onClick={() => handleUpdateProduct(updateProducts)} variant='contained' type='submit' size='small'>
                                                                        Update
                                                                    </Button>
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                    </Modal>
                                                </CardActions>
                                            </Card>
                                        </Grid>

                                    </>
                                ))}

                        </Grid>
                        <Grid xs={12} item>
                            <Box
                                sx={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: 5 }}
                            >
                                <Pagination
                                    count={Math.ceil(product.length / itemPerPage)}
                                    page={page}
                                    onChange={handleChangePage}
                                    variant="outlined"
                                    shape="rounded" />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid >
            </Container >
        </>
    )
}
