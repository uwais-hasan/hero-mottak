



import * as React from 'react';
import { Avatar, Card, CardContent, Typography } from '@mui/material';

import './PostsAdmin.css'
const PostsAdmin = ({ name, profilePicture, content,img }) => {
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

                <img className={img}  src={img}/>
            </CardContent>
        </Card>
    );
};

export default PostsAdmin;