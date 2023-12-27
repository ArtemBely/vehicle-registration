import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { adminApi } from '../api/admin_api';
import { registerApi } from '../api/register_api';

const UserEditDialog = ({ open, handleClose, handleSave, currentUser, setCurrentUser, addingNewUser }) => {

    const signUp = async () => {
        try {
            const response = await adminApi.apiV1AdminAnalyticsCustomersCreatePost({
                email: currentUser.email,
                userName: currentUser.email,
                name: currentUser.firstName,
                password: currentUser.password,
                surname: currentUser.surname,
                phoneNumber: currentUser.phoneNumber
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
            const response = await adminApi.apiV1AdminAnalyticsCustomersUpdatePut({
                email: currentUser.email,
                FirstName: currentUser.firstName,
                surname: currentUser.surname,
                phoneNumber: currentUser.phoneNumber
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

    const deleteOne = async (email) => {
        try {
            const responseApartments = await adminApi.apiV1AdminAnalyticsCustomersDeleteDelete(email);
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

    const makAnAdmin = async (userName) => {
        try {
            await registerApi.apiV1AuthMakeAdminPost({ userName });
            if (typeof window != 'undefined') {
                window.location.reload();
            }
        } catch (error) {
            console.error('Mistake in API request', error);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{addingNewUser ? 'Add User' : 'Edit User'}</DialogTitle>
            <DialogContent>
                <TextField
                    required    
                    autoFocus
                    margin="dense"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={currentUser.email || ''}
                    InputProps={{
                        readOnly: !addingNewUser
                    }}
                    onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
                />
                <TextField
                    required
                    margin="dense"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={currentUser.firstName || ''}
                    onChange={(e) => setCurrentUser({ ...currentUser, firstName: e.target.value })}
                />
                <TextField
                    required
                    margin="dense"
                    label="Lastname"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={currentUser.surname || ''}
                    onChange={(e) => setCurrentUser({ ...currentUser, surname: e.target.value })}
                />
                <TextField
                    required
                    margin="dense"
                    label="Phone"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={currentUser.phoneNumber || ''}
                    onChange={(e) => setCurrentUser({ ...currentUser, phoneNumber: e.target.value })}
                />
                {addingNewUser && (
                    <TextField
                        required
                        margin="dense"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={currentUser.password || ''}
                        onChange={(e) => setCurrentUser({ ...currentUser, password: e.target.value })}
                    />
                )}
            </DialogContent>
            <DialogActions>
                <Button sx={{
                    display: currentUser.isAdmin ? 'flex' : 'none',
                    padding: '5px',
                    backgroundColor: '#4caf50',
                    color: 'white',
                    textAlign: 'center',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    '&:hover': {
                        backgroundColor: '#4caf50',
                        color: 'white',
                    }
                }}>
                    ADMIN
                </Button>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={addingNewUser ? signUp : editOne} variant="outlined">{addingNewUser ? 'Create' : 'Save'}</Button>
                <Button onClick={() => makAnAdmin(currentUser.userName)} variant="contained" sx={{ display: addingNewUser || currentUser.isAdmin ? 'none' : 'flex' }}>Make an admin</Button>
                <Button onClick={() => deleteOne(currentUser.email)} color="error" variant="outlined" sx={{ display: addingNewUser ? 'none' : 'flex' }}>Delete</Button>
            </DialogActions>
        </Dialog>
    );
};

export default UserEditDialog;
