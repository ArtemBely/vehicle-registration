import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Autocomplete, TextField, Button } from '@mui/material';
import { userApi } from '../api/user_api';

const VehicleEditDialog = ({ open, vehicle, handleClose, handleSave, currentVehicle, setCurrentVehicle, addingNewVehicle, factories }) => {

    const [isAdmin, setIsAdmin] = useState(false);
    const [carSeriesOptions, setCarSeriesOptions] = useState([]);
    const [carBodyOptions, setCarBodyOptions] = useState([]);
    const [motorOptions, setMotorOptions] = useState([]);
    const [transmissionOptions, setTransmissionOptions] = useState([]);
    const [werkOptions, setWerkOptions] = useState([]);
    const [baugruppeOptions, setBaugruppeOptions] = useState([]);
    const [knr7Options, setKnr7Options] = useState([]);
    const [pin13Options, setPin13Options] = useState([]);
    const [factoryIdOptions, setFactoryIdOptions] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentVehicle(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        if (typeof window != undefined) {
            const activeUser = JSON.parse(localStorage.getItem('activeUser'));
            setIsAdmin(activeUser.roles.includes('ADMIN'))
        }
        if (vehicle && vehicle.length > 0) {
            const carSeriesSet = new Set(vehicle.map(v => v.carserie));
            setCarSeriesOptions(Array.from(carSeriesSet));

            const carBodySet = new Set(vehicle.map(v => v.carbody));
            setCarBodyOptions(Array.from(carBodySet));

            const motorSet = new Set(vehicle.map(v => v.motor));
            setMotorOptions(Array.from(motorSet));

            const transmissionSet = new Set(vehicle.map(v => v.transmission));
            setTransmissionOptions(Array.from(transmissionSet));

            const werkSet = new Set(vehicle.map(v => v.werk));
            setWerkOptions(Array.from(werkSet));

            const baugruppeSet = new Set(vehicle.map(v => v.baugruppe));
            setBaugruppeOptions(Array.from(baugruppeSet));

            const knr7Set = new Set(vehicle.map(v => v.knr7));
            setKnr7Options(Array.from(knr7Set));

            const pin13Set = new Set(vehicle.map(v => v.pin13));
            setPin13Options(Array.from(pin13Set));

            const factoryIdSet = new Set(factories.map(v => v.id));
            setFactoryIdOptions(Array.from(factoryIdSet));
        }
    }, [vehicle]);

    const createOne = async () => {
        try {
            const response = await userApi.apiV1UserNewVehiclePost({
                carserie: currentVehicle.carserie,
                carbody: currentVehicle.carbody,
                motor: currentVehicle.motor,
                transmission: currentVehicle.transmission,
                werk: currentVehicle.werk,
                baugruppe: currentVehicle.baugruppe,
                knr7: currentVehicle.knr7,
                pin13: currentVehicle.pin13,
                factory_id: currentVehicle.factory_id
            });
            window.location.reload();
            if (response.ok) {
            } else {
                throw new Error('Please check your email and password');
            }
        } catch (err) {
            console.error(err);
        }
    };

    const editOne = async () => {
        try {
            const response = await userApi.apiV1UserVehicleUpdatePut({
                id: currentVehicle.id,
                carserie: currentVehicle.carserie,
                carbody: currentVehicle.carbody,
                motor: currentVehicle.motor,
                transmission: currentVehicle.transmission,
                werk: currentVehicle.werk,
                baugruppe: currentVehicle.baugruppe,
                knr7: currentVehicle.knr7,
                pin13: currentVehicle.pin13,
                factory_id: currentVehicle.factory_id
            });
            window.location.reload();
            if (response.ok) {
            } else {
                throw new Error('Please check your email and password');
            }
        } catch (err) {
            console.error(err);
        }
    };

    const deleteOne = async (id) => {
        try {
            const responseApartments = await userApi.apiV1UserVehicleDeleteDelete(id);
            if (typeof window != 'undefined') {
                window.location.reload();
            }
        } catch (error) {
            console.error('Mistake in API request', error);
            if (typeof window !== 'undefined') {
                window.location.href = '/404';
            }
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
            <DialogTitle>{addingNewVehicle ? 'Add vehicle' : 'Edit Vehicle'}</DialogTitle>
            <DialogContent>
                <Autocomplete
                    value={currentVehicle.carserie || ''}
                    onChange={(event, newValue) => {
                        setCurrentVehicle(prevState => ({
                            ...prevState,
                            carserie: newValue
                        }));
                    }}
                    options={carSeriesOptions}
                    renderInput={(params) => <TextField {...params} label="Car Serie" margin="dense" />}
                    fullWidth
                />
                <Autocomplete
                    value={currentVehicle.carbody || ''}
                    onChange={(event, newValue) => {
                        setCurrentVehicle(prevState => ({
                            ...prevState,
                            carbody: newValue
                        }));
                    }}
                    options={carBodyOptions}
                    renderInput={(params) => <TextField {...params} label="Car Body" margin="dense" />}
                    fullWidth
                />
                <Autocomplete
                    value={currentVehicle.motor || ''}
                    onChange={(event, newValue) => {
                        setCurrentVehicle(prevState => ({
                            ...prevState,
                            motor: newValue
                        }));
                    }}
                    options={motorOptions}
                    renderInput={(params) => <TextField {...params} label="Motor" margin="dense" />}
                    fullWidth
                />
                <Autocomplete
                    value={currentVehicle.transmission || ''}
                    onChange={(event, newValue) => {
                        setCurrentVehicle(prevState => ({
                            ...prevState,
                            transmission: newValue
                        }));
                    }}
                    options={transmissionOptions}
                    renderInput={(params) => <TextField {...params} label="Transmission" margin="dense" />}
                    fullWidth
                />
                <Autocomplete
                    value={currentVehicle.werk || ''}
                    onChange={(event, newValue) => {
                        setCurrentVehicle(prevState => ({
                            ...prevState,
                            werk: newValue
                        }));
                    }}
                    options={werkOptions}
                    renderInput={(params) => <TextField {...params} label="Werk" margin="dense" />}
                    fullWidth
                />
                <Autocomplete
                    value={currentVehicle.baugruppe || ''}
                    onChange={(event, newValue) => {
                        setCurrentVehicle(prevState => ({
                            ...prevState,
                            baugruppe: newValue
                        }));
                    }}
                    options={baugruppeOptions}
                    renderInput={(params) => <TextField {...params} label="Baugruppe" margin="dense" />}
                    fullWidth
                />
                <Autocomplete
                    value={currentVehicle.knr7 || ''}
                    onChange={(event, newValue) => {
                        setCurrentVehicle(prevState => ({
                            ...prevState,
                            knr7: newValue
                        }));
                    }}
                    options={knr7Options}
                    getOptionLabel={(option) => option.toString()}
                    renderInput={(params) => <TextField {...params} label="KNR7" margin="dense" />}
                    fullWidth
                />
                <Autocomplete
                    value={currentVehicle.pin13 || ''}
                    onChange={(event, newValue) => {
                        setCurrentVehicle(prevState => ({
                            ...prevState,
                            pin13: newValue
                        }));
                    }}
                    options={pin13Options}
                    getOptionLabel={(option) => option.toString()}
                    renderInput={(params) => <TextField {...params} label="PIN13" margin="dense" />}
                    fullWidth
                />
                <Autocomplete
                    value={factories.find(factory => factory.id === currentVehicle.factory_id) || null}
                    options={factories}
                    getOptionLabel={(option) => option.title}
                    onChange={(event, newValue) => {
                        setCurrentVehicle(prevState => ({
                            ...prevState,
                            factory_id: newValue ? newValue.id : ''
                        }));
                    }}
                    renderInput={(params) => <TextField {...params} label="Factory" margin="dense" />}
                    sx={{ display: isAdmin ? 'flex' : 'none' }}
                />

                {/*<Autocomplete*/}
                {/*    value={currentVehicle.factory_id || ''}*/}
                {/*    onChange={(event, newValue) => {*/}
                {/*        setCurrentVehicle(prevState => ({*/}
                {/*            ...prevState,*/}
                {/*            factory_id: newValue*/}
                {/*        }));*/}
                {/*    }}*/}
                {/*    options={factoryIdOptions}*/}
                {/*    getOptionLabel={(option) => option.toString()}*/}
                {/*    renderInput={(params) => <TextField {...params} label="Factory ID" margin="dense" />}*/}
                {/*    fullWidth*/}
                {/*/>*/}

                {/*<Autocomplete*/}
                {/*    value={currentVehicle.factory_id || ''}*/}
                {/*    options={factories}*/}
                {/*    getOptionLabel={(option) => option.id}*/}
                {/*    renderInput={(params) => <TextField {...params} label="Factory ID" margin="dense" />}*/}
                {/*        onChange={(event, newValue) => {*/}
                {/*            setCurrentVehicle(prevState => ({*/}
                {/*                ...prevState,*/}
                {/*                factory_id: newValue*/}
                {/*            }));*/}
                {/*        }}*/}
                {/*/>*/}
            </DialogContent>
            <DialogActions>
                <Button
                    color="error"
                    onClick={() => deleteOne(currentVehicle.id)}
                    variant="outlined" sx={{
                    display: isAdmin && !addingNewVehicle ? 'flex' : 'none'
                }}>Delete</Button>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={addingNewVehicle ? createOne : editOne}>{addingNewVehicle ? 'Create' : 'Save'}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default VehicleEditDialog;
