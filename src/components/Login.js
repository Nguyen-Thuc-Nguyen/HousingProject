import React, { useState } from 'react'
import '../css/Login.css'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginSuccess, loginFailure } from '../redux/Redux'

export default function Login() {

    const [error, setError] = useState('')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [login, setLogin] = useState(
        {
            "email": "",
            "password": ""
        }
    )


    const users = useSelector((state) => state.auth.user)


    const handleLogin = () => {
        const user = users.find((userAuthen) => userAuthen.email === login.email && userAuthen.password === login.password)
        console.log(user)
        if (user) {
            setError('')
            dispatch(loginSuccess(user))
            navigate('/')
        } else {
            setError('Invalid Username or Password !!')
            dispatch(loginFailure())
            navigate('/login')
        }
    }



    return (

        <Box
            display={'flex'}
            maxWidth={'500px'}
            margin={'auto'}
            marginTop={'100px'}
            padding={3}
            border={1}
            borderRadius={2}
        >
            <Grid container gap={2}>
                <Grid xs={12}>
                    <h2>LOGIN FORM</h2>
                </Grid>
                <Grid xs={12}>
                    <TextField
                        sx={{ width: '100%' }}
                        type='text'
                        id=""
                        label="Email"
                        value={login.email}
                        onChange={(e) => setLogin({ ...login, email: e.target.value })}
                    />
                </Grid>
                <Grid xs={12}>
                    <TextField
                        sx={{ width: '100%' }}
                        type='text'
                        id=""
                        label="Password"
                        value={login.password}
                        onChange={(e) => setLogin({ ...login, password: e.target.value })}
                    />
                </Grid>
                <Grid xs={12}>
                    <Typography sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }} variant="body2" color="initial">
                        <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}> Don't have an acccount ?</Link>
                    </Typography>
                </Grid>
                <Grid xs={12} display={'flex'} justifyContent={'center'}>
                    <Button onClick={handleLogin} variant='contained' sx={{ width: '200px' }} type='submit'>
                        Login
                    </Button>
                </Grid>

                {error && ( // Display the error message if there is one
                    <Grid xs={12}>
                        <p style={{ marginLeft: 1, color: 'red' }}>{error}</p>
                    </Grid>
                )}
            </Grid>

        </Box>
    )
}
