import React, { useState, useEffect } from 'react';
import {
    CssBaseline, Box, Drawer, AppBar, Toolbar, Typography, Container, Paper, TextField, Button
} from '@mui/material';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { userApi } from '../api/user_api';

const Account = () => {

    const drawerWidth = 240;
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({
        id: '',
        name: '',
        surname: '',
        email: '',
        phonenumber: '',
        roles: []
    });

    useEffect(() => {
        const activeUser = localStorage.getItem('activeUser');
        if (activeUser) {
            setCurrentUser(JSON.parse(activeUser));
        }
        const fetchData = async () => {
            try {
                const responseVehicles = await userApi.apiV1UserVehicleGet();
            } catch (error) {
                console.error('Mistake in API request', error);
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    navigate('/logon');
                }
            }
        };

        fetchData();
    }, [navigate]);

    const handleSave = async () => {
        try {
            const response = await userApi.updateUser(currentUser);
            if (response.ok) {
                localStorage.setItem('activeUser', JSON.stringify(currentUser));
            } else {
            }
        } catch (error) {
            console.error('Error updating user', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Automotive Factory Registrar
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <NavBar />
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Container maxWidth="lg">
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h5" gutterBottom>
                            Welcome to the Vehicle Registrar
                        </Typography>
                        <Typography sx={{ marginBottom: '20px' }}>
                            This service streamlines the registration and management of changes within car manufacturing processes. Keep track of parts, vehicles, and alterations with ease.
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Your Profile
                        </Typography>
                        <TextField
                            label="Name"
                            name="name"
                            value={currentUser.name}
                            onChange={handleChange}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            label="Surname"
                            name="surname"
                            value={currentUser.surname}
                            onChange={handleChange}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={currentUser.email}
                            onChange={handleChange}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            label="Phone Number"
                            name="phonenumber"
                            value={currentUser.phonenumber}
                            onChange={handleChange}
                            margin="normal"
                            fullWidth
                        />
                        <Button
                            variant="contained"
                            onClick={handleSave}
                            sx={{ mt: 3 }}
                        >
                            Save Changes
                        </Button>
                    </Paper>
                </Container>
            </Box>
        </Box>
    );
};

export default Account;
