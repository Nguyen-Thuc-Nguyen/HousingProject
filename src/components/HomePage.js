import React, { useState } from 'react'

import { Box, Button, Grid, Typography } from '@mui/material';
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
    );
}
