import React from 'react';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import {Avatar} from "@mui/material";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name,img,email, data, role, ) {
    return { name,img, email, data, role, };
}

const column = [
    createData('uwais hasan', 'actor_1.jpg','uwais@gmail.com', '10-10-98', 'Admin', ),
    createData('eric noje', 'actor_3.jpg', 'uwais@gmail.com', '10-10-98', 'supervisor',),
    createData('selfester stalon', 'actor_5.gif', 'selfester@gmail.com', '10-10-98', 'supervisor', ),
    createData('jon carry',  'actor_2.jpg','carry@gmail.com', '10-10-98', 'supervisor'),
    createData('gerald folos',  'actor_3.jpg','gerald@gmail.com', '10-10-98', 'supervisor'),
];
// const columns = [
//     {id: 0, name: 'one', img: 'red',email:'sss',data:'10-12-92',actions:{setAdmin:false,remove:false}},
//     {id: 1, name: 's', img: 'asd',email:'sss',data:'10-12-92',actions:{setAdmin:false,remove:false}},
//     {id: 2, name: 'onse', img: 'reasdd',email:'sss',data:'10-12-92',actions:{setAdmin:false,remove:false}},
//
// ]
//
const rows=['Name','Email','Date','Role','Actions']


const DashboardRefugees = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {rows.map((item,index)=>(
                            <StyledTableCell align={item === 'Name' ?'':'right'}>{item}</StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {column.map((row,index) => (
                        <StyledTableRow key={row.name}>

                            <StyledTableCell component="th" scope="row">
                                <Avatar src={row.img}/>
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.email}</StyledTableCell>
                            <StyledTableCell align="right">{row.data}</StyledTableCell>
                            <StyledTableCell align="right">{row.role}</StyledTableCell>
                            <StyledTableCell align='right'>
                                <Button variant='contained' color='success'>set as Admin</Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DashboardRefugees;