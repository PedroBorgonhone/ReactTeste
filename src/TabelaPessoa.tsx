import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
    {id:'1', firstName:'Ayrton', lastName:'Senna', adress:'São Paulo', gender:'Male', book:'book'},
    {id:'2', firstName:'Leonardo', lastName:'Da Vinci', adress:'Anchiano - Italy', gender: 'Male', book:'book'},
    {id:'3', firstName:'Idira', lastName:'Gandhi', adress:'Porbandar - India', gender:'Female', book:'Book'},
    {id:'4', firstName:'Mahtma', lastName:'Gandhi', adress:'Porbandar - India', gender:'Male', book:'Book'},
    {id:'5', firstName:'Muhammad', lastName:'Ali', adress:'Kentucky - USA', gender:'Male', book:'Book'},
    {id:'6', firstName:'Nelson', lastName:'Mvezo', adress:'Mvezo - South Africa', gender:'Male', book:'Book'},
    {id:'7', firstName:'Nikola', lastName:'Tesla', adress:'Smiljan - Croacia', gender:'Male', book:'Book'},
];
  
function TabelaPessoa() {
    return (
    <main className='centralizador'>
        <button type="button">Tabela Pessoas</button>
        <button type="button">Tabela Livros</button>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Adress</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Book</TableCell>
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
                            <TableCell align="right">{row.firstName}</TableCell>
                            <TableCell align="right">{row.lastName}</TableCell>
                            <TableCell align="right">{row.adress}</TableCell>
                            <TableCell align="right">{row.gender}</TableCell>
                            <TableCell align="right">{row.book}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </main>
    );
}

export TabelaPessoa;