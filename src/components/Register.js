import React, { useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { addUser, } from '../redux/Redux'
import { useDispatch, useSelector } from 'react-redux'


export default function Register() {
    const users = useSelector((state) => state.auth.user)

    const dispatch = useDispatch()

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const generateID = () => {
        let flag = true;
        while (flag) {
            let randomNum = Math.floor(Math.random() * 100) + 1
            const setID = users.find((user) => user.id === String(randomNum))
            console.log(setID)
            if (!setID) {
                flag = false
                return String(randomNum);
            }
        }
    }


    const [signUp, setSignUp] = useState(
        {
            "email": "",
            "fullName": "",
            "avatar": "",
            "password": "",
            "dateOfBirth": "",
            "role": "user",
            "id": ""
        }
    )

    const validateUser = (user) => {
        for (let key in user) {
            if (user[key] === '') {
                return false;
            }
        }
        return true;
    }
    const checkEmail = (user) => {
        const check = users.find((finded) => finded.email === user.email)
        if (!check) {
            return true
        } else {
            return false
        }

    }

    const handleRegister = () => {
        const id = generateID();
        const newSignUp = { ...signUp, id };

        if (window.confirm("Are you sure ?")) {
            console.log(newSignUp);
            if (checkEmail(newSignUp)) {
                if (validateUser(newSignUp)) {
                    dispatch(addUser(newSignUp));
                    setSuccess('Success');
                    setError('');
                } else {
                    setError('Input required');
                    setSuccess('');
                }
            } else {
                setError('email already existed');
                setSuccess('');
            }
        }
        setSignUp(newSignUp);
    }




    console.log(users);


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setSignUp({ ...signUp, avatar: reader.result });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };



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
                <Grid item xs={12} >
                    <h2>CREATE NEW ACCOUNT</h2>
                </Grid>
                <Grid item xs={12}  >
                    <TextField
                        sx={{ width: '100%' }}
                        type='text'
                        label="Email"
                        value={signUp.email}
                        onChange={(e) => setSignUp({ ...signUp, email: e.target.value })}
                    />
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        sx={{ width: '100%' }}
                        type='text'
                        label="Fullname"
                        value={signUp.fullName}
                        onChange={(e) => setSignUp({ ...signUp, fullName: e.target.value })}
                    />
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        sx={{ width: '100%' }}
                        label="Avatar"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type='file'
                        onChange={(e) => handleFileChange(e)}
                    />
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        sx={{ width: '100%' }}
                        type='password'
                        label="Password"
                        value={signUp.password}
                        onChange={(e) => setSignUp({ ...signUp, password: e.target.value })}
                    />
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        sx={{ width: '100%' }}
                        type='date'
                        label="Date of Birth"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={signUp.dateOfBirth}
                        onChange={(e) => setSignUp({ ...signUp, dateOfBirth: e.target.value })}
                    />
                </Grid>

                <Grid xs={12} item>
                    <Typography sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }} variant="body2" color="initial">
                        <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}> Already have an acccount ?</Link>
                    </Typography>
                </Grid>
                <Grid xs={12} item display={'flex'} justifyContent={'center'}>
                    <Button onClick={handleRegister} variant='contained' sx={{ width: '200px' }} type='submit'>
                        Register
                    </Button>
                </Grid>

                {error && (
                    <Grid xs={12} item>
                        <p style={{ marginLeft: 1, color: 'red' }}>{error}</p>
                    </Grid>
                )}
                {success && (
                    <Grid xs={12} item>
                        <p style={{ marginLeft: 1, color: 'green' }}>{success}</p>
                    </Grid>
                )}
            </Grid>

        </Box>
    )
}
