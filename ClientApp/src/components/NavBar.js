import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Tooltip, Box } from '@mui/material';
import { Check as CheckIcon, Clear as ClearIcon, Person, Home as HomeIcon, Assessment, Build, AccountCircle, DirectionsCar } from '@mui/icons-material';


const NavBar = () => {

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (typeof window != "undefined") {
            setIsAdmin(JSON.parse(localStorage.getItem('activeUser')).roles.includes('ADMIN'));
        }
    }, []);

   const drawerWidth = 240;

    const mainFeatures = [
        { icon: <HomeIcon />, text: 'Overview', path: '/overview', visibility: isAdmin },
        { icon: <Assessment />, text: 'Analytics', path: '/analytics', visibility: isAdmin },
        { icon: <Build />, text: 'Factories', path: '/factories' },
        { icon: <DirectionsCar />, text: 'Vehicle Tracking', path: '/vehicle-tracking' },
        { icon: <Person />, text: 'Account', path: '/account' }

    ];

    const handleLogon = () => {
        localStorage.clear();
        window.location.href = '/';
    };

    return (
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
                <List>
                    {mainFeatures.map((feature, index) => (
                        <ListItem button key={feature.text} sx={{
                            display: (feature.text === 'Analytics' || feature.text === 'Overview')
                                && !feature.visibility ? 'none' : 'flex'
                        }} component={Link} to={feature.path}>
                            <ListItemIcon>
                                {feature.icon}
                            </ListItemIcon>
                            <ListItemText primary={feature.text} />
                        </ListItem>
                    ))}
                    <Tooltip title="Sign out" placement="right">
                        <ListItem button onClick={handleLogon}>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText primary="Sign out" />
                        </ListItem>
                    </Tooltip>
                </List>

            </Box>
        </Drawer>
    );
};

export default NavBar;