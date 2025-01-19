import React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const About = () => {
    return (

        <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
                Welcome to this site
            </Typography>
            <Typography variant="body1" paragraph>
                This site is still under development. I know that the design is very bad, and it needs a lot of development. I look forward to your comments and opinions on how to develop this site to suit your needs.
            </Typography>

            <Typography variant="h5" gutterBottom>
                Why did I create this site?
            </Typography>
            <Typography variant="body1" paragraph>
                There are many reasons that prompted me to create this site:
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary=" There are many refugees who live outside the camp, people who have long vacations, patients, people who work outside the camp, and people who may want to isolate themselves, so this site helps them to know whether they have a post or not easily." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="People who may have some complaints or problems such as power outages or malfunctions in some devices, etc. can create a post about their problem, and the people responsible for their problem can solve their problem quickly. This site helps the elderly and people who suffer from serious diseases as they cannot go to the reception department to present their problem." />
                </ListItem>
            </List>

            <Typography variant="h5" gutterBottom>
                The goal of the site :
            </Typography>
            <Typography variant="body1" paragraph>
                The real goal of this site is to facilitate life in the camp and make it more comfortable as it helps refugees and employees greatly
            </Typography>

            <Typography variant="h5" gutterBottom>
                How does the site work?
            </Typography>
            <Typography variant="body1" paragraph>
                There are two types of login:
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="body1">
                        Login for site administrators (for posting posts)
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body1">
                        Login for refugees (for posting complaints and problems)
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="body1" paragraph>

                First, you register on the site and enter the refugee's data such as name, photos, gender, email or ID number            </Typography>

            <Typography variant="h5" gutterBottom>
                There are five pages:
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="1-The main page which contains posts and complaints" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="2-A page for refugees which only displays all refugees " />
                </ListItem>
                <ListItem>
                    <ListItemText primary="3-admins page: Displays all site administrators" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="4-About page ,This page displays information about the site
But I am writing this important information in it to draw your attention to the features and characteristics of this site and it will be deleted" />
                </ListItem>
            </List>
            <Typography variant="body1" paragraph>
                Of course, a dashboard will be created for the admin only and he is the only one responsible for adding supervisors and refugees or removing supervisors and refugees
            </Typography>

            <Typography variant="h5" gutterBottom>
                Is the site capable of development?

            </Typography>
            <Typography variant="body1" paragraph>
                The site is scalable and can be expanded with features like:
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="Refugees interaction page (diaries, birthdays)" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Multilingual support" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Night mode and day mode" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Photo and comment liking" />
                </ListItem>
            </List>

            <Typography variant="h5" gutterBottom>

                When can this project be completed?
            </Typography>
            <Typography variant="body1" paragraph>
                The completion time depends on the number of features added.
            </Typography>

            <Typography variant="h5" gutterBottom>

                Will the site be on the web only?
            </Typography>
            <Typography variant="body1" paragraph>
                the site will be on the web at first and then it is possible to make it in the form of an application as well            </Typography>
        </Box>
    );
};

export default About;