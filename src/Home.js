



import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import CardProject from "./PostsAdmin/PostsAdmin";
import Complaints from "./Complaints";
import CreatePosts from "./CreatePosts";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Home({name, profilePicture}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }} style={{background:'#fcfcfc'}}>
            <Box >
                <Tabs textColor="secondary" indicatorColor="secondary" centered={true} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab  sx={{ borderBottom: 1,width:'50%'}}  label="Posts" {...a11yProps(0)} />
                    <Tab sx={{ borderBottom: 1,width:'50%',color:'secondary' }}  label="Feedback" {...a11yProps(1)} />

                </Tabs>
            </Box>
            <CustomTabPanel style={{width:'100%',gap:'20px'}} value={value} index={0}>
                <CreatePosts style={{display:'flex',justifyContent:'center'}} profilePicture={profilePicture} name={'what you are thinking?'}/>

                <CardProject style={{width:'100%'}}
                             name="hilde joe"
                             profilePicture="path/to/profile_picture.jpg"
                             content="Each of these rooms has a post "
                             img={'ew.jpg'}
                />

                <CardProject style={{width:'100%'}}
                    name="Aos Aos"
                    profilePicture="path/to/profile_picture.jpg"
                    content="Each of these rooms has a post 115, 200, 101, 318, 102"
                    img={'xzz.jpg'}
                />
                <CardProject style={{width:'100%'}}
                             name="uwais hasan"
                             profilePicture="path/to/profile_picture.jpg"
                             content="Room 110 has a post."
                             img={'xz.jpg'}
                />
            </CustomTabPanel>
            <CustomTabPanel style={{width:'100%',gap:'20px'}} value={value} index={1}>
                <CreatePosts style={{display:'flex',justifyContent:'center'}} profilePicture={profilePicture} name={'what you are thinking?'}/>

                <Complaints style={{width:'100%'}}
                             name="michel angle"
                             profilePicture="path/to/profile_picture.jpg"
                             content="We have a problem, the power went out in my room. My room number is 231."
                             img={'xzzz.jpg'}
                />
                <Complaints style={{width:'100%'}}
                            name="joe alsws "
                            profilePicture="path/to/profile_picture.jpg"
                            content="We have a problem, the power went out in my room. My room number is 231."
                            img={'xzzz.jpg'}
                />
            </CustomTabPanel>

        </Box>
    );
}