import React, { Component } from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import Grid from '@mui/material/Grid';

export class Registration extends Component {
    state = {
        values: {
            name: '',
            surname: '',
            phonenumber: '',
            dateOfBirth: '',
            email: '',
            userName: '',
            password: '',
        },
        errors: {}
    };

    validate = () => {
        let temp = { ...this.state.errors };
        temp.name = this.state.values.name ? "" : "This field is required.";
        temp.surname = this.state.values.surname ? "" : "This field is required.";
        temp.phonenumber = (/^\d{10,}$/).test(this.state.values.phonenumber) ? "" : "Minimum 10 numbers required. Don't use special symbols, only numbers";
        temp.dateOfBirth = this.state.values.dateOfBirth ? "" : "This field is required.";
        temp.email = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(this.state.values.email) ? "" : "Email is not valid.";
        temp.password = this.state.values.password.length > 5 ? "" : "Minimum 6 characters required.";
        this.setState({ errors: temp });

        return Object.values(temp).every(x => x === "");
    };

    signUp = async (email, userName, name, password, surname, phonenumber, dateOfBirth) => {
        try {
            const response = await fetch('http://localhost:5284/api/v1/auth/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    userName,
                    name,
                    password,
                    surname,
                    phonenumber,
                    dateOfBirth
                })
            });

            const data = await response.json();

            if (response.ok) {
                // Store token and user details in localStorage
                localStorage.setItem('token', data.message);
                localStorage.setItem('activeUser', JSON.stringify({
                    id: data.id,
                    name: data.name,
                    surname: data.surname,
                    email: data.email,
                    phonenumber: data.phoneNumber,
                    dateOfBirth: data.dateOfBirth,
                    roles: data.role
                }));

                // Set authentication flag in sessionStorage
                window.sessionStorage.setItem('authenticated', 'true');
                window.location.href = "/account";
            } else {
                // Handle non-OK responses
                throw new Error('Please check your email and password');
            }
        } catch (err) {
            console.error(err);
        }
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        if (this.validate()) {
            const { email, userName, name, password, surname, phonenumber, dateOfBirth } = this.state.values;
            try {
                await this.signUp(email, userName, name, password, surname, phonenumber, dateOfBirth);
            } catch (error) {
                console.error('Mistake in registration: ', error);
            }
        }
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            values: {
                ...prevState.values,
                [name]: value
            }
        }));
    };


    render() {
        const { values, errors } = this.state;
        return (
            <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Name"
                            name="name"
                            value={values.name}
                            onChange={this.handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Surname"
                            name="surname"
                            value={values.surname}
                            onChange={this.handleChange}
                            error={!!errors.surname}
                            helperText={errors.surname}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Phone"
                            name="phonenumber"
                            value={values.phonenumber}
                            onChange={this.handleChange}
                            error={!!errors.phonenumber}
                            helperText={errors.phonenumber}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Date of Birth"
                            name="dateOfBirth"
                            type="date"
                            value={values.dateOfBirth}
                            onChange={this.handleChange}
                            error={!!errors.dateOfBirth}
                            helperText={errors.dateOfBirth}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={this.handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </Grid>
                    <Grid item xs={6} style={{ display: 'none' }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="userName"
                            name="userName"
                            value={values.email}
                            onChange={this.handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={this.handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Register
                </Button>
                <Typography>
                    Already have an account? <Link href="/logon" variant="body2" onClick={() => this.props.onSwitch('login')}>Login</Link>
                </Typography>
            </Box>
        );
    }
}

