import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ScraperLogic from './ScraperTableLogic';

const ScraperTable = () => {
    const {games} = ScraperLogic();
    return(
    games.length!== 0 ? (
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="right">Date Released</TableCell>
            <TableCell align="right">Genre</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map((game,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {game.name}
              </TableCell>
              <TableCell align="right">{game.date}</TableCell>
              <TableCell align="right">{game.genre}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> )
    : ('LOADING')
    )
          }

export default ScraperTable;