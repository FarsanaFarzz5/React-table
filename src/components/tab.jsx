import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DoneIcon from '@mui/icons-material/Done';

function createData(
    support: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { support, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Full source code',  <DoneIcon/>,<DoneIcon/> , <DoneIcon/>, <DoneIcon/>),
    createData('subscription', <DoneIcon/>,<DoneIcon/> , <DoneIcon/>, <DoneIcon/>),
    createData('intranet', '', <DoneIcon/>,<DoneIcon/> , <DoneIcon/>),
    createData('downloadable software', '', '',<DoneIcon/>, <DoneIcon/>),
    createData('redistribute', '', '','' ,<DoneIcon/>),
    createData('custom code','', '','' ,'' ),
  ];
  

function Tab() {
  return (
    <div>
        <h1>Pricing Plans</h1>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>support</TableCell>
            <TableCell align="right">3 months</TableCell>
            <TableCell align="right">6 months</TableCell>
            <TableCell align="right">12 months</TableCell>
            <TableCell align="right">calories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.support}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.support}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Tab