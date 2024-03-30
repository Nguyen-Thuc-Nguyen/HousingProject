import React from 'react'

import { Box, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import carousel_1 from '../data/img/carousel1.jpg'
import carousel_2 from '../data/img/carousel2.jpg'
import carousel_3 from '../data/img/carousel3.jpg'
import carousel_4 from '../data/img/carousel4.jpg'
import { theme } from '../theme/MyTheme';

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
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

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
                            zIndex:1000
                        }
                    }}
                >
                    {
                        images.map((image) => (
                            <Box key={image.label}>
                                <img
                                    style={{
                                        display: 'block',
                                        overflow: 'hidden',
                                        width: '100vw',
                                        height: '500px',
                                        objectFit: 'cover',
                                        objectPosition: 'center'

                                    }}
                                    src={image.imgPath}
                                    alt={image.label}
                                />
                            </Box>
                        ))
                    }
                </Carousel>
                
            </Grid>
        </Grid >
    );
}
