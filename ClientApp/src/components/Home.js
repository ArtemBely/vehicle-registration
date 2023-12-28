import React, { Component } from 'react';
import { CssBaseline, Box, AppBar, Toolbar, Typography, Container, Paper, Grid, Button, Tooltip } from '@mui/material';
import { Check as CheckIcon, Clear as ClearIcon } from '@mui/icons-material';
import { green, red } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';


export class Home extends Component {


    renderFeatureRow(featureName, guestAccess, managerAccess, adminAccess) {
        return (
            <>
                <Grid item xs={4}><Typography>{featureName}</Typography></Grid>
                <Grid item xs={2} align="center">
                    {guestAccess ? <CheckIcon style={{ color: green[500] }} /> : <ClearIcon style={{ color: red[500] }} />}
                </Grid>
                <Grid item xs={3} align="center">
                    {managerAccess ? <CheckIcon style={{ color: green[500] }} /> : <ClearIcon style={{ color: red[500] }} />}
                </Grid>
                <Grid item xs={3} align="center">
                    {adminAccess ? <CheckIcon style={{ color: green[500] }} /> : <ClearIcon style={{ color: red[500] }} />}
                </Grid>
            </>
        );
    }

    render() {

        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            Automotive Factory Registrar
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="md" style={{ marginTop: '40px' }}>
                    <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h4" gutterBottom>
                            Welcome to Vehicle Registration Service
                        </Typography>
                        <Typography variant="subtitle1" style={{ textAlign: 'center' }}>
                            Explore the features available for different roles in the system.
                        </Typography>

                        <Grid container spacing={2} style={{ marginTop: '24px', marginBottom: '24px' }}>
                            <Grid item xs={4}><Typography variant="h6">Feature</Typography></Grid>
                            <Grid item xs={2}><Typography variant="h6" align="center">Guest</Typography></Grid>
                            <Grid item xs={3}><Typography variant="h6" align="center">Manager</Typography></Grid>
                            <Grid item xs={3}><Typography variant="h6" align="center">Admin</Typography></Grid>

                            {this.renderFeatureRow('View Welcome Page', true, true, true)}
                            {this.renderFeatureRow('Modify Part Names', false, true, true)}
                            {this.renderFeatureRow('Move Vehicles Between Factories', false, true, true)}
                            {this.renderFeatureRow('User Management', false, false, true)}
                            {this.renderFeatureRow('Factory management', false, false, true)}
                            {this.renderFeatureRow('Opportunity to appoint a director', false, false, true)}
                        </Grid>

                        <Box style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                            <Button variant="contained" color="primary" component={NavLink} to="/logon" sx={{
                                '&:hover': {
                                    color: 'white'
                                }
                            }} >
                                Login
                            </Button>
                        <Button variant="contained" color="secondary" component={NavLink} to="/registration" sx={{
                            '&:hover': {
                                color: 'white'
                            }
                        }} >
                                Register
                            </Button>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        );
    }
};



