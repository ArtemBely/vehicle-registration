import React, { Component } from 'react';
import { CssBaseline, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Typography, Container, Paper, Grid, Tooltip } from '@mui/material';
import { green, red } from '@mui/material/colors';
import NavBar from './NavBar';

export class Account extends Component {

    render() {
        // Access static properties using `this.constructor` for class components
        const { drawerWidth, mainFeatures } = this.constructor;

        return (
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            Automotive Factory Registrar
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <NavBar />
                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Container maxWidth="lg">
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="h5" gutterBottom>
                                Welcome to the Venetian Registrar
                            </Typography>
                            <Typography>
                                Our service streamlines the registration and management of changes within car manufacturing processes. Keep track of parts, vehicles, and alterations with ease.
                            </Typography>
                            {/* ... rest of your component */}
                        </Paper>
                    </Container>
                </Box>
            </Box>
        );
    }
};
