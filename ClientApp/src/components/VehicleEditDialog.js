import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const VehicleEditDialog = ({ open, handleClose, handleSave, currentVehicle, setCurrentVehicle }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentVehicle(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
            <DialogTitle>Edit Vehicle</DialogTitle>
            <DialogContent>
                {/* Создайте TextField для каждого свойства объекта currentVehicle */}
                <TextField
                    autoFocus
                    margin="dense"
                    name="carserie"
                    label="Car Serie"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={currentVehicle.carserie || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="carbody"
                    label="Car Body"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={currentVehicle.carbody || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="motor"
                    label="Motor"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={currentVehicle.motor || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="transmission"
                    label="Transmission"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={currentVehicle.transmission || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="werk"
                    label="Werk"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={currentVehicle.werk || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="baugruppe"
                    label="Baugruppe"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={currentVehicle.baugruppe || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="knr7"
                    label="KNR7"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={currentVehicle.knr7 || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="pin13"
                    label="PIN13"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={currentVehicle.pin13 || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="factory_id"
                    label="Factory ID"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={currentVehicle.factory_id || ''}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default VehicleEditDialog;
