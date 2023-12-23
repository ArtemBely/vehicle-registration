import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Autocomplete } from '@mui/material';

const FactoryEditDialog = ({ open, handleClose, handleSave, currentFactory, setCurrentFactory, users }) => {

    const handleSetDirector = (event, value) => {
        setCurrentFactory({ ...currentFactory, director_id: value ? value.id : '' });
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Factory</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="ID"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={currentFactory.id || ''}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    margin="dense"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={currentFactory.title || ''}
                    onChange={(e) => setCurrentFactory({ ...currentFactory, title: e.target.value })}
                />
                <TextField
                    margin="dense"
                    label="Factory Location"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={currentFactory.factory_location || ''}
                    onChange={(e) => setCurrentFactory({ ...currentFactory, factory_location: e.target.value })}
                />
                <TextField
                    margin="dense"
                    label="Director ID"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={currentFactory.director_id || ''}
                    onChange={(e) => setCurrentFactory({ ...currentFactory, director_id: e.target.value })}
                />
                <Autocomplete
                    options={users}
                    getOptionLabel={(option) => option.firstName + ' ' + option.surname}
                    renderInput={(params) => <TextField {...params} label="Director" />}
                    onChange={handleSetDirector}
                    value={users.find(user => user.id === currentFactory.director_id) || null}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default FactoryEditDialog;
