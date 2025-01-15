import React from 'react';
import {Avatar, Card, CardContent, TextField, Typography} from "@mui/material";

const CreatePosts = ({ name, profilePicture}) => {
    return (
        <Card style={{boxShadow: 'none',marginBottom:'20px'}} >
            <CardContent>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={profilePicture} />
                    <TextField
                        style={{margin:'10px'}}
                        fullWidth={true}
                        label="Create post"
                        variant="standard"
                        color="secondary"
                        placeholder={name}
                        focused
                    />

                </div>

            </CardContent>
        </Card>
    );
};

export default CreatePosts;