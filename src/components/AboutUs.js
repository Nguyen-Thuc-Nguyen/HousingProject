import React from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

export default function AboutUs() {
    return (
        <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
            marginTop={'50px'}
        >
            <Grid
                xs={6}
                item
                textAlign={'center'}
            >
                <Typography
                    variant='h5'
                >
                    CozyLiving
                </Typography>
                <Typography
                    variant='body'
                >
                    To CozyLiving, where comfort meets style in every product we offer. Our journey began with a shared vision between two passionate individuals, Alex and Jamie, who believed that everyone deserves a space that feels like a warm embrace. With backgrounds in interior design and e-commerce, they combined their expertise to create an online destination for home goods that not only look beautiful but also enhance the coziness of your living space.

                    At CozyLiving, we understand that your home is your sanctuary. That’s why we meticulously curate our collection to include only the finest products that promise quality, comfort, and elegance. From plush throw pillows and soft blankets to scented candles and artisanal decor, each item in our store is selected to help you build the cozy haven you’ve always dreamed of.

                    Our website is designed with you in mind, ensuring a seamless shopping experience from browsing to checkout. We believe that shopping for your home should be just as relaxing as the products we sell. So, sit back, relax, and let CozyLiving transform your home into a cozy retreat.pography
                </Typography>
            </Grid>
        </Grid>
    )
}
