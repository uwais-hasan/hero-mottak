import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import './Refugees.css'
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

const Refugees = () => {
    return (
        <Container sx={{ p: 2 }}>
            <h1 className={'topic'}> Our refugees</h1>
            <Grid container style={{margin:'50px 0'}}  spacing={2} columns={{xs: 6, sm: 6, md: 12}} >
                <Grid className='refugees' item xs={3} sm={2} md={3}>
                    <div className={'background'}></div>
                    <img style={{width:'80%',height:'200px'}} src={'actor_1.jpg'} alt={''}/>
                    <Typography color='white'>uwais hasan</Typography>
                </Grid>
                <Grid className='refugees' item xs={3} sm={2} md={3}>
                    <div className={'background'}></div>
                    <img style={{width: '80%',height:'200px'}} src={'actor_2.jpg'} alt={''}/>
                    <Typography color='white'>uwais hasan</Typography>
                </Grid>
                <Grid className='refugees' item xs={3} sm={2} md={3}>
                    <div className={'background'}></div>
                    <img style={{width: '80%',height:'200px'}} src={'actor_3.jpg'} alt={''}/>
                    <Typography color='white'>uwais hasan</Typography>
                </Grid>
                <Grid className='refugees' item xs={3} sm={2} md={3}>
                    <div className={'background'}></div>
                    <img style={{width: '80%',height:'200px'}} src={'actor_4.jpg'} alt={''}/>
                    <Typography color='white'>uwais hasan</Typography>
                </Grid>
            </Grid>
            <Grid container style={{margin:'50px 0'}} spacing={2} columns={{xs: 6, sm: 6, md: 12}} >
                <Grid className='refugees' item xs={3} sm={2} md={3}>
                    <div className={'background'}></div>
                    <img style={{width:'80%',height:'200px'}} src={'actor_5.gif'} alt={''}/>
                    <Typography  color='white'>uwais hasan</Typography>
                </Grid>
                <Grid className='refugees' item xs={3} sm={2} md={3}>
                    <div className={'background'}></div>
                    <img style={{width: '80%',height:'200px'}} src={'actor_6.jpg'} alt={''}/>
                    <Typography color='white'>uwais hasan</Typography>
                </Grid>
                <Grid className='refugees' item xs={3} sm={2} md={3}>
                    <div className={'background'}></div>
                    <img style={{width: '80%',height:'200px'}} src={'actor_2.jpg'} alt={''}/>
                    <Typography color='white'>uwais hasan</Typography>
                </Grid>
                <Grid className='refugees' item xs={3} sm={2} md={3}>
                    <div className={'background'}></div>
                    <img style={{width: '80%',height:'200px'}} src={'actor_1.jpg'} alt={''}/>
                    <Typography color='white'>uwais hasan</Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Refugees;