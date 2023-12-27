import React from 'react';
import {
    Box, CssBaseline, AppBar, Toolbar, Button,
    Typography, Container, Paper, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow
} from '@mui/material';
import NavBar from './NavBar';
import UserEditDialog from './UserEditDialog';
import { useEffect, useState } from 'react';
import { adminApi } from '../api/admin_api';
import { useNavigate } from 'react-router-dom';

const Analytics = () => {

    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseCustomers = await adminApi.apiV1AdminAnalyticsCustomersGet();
                setUsers(responseCustomers.data);
            } catch (error) {
                console.error('Mistake in API request', error);
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    navigate('/logon');
                }
            }
        };

        fetchData();
    }, [navigate]);

    const handleAddNew = () => {
        setCurrentUser({
            email: "",
            userName: "",
            name: "",
            surname: "",
            phoneNumber: "",
            password: "",
            isAdmin: false
        });
        setOpen(true);
    };

    const handleClickOpen = (user) => {
        setCurrentUser({
            ...user,
            password: undefined
        });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
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
                            User Analytics
                        </Typography>
                        <Button sx={{ marginBottom: '20px' }} onClick={handleAddNew} variant="contained">Add customer</Button>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Lastname</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map((user) => (
                                        <TableRow
                                            key={user.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {user.email}
                                            </TableCell>
                                            <TableCell>{user.firstName}</TableCell>
                                            <TableCell>{user.surname}</TableCell>
                                            <Button sx={{ marginTop: '7px' }} onClick={() => handleClickOpen(user)} variant="contained">Details</Button>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <UserEditDialog
                                    open={open}
                                    handleClose={handleClose}
                                    handleSave={handleSave}
                                    currentUser={currentUser}
                                    setCurrentUser={setCurrentUser}
                                    addingNewUser={currentUser.password !== undefined}
                                />
                            </Table>
                        </TableContainer>
                    </Paper>
                </Container>
            </Box>
        </Box>
    );
};

export default Analytics;

