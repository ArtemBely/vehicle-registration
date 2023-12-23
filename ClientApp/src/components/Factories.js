import React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Button, Typography, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import FactoryEditDialog from './FactoryEditDialog';
import { factoryApi } from '../api/factory_api';
import { adminApi } from '../api/admin_api';

const Factories = () => {

    const [factory, setFactories] = useState([]);
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentFactory, setCurrentFactory] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseFactories = await factoryApi.apiV1UserFactoriesGet();
                setFactories(responseFactories.data);
            } catch (error) {
                console.error('Mistake in API request', error);
            }
        };
        const fetchUsers = async () => {
            try {
                const responseCustomers = await adminApi.apiV1AdminAnalyticsCustomersGet();
                setUsers(responseCustomers.data);
            } catch (error) {
                console.error('Mistake in API request', error);
            }
        };
        fetchData();
        fetchUsers();
    }, []);

    const handleClickOpen = (factory) => {
        setCurrentFactory(factory);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        // Save logic...
        setOpen(false);
    };

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
                            Factories
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Ttile</TableCell>
                                        <TableCell>Factory location</TableCell>
                                        <TableCell>Director ID</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {factory.map((factory) => (
                                        <TableRow
                                            key={factory.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {factory.id}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {factory.title}
                                            </TableCell>
                                            <TableCell>{factory.factory_location}</TableCell>
                                            <TableCell>{factory.director_id}</TableCell>
                                            <Button
                                                sx={{ marginTop: '7px' }}
                                                variant="contained"
                                                onClick={() => handleClickOpen(factory)}
                                            >
                                                Details</Button>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <FactoryEditDialog
                                    open={open}
                                    handleClose={handleClose}
                                    handleSave={handleSave}
                                    currentFactory={currentFactory}
                                    setCurrentFactory={setCurrentFactory}
                                    users={users}
                                />
                            </Table>
                        </TableContainer>
                    </Paper>
                </Container>
            </Box>
        </Box>
    );
};

export default Factories;
