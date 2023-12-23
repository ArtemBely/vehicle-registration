import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const UserEditDialog = ({ open, handleClose, handleSave, currentUser, setCurrentUser }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit User</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={currentUser.email || ''}
                    onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
                />
                <TextField
                    margin="dense"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={currentUser.firstName || ''}
                    onChange={(e) => setCurrentUser({ ...currentUser, firstName: e.target.value })}
                />
                <TextField
                    margin="dense"
                    label="Lastname"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={currentUser.surname || ''}
                    onChange={(e) => setCurrentUser({ ...currentUser, surname: e.target.value })}
                />
                <TextField
                    margin="dense"
                    label="Phone"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={currentUser.phonenumber || ''}
                    onChange={(e) => setCurrentUser({ ...currentUser, phonenumber: e.target.value })}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default UserEditDialog;
