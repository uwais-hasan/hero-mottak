import React from 'react';
import Container from "@mui/material/Container";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <Container style={{paddingTop:"30px"}} className='register'>
                <Grid container spacing={2} columns={{xs:6, sm:12,md:12}}  justifyContent='space-between'>
                    <Grid  item xs={6} sm={6} md={8} style={{paddingTop:'0',position:'relative'}}>
                        <img src={'logIn.png'} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} className='card' >
                        <Typography variant={'h4'} marginBottom={2}>
                            Sign Up
                        </Typography>
                        <Typography variant='subtitle1' marginBottom={5}>Welecom to Sign Up in your background managment system</Typography>
                        <TextField
                            margin={'dense'}
                            label="Name"
                            variant="standard"
                            color="none"
                            focused
                            fullWidth
                        />
                        <TextField
                            margin={'dense'}
                            label="Email"
                            variant="standard"
                            color="none"
                            focused
                            fullWidth
                        />
                        <TextField

                            rows={4}
                            margin={'dense'}
                            variant="standard"
                            focused
                            fullWidth
                            color="none"
                            label="Password"
                            autoComplete="current-password"/>
                        <TextField

                            rows={4}
                            margin={'dense'}
                            variant="standard"
                            focused
                            fullWidth
                            color="none"
                            label="re-password"
                            autoComplete="current-password"/>

                        <Button sx={{width:'100%',marginTop:"40px"}} variant="contained" color='secondary' >Sign up </Button>
                        <Grid paddingTop='10px' columns={{md:12,sx:12}}  spacing={3} display={'flex'} justifyContent={'space-between'}>
                            <Grid item md={8} sx={5}>
                                <Typography fontSize='12px'>you already have an account</Typography>
                            </Grid>
                            <Grid item md={2} sx={5}>
                                <NavLink className='link' to={'/logIn'}>Log In</NavLink>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </Container>
        </div>
    );
};

export default SignUp;