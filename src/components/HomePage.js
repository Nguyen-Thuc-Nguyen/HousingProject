import React, { useState } from 'react'

import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import carousel_1 from '../data/img/carousel1.jpg'
import carousel_2 from '../data/img/carousel2.jpg'
import carousel_3 from '../data/img/carousel3.jpg'
import carousel_4 from '../data/img/carousel4.jpg'
import { Link } from 'react-router-dom';

export default function HomePage() {

    const images = [
        {
            imgPath: carousel_1
        },
        {
            imgPath: carousel_2,
        },
        {
            imgPath: carousel_3,
        },
        {
            imgPath: carousel_4,
        },

    ];
    const [activeStep, setActiveStep] = useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const [hover, setHover] = useState(false);




    return (
        <>
            <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                wrap="wrap"

            >
                <Grid xs={12} item>
                    <Carousel
                        activeStep={activeStep}
                        onChange={handleStepChange}
                        indicatorIconButtonProps={{
                            style: {
                                marginTop: '-110px',
                                zIndex: 1000
                            }
                        }}
                        animation='slide'
                        swipe='true'
                    >
                        {
                            images.map((image) => (
                                <Box key={image.label} sx={{ position: 'relative', }}>
                                    <img
                                        style={{
                                            display: 'block',
                                            overflow: 'hidden',
                                            width: '100vw',
                                            height: '560px',
                                            objectFit: 'cover',
                                            objectPosition: 'center',

                                        }}
                                        src={image.imgPath}
                                        alt={image.label}
                                    />
                                    <Box
                                        position={'absolute'}
                                        display={'flex'}
                                        sx={{
                                            top: 0,
                                            left: 0,
                                            width: '100vw',
                                            height: '560px',
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            zIndex: 500
                                        }}
                                    >
                                        <Typography
                                            variant='h5'
                                            sx={{
                                                margin: 'auto',
                                                color: 'white',
                                                textAlign: 'center'
                                            }}
                                        >

                                            “A house is made of walls and beams, a home is built with love and dreams.”
                                            <br />
                                            <Button
                                                variant={hover ? 'contained' : 'outlined'}
                                                sx={{
                                                    margin: 'auto',
                                                    marginTop: '20px',
                                                }}
                                                onMouseEnter={() => setHover(true)}
                                                onMouseLeave={() => setHover(false)}
                                            >
                                                <Link
                                                    style={{
                                                        color: hover ? 'black' : 'white',
                                                        textDecoration: 'none',
                                                    }}
                                                >
                                                    Contact Us
                                                </Link>

                                            </Button>
                                        </Typography>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Carousel>
                </Grid>
            </Grid >
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
                    xs={6}

                    item>
                    <Typography
                        variant='h5'
                        sx={{ textAlign: 'center' }}
                    >
                        Italian furniture for modern homes
                    </Typography>
                    <Grid xs={12}
                        sx={{
                            marginTop: 2
                        }}
                        item>
                        <Typography
                            variant='body1'
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            Cozy was formed in 1995 with the mission of bringing furniture collections with contemporary design and outstanding quality from Italy, Germany,
                            and Japan at the most reasonable prices. Products range from sofas, dining tables to decorative flower vases, etc. All are designed synchronously by designers from Italy and Australia, creating the most complete and sophisticated living spaces.
                        </Typography>
                    </Grid>
                </Grid>


            </Grid>
            <Grid
                bgcolor={"whitesmoke"}
                container
                spacing={5}
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
                marginTop={"40px"}
                padding={"20px"}
                py={"80px"}
            >
                <Grid
                    xs={5}
                    item>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height=""
                            image={"https://cozyliving.com.vn/cdn/shop/files/CARLO_1024x_55773c1b-c9bf-4854-87f5-8ec518b92ce6.jpg?v=1685785332&width=750"}
                            title="Contemplative Reptile"
                        />
                    </Card>
                </Grid>
                <Grid
                    xs={5}
                    item>
                    <Typography variant="h4" color="initial">CARLO FORCOLINI</Typography>
                    <br />

                    <Typography variant="body1" color="initial">
                        TALENTED DESIGN DIRECTOR</Typography>
                    <br />
                    <br />

                    <Typography variant="body2" color="initial">
                        Carlo Forcolini is a particularly famous designer in the world's interior design industry. He owns many international exhibitions in Madrid, Los Angeles, London, Hamburg, Cologne, Tokyo, Sydney, Santiago del Chile, Oslo. Carlo Forcolini was born in Como, Italy. He graduated from the University of Fine Arts in Milan before succeeding as a co-founder of Alias ​​(1979), Nemo (1993) and OYLight (2005). During his extremely successful career, he created more than a hundred works (furniture, watches, objects, etc.) inspired by literature, cinema and art.
                        His designs are in the collections of the Cooper Hewitt Museum of Design in New York, the Museum of Decorative Arts in Paris, and in the Collection of the History of Italian Design at the Museum of Fine Arts in Milan.
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}
