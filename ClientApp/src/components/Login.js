import React, { Component } from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';

export class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: {}
    };

    validate = () => {
        let tempErrors = {};
        tempErrors.email = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(this.state.email) ? "" : "Email is not valid.";
        tempErrors.password = this.state.password ? "" : "This field is required.";
        this.setState({ errors: tempErrors });

        return Object.values(tempErrors).every(x => x === "");
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        if (this.validate()) {
            const { email, password } = this.state;
            await this.login(email, password);
        }
    };


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5284/api/v1/auth/logon', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
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
                window.sessionStorage.setItem('authenticated', 'true');
                window.location.href = data.role.includes('ADMIN') ?
                    '/analytics' :
                    '/account';
            } else {
                this.setState({ errors: { ...this.state.errors, form: 'Login failed. Check your email and password.' } });
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };


    render() {
        const { email, password, errors } = this.state;
        return (
            <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={this.handleChange}
                    error={!!errors.password}
                    helperText={errors.password}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Login
                </Button>
                <Typography>
                    Don't have an account yet?&nbsp;
                    <Link href="/registration" variant="body2" onClick={() => this.props.onSwitch('register')}>
                        Create it!
                    </Link>
                    &nbsp;Or go back to see &nbsp;
                    <Link href="/" variant="body2" onClick={() => this.props.onSwitch('register')}>
                       your abilities
                    </Link> &nbsp;in our service 
                </Typography>
            </Box>
        );
    }
}

