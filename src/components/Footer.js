import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <Box sx={{ bgcolor: 'primary.main', color: 'white', mt: 5, py: 3 }}>
            <Container maxWidth="sm">
                <Typography variant="body1" align="center">
                    © 2024 CozyLiving
                </Typography>
            </Container>
        </Box>
    )
}
