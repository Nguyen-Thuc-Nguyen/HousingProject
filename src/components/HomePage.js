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
                        Nội thất Ý cho ngôi nhà hiện đại
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
                            Cozy được hình thành từ năm 1995 với sứ mệnh mang đến những bộ sưu tập nội thất có thiết kế đương đại, chất lượng vượt trội từ các nước Italy, Đức, Nhật Bản với giá thành hợp lý nhất. Các sản phẩm từ sofa, bàn ăn đến từng lọ hoa trang trí,... tất cả được các Designers đến từ Italy và Australia thiết kế đồng bộ, tạo nên những không gian sống hoàn chỉnh và tinh tế nhất.
                        </Typography>
                    </Grid>
                </Grid>


            </Grid>
        </>
    );
}
