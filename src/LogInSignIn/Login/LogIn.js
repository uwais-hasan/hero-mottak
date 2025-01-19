
import {Typography, TextField, Grid, Button, Alert} from "@mui/material";
import Container from "@mui/material/Container";

import './LogIn.css'
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
const LogIn = () => {
    const [email, setEmail] = useState("Hero@hero.com");
    const [password,setPassword]=useState('123')
    const[errorEmail,setErrorEmail]=useState('')
    const[errorPassword,setErrorPassword]=useState('')

    let navigator=useNavigate()

    const handleSubmit = () => {
        if (email === "Hero@hero.com" && password === '123') {
            navigator('/')
            localStorage.setItem("Success","Success")
            console.log('1')
        } else if (email !== "Hero@hero.com" ) {
            setErrorEmail('please enter a valid email')
            console.log('2')

        } else if (password !== 123) {
            setErrorPassword('please enter a valid password')
            console.log('3')
        }

        console.log({email, password})
    }


    return (
        <>
            <Alert severity="success">Please make sure to enter this data to log in. Email: Hero@hero.com , password:123 </Alert>
            <Container style={{paddingTop: "30px"}} className='register'>
                <Grid container spacing={2} columns={{xs: 6, sm: 12, md: 12}} justifyContent='space-between'>
                    <Grid item xs={6} sm={6} md={8} style={{paddingTop: '0', position: 'relative'}}>
                        <img src={'logIn.png'}/>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} className='card'>
                        <Typography variant={'h4'} marginBottom={2}>
                            Log In
                        </Typography>
                        <Typography variant='subtitle1' marginBottom={5}>Welcome to Log in in your background managment
                            system</Typography>
                        <TextField
                          error={errorEmail?true:false}
                            value={email}
                            name='email'
                            margin={'dense'}
                            label="Email"
                            variant="standard"
                            color="none"
                            focused
                            fullWidth
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <TextField
                            error={errorPassword?true:false}
                            value={password}
                            name='email'
                            rows={4}
                            margin={'dense'}
                            variant="standard"
                            focused
                            fullWidth
                            color="none"
                            label="Password"
                            autoComplete="current-password"
                            onChange={(e)=>setPassword(e.target.value)}
                        />

                        <Button
                            sx={{width: '100%', marginTop: "40px"}}
                            variant="contained"
                            color='secondary'
                            onClick={handleSubmit}
                        >
                            Log In
                        </Button>
                        <Grid paddingTop='10px' columns={{md: 12, sx: 12}} spacing={3} display={'flex'}
                              justifyContent={'space-between'}>
                            <Grid item md={7} sx={5}>
                                <Typography fontSize='15px'>Don't have an account</Typography>
                            </Grid>
                            <Grid item md={3} sx={5}>
                                <NavLink className='link' to={'/singUp'}>Sign up</NavLink>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default LogIn;