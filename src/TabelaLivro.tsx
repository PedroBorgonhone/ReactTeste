import './App.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, title, author, launchDate, price) {
    return { id, title, author, launchDate, price };
}

const rows = [
    createData('1', 'Working effectively with legacy code', 'Michael C. Feathers', '2017-11-29', 49),
    createData('2', 'Design Patterns', 'Ralph Johnson, Erich Gamma, John Vlissides e Richard Helm', '2017-11-29', 45),
    createData('3', 'Clean Code', 'Robert C. Martin', '2017-11-29', 77),
    createData('4', 'JavaScript', 'Crockford', '2017-11-29', 67),
    createData('5', 'Code complete', 'Steve McConell', '2017-11-29', 58),
    createData('6', 'Refactoring', 'Mvezo', 'Martin Fowler e Kent Beck', 88),
    createData('7', 'Head First Design Patterns', 'Eric Freeman, Elizabeth Freeman, Kathy Sierra e Bert Bates', '2017-11-29', 110),
];
  
function TabelaLivro() {
    return (
    <main className='centralizador'>
        <button type="button">Tabela Pessoas</button>
        <button type="button">Tabela Livros</button>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>title</TableCell>
                        <TableCell>author</TableCell>
                        <TableCell>launchDate</TableCell>
                        <TableCell>price</TableCell>
                    </TableRow>
                </TableHead>
            <TableBody>
            {rows.map((row) => (
            <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.id}
                        </TableCell>
                        <TableCell align="right">{row.title}</TableCell>
                        <TableCell align="right">{row.author}</TableCell>
                        <TableCell align="right">{row.launchDate}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </main>
    );
}

export default TabelaLivro;