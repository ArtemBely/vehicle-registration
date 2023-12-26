import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box, CssBaseline, AppBar, Toolbar, Button, Typography, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { userApi } from '../api/user_api';
import { factoryApi } from '../api/factory_api';

const Overview = () => {
    const [factories, setFactories] = useState([]);
    const [vehicles, setVehicle] = useState([]);

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

    const onDragEnd = (result) => {
        const { source, destination } = result;

        // Проверка на существование пункта назначения
        if (!destination) {
            return;
        }

        // Проверка на перемещение элемента в новую позицию
        if (
            source.droppableId !== destination.droppableId ||
            source.index !== destination.index
        ) {
            // Логика обновления состояния с новым расположением элемента
            // ...
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
                                                            <img src={skodaWerk.includes(vehicle.werk) ? skodaType : volkswagenType} alt={`Машина ${vehicle.carserie}`} style={{ width: '100%', marginBottom: '10px' }} />
                                                            <Typography>{vehicle.carserie}</Typography>
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
