



import * as React from 'react';
import { Avatar, Card, CardContent, Typography } from '@mui/material';


const CardProject = ({ name, profilePicture, content,img }) => {
    return (
        <Card style={{width:'100%'}} >
            <CardContent style={{width:'97%'}}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={profilePicture} />
                    <Typography variant="body2" sx={{ marginLeft: '1rem' }}>
                        {name}
                    </Typography>
                </div>
                <Typography variant="body1" sx={{ marginTop: '1rem' }}>
                    {content}
                </Typography>

                <img style={{width:'100%'}}  src={img}/>
            </CardContent>
        </Card>
    );
};

export default CardProject;