// import React from 'react';
//
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
//
//
// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
//
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`vertical-tabpanel-${index}`}
//             aria-labelledby={`vertical-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }
// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };
//
//
// const  a11yProps=(index)=> {
//     return {
//         id: `vertical-tab-${index}`,
//         'aria-controls': `vertical-tabpanel-${index}`,
//     };
// }
//
//
// const Dashboard = () => {
//
//     const [value, setValue] = React.useState(0);
//
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//
//         console.log(newValue)
//     };
//
//     return (
//         <Box
//             sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
//         >
//             <Tabs
//                 orientation="vertical"
//                 variant='standard'
//                 value={value}
//                 onChange={handleChange}
//                 aria-label="Vertical tabs example"
//                 sx={{ borderRight: 1, borderColor: 'divider' }}
//             >
//                 <Tab label="Item One" {...a11yProps(0)} />
//                 <Tab label="Item Two" {...a11yProps(1)} />
//                 <Tab label="Item Three" {...a11yProps(2)} />
//
//             </Tabs>
//             <TabPanel value={value} index={0}>
//                 Item One
//             </TabPanel>
//             <TabPanel value={value} index={1}>
//                 Item Two
//             </TabPanel>
//             <TabPanel value={value} index={2}>
//                 Item Three
//             </TabPanel>
//
//         </Box>
//     );
//
// };
//
// export default Dashboard;


import {useState} from "react";
import Grid from "@mui/material/Grid";
import {Typography, useMediaQuery} from "@mui/material";
import DashboardAdmins from "./DashboardAdmins";
import DashboardRefugees from "./DashboardRefugees";
import Container from "@mui/material/Container";
import './Dashboard.css'
import Box from "@mui/material/Box";

const Dashboard = () => {

    const [value, setValue] = useState(0);
    const isMobiles = useMediaQuery('(max-width:600px)');


    const styles = {
        flex: isMobiles ? 'flex' : 'flex',
        justifyContent: isMobiles ? 'space-around' : 'space-evenly',
        direction:isMobiles ? 'row' : 'column',
    }

    const content = [
        {id: 0, title: 'Admins', view: <DashboardAdmins/>,classCon: 'red'},
        {id: 1, title: 'Refugees', view: <DashboardRefugees/>, classCon: 'green'},
        {id: 1, title: 'example 3', view: 'create any thing here if you want', classCon: 'green'},
    ]




    return (
       <Container>
           <Grid container spacing={2} columns={{xs: 12, md: 12}}>
               <Grid  className='content-title' item xs={12} s md={2} style={{flexDirection:styles.direction,justifyContent: styles.justifyContent, display: styles.flex}}>

                     {content.map((item, index) => (
                         <Typography  className='title' onClick={() => setValue(index)}>
                             {item.title}
                         </Typography>
                     ))
                     }


               </Grid>

               <Grid item xs={12} s md={10}>
                   {content[value].view}

               </Grid>
           </Grid>
       </Container>
    )


}

export default Dashboard;