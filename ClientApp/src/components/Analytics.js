import React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import { adminApi } from '../api/admin_api';

const Analytics = () => {

    //const users = [

    //    { id: 1, name: 'John Doe', email: 'john@example.com' },
    //    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }

    //];

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseCustomers = await adminApi.apiV1AdminAnalyticsCustomersGet();
                setUsers(responseCustomers.data);
            } catch (error) {
                console.error('Mistake in API request', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Analytics Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <NavBar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Container maxWidth="lg">
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h5" gutterBottom>
                            User Analytics
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Email</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map((user) => (
                                        <TableRow
                                            key={user.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {user.id}
                                            </TableCell>
                                            <TableCell>{user.firstName}</TableCell>
                                            <TableCell>{user.surname}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Container>
            </Box>
        </Box>
    );
};

export default Analytics;

