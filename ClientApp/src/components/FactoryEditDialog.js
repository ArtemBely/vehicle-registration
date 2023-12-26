import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Autocomplete } from '@mui/material';
import { factoryApi } from '../api/factory_api';

const FactoryEditDialog = ({ open, handleClose, handleSave, currentFactory, setCurrentFactory, users, addingNewFactory, isAdmin }) => {

    const handleSetDirector = (event, value) => {
        setCurrentFactory({ ...currentFactory, director_id: value ? value.id : '' });
    };

    const createOne = async () => {
        try {
            const response = await factoryApi.apiV1AdminFactoryCreatePost({
                title: currentFactory.title,
                factory_location: currentFactory.factory_location,
                director_id: currentFactory.director_id
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
            const response = await factoryApi.apiV1UserFactoryEditPut({
                id: currentFactory.id,
                title: currentFactory.title,
                factory_location: currentFactory.factory_location,
                director_id: currentFactory.director_id
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
            const responseApartments = await factoryApi.apiV1AdminFactoryDeleteDelete(id);
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
                    sx={{ display: addingNewFactory ? 'none' : 'flex' }}
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
                <Autocomplete
                    value={users.find(user => user.id === currentFactory.director_id) || null}
                    options={users}
                    getOptionLabel={(option) => `${option.firstName} ${option.surname}`}
                    onChange={(event, newValue) => {
                        setCurrentFactory({ ...currentFactory, director_id: newValue ? newValue.id : '' });
                    }}
                    renderInput={(params) => <TextField {...params} label="Director" margin="dense" />}
                    sx={{ display: isAdmin ? 'flex' : 'none' }}
                />


            </DialogContent>
            <DialogActions>
                <Button color="error"
                    variant="outlined" sx={{
                    display: isAdmin ? 'flex' : 'none'
                    }} onClick={() => deleteOne(currentFactory.id)}>Delete</Button>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={addingNewFactory ? createOne : editOne}>{addingNewFactory ? 'Save' : 'Edit'}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default FactoryEditDialog;
