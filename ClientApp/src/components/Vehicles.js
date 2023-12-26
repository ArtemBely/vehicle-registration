import React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Button, Typography, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import NavBar from './NavBar';
import VehicleEditDialog from './VehicleEditDialog';
import { useEffect, useState } from 'react';
import { userApi } from '../api/user_api';
import { factoryApi } from '../api/factory_api';

const Vehicles = () => {

    const [vehicle, setVehicle] = useState([]);
    const [factories, setFactories] = useState([]);
    const [open, setOpen] = useState(false);
    const [isNew, setIsNew] = useState(false);
    const [currentVehicle, setCurrentVehicle] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseVehicles = await userApi.apiV1UserVehicleGet();
                setVehicle(responseVehicles.data);
            } catch (error) {
                console.error('Mistake in API request', error);
            }
        };
        const fetchFactories = async () => {
            try {
                const responseVehicles = await factoryApi.apiV1UserFactoriesGet();
                setFactories(responseVehicles.data);
            } catch (error) {
                console.error('Mistake in API request', error);
            }
        };
        fetchData();
        fetchFactories();
    }, []);

    const handleAddNew = () => {
        setCurrentVehicle({
            carserie: '',
            carbody: '',
            motor: '',
            transmission: '',
            werk: '',
            baugruppe: '',
            knr7: 0,
            pin13: 0,
            factory_id: 1
        });
        setIsNew(true);
        setOpen(true);
    };

    const handleOpenDialog = (vehicle) => {
        setCurrentVehicle(vehicle);
        setIsNew(false);
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

    const handleSaveVehicle = () => {
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
                            Vehicle Tracking
                        </Typography>
                        <Button sx={{ marginBottom: '20px' }} onClick={handleAddNew} variant="contained">Add Vehicle</Button>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Transmission</TableCell>
                                        <TableCell>Werk</TableCell>
                                        <TableCell>Car body</TableCell>
                                        <TableCell>KNR7</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {vehicle.map((vehicle) => (
                                        <TableRow
                                            key={vehicle.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>{vehicle.id}</TableCell>
                                            <TableCell>{vehicle.transmission}</TableCell>
                                            <TableCell>{vehicle.werk}</TableCell>
                                            <TableCell>{vehicle.carbody}</TableCell>
                                            <TableCell>{vehicle.knr7}</TableCell>
                                            <Button
                                                sx={{ marginTop: '7px' }}
                                                variant="contained"
                                                onClick={() => handleOpenDialog(vehicle)}
                                            >
                                                Details
                                            </Button>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <VehicleEditDialog
                                    open={open}
                                    vehicle={vehicle}
                                    handleClose={handleCloseDialog}
                                    handleSave={handleSaveVehicle}
                                    currentVehicle={currentVehicle}
                                    setCurrentVehicle={setCurrentVehicle}
                                    addingNewVehicle={isNew}
                                    factories={factories}
                                />
                            </Table>
                        </TableContainer>
                    </Paper>
                </Container>
            </Box>
        </Box>
    );
};

export default Vehicles;