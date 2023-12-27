import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box, CssBaseline, AppBar, Toolbar, Button, Typography, Paper } from '@mui/material';
import { userApi } from '../api/user_api';
import { factoryApi } from '../api/factory_api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Overview = () => {
    const [factories, setFactories] = useState([]);
    const [vehicles, setVehicle] = useState([]);
    const navigate = useNavigate();

    // image type depends on auto type (skoda or other VW vehicles)
    let skodaWerk = ['KMQ20235', 'RAPID813', 'RAPID113', 'ELRQ3728'] // skoda werk type only
    let skodaType = 'auto/auto2.png';
    let volkswagenType = 'auto/auto3.png';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseVehicles = await userApi.apiV1UserVehicleGet();
                setVehicle(responseVehicles.data);
            } catch (error) {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    navigate('/logon');
                }
            }
        };
        const fetchFactories = async () => {
            try {
                const responseVehicles = await factoryApi.apiV1UserFactoriesGet();
                setFactories(responseVehicles.data);
            } catch (error) {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    navigate('/logon');
                }
            }
        };
        fetchData();
        fetchFactories();
    }, [navigate]);

    const handleFactories = async (factory_id, vehicle_id) => {
        try {
            await factoryApi.apiV1AdminDestinationUpdatePost({ factory_id, vehicle_id });
        } catch (error) {
            console.error('Mistake in API request', error);
        }
    }

    const onDragEnd = async (result) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (source.droppableId !== destination.droppableId ||
            source.index !== destination.index) {

            const vehicle_id = parseInt(result.draggableId);
            const new_factory_id = parseInt(destination.droppableId);

            try {
                await handleFactories(new_factory_id, vehicle_id);
                toast.success("Vehicle was successfully transferred!");

                const updatedVehicles = vehicles.map(vehicle => {
                    if (vehicle.id === vehicle_id) {
                        return { ...vehicle, factory_id: new_factory_id };
                    }
                    return vehicle;
                });
                setVehicle(updatedVehicles);

            } catch (error) {
                toast.error("Something was wrong!");
            }
        }
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
                <ToastContainer />
                <Toolbar />
                <DragDropContext onDragEnd={onDragEnd}>
                    {factories.map((factory, index) => (
                        <Droppable droppableId={String(factory.id)} key={factory.id}>
                            {(provided, snapshot) => (
                                <Paper
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={{
                                        margin: '20px',
                                        padding: '10px',
                                        backgroundColor: snapshot.isDraggingOver ? 'lightblue' : 'white'
                                    }}
                                >
                                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="h6">{factory.title}</Typography>
                                        <Typography variant="caption" style={{ alignSelf: 'flex-start' }}>{factory.location}</Typography>
                                    </Box>
                                    <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '10px', alignItems: 'flex-start', width: '100%' }}>
                                        {vehicles.filter(vehicle => vehicle.factory_id === factory.id).map((vehicle, index) => (
                                            <Draggable key={vehicle.id} draggableId={String(vehicle.id)} index={index}>
                                                {(provided, snapshot) => (
                                                    <Box
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        ref={provided.innerRef}
                                                    >
                                                        <Paper style={{ padding: '10px' }}>
                                                            <img src={skodaWerk.includes(vehicle.werk) ? skodaType : volkswagenType} alt={`Car type ${vehicle.carserie}`} style={{ width: '100%', marginBottom: '10px' }} />
                                                            <Typography>{vehicle.carserie}</Typography>
                                                            <Typography>{vehicle.carbody}</Typography>
                                                        </Paper>
                                                    </Box>
                                                )}
                                            </Draggable>
                                        ))}
                                    </Box>
                                    {provided.placeholder}
                                </Paper>
                            )}
                        </Droppable>
                    ))}
                </DragDropContext>



            </Box>
        </Box>
    );
};

export default Overview;
