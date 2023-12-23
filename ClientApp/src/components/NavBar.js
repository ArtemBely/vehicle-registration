import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import { Check as CheckIcon, Clear as ClearIcon, Home as HomeIcon, Assessment, Build, DirectionsCar } from '@mui/icons-material';


const NavBar = () => {

   const drawerWidth = 240;

    const mainFeatures = [
        { icon: <HomeIcon />, text: 'Overview', path: '/overview' },
        { icon: <Assessment />, text: 'Analytics', path: '/analytics' },
        { icon: <Build />, text: 'Parts Management', path: '/factories' },
        { icon: <DirectionsCar />, text: 'Vehicle Tracking', path: '/vehicle-tracking' }
    ];


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
                        <ListItem button key={feature.text} component={Link} to={feature.path}>
                            <ListItemIcon>
                                {feature.icon}
                            </ListItemIcon>
                            <ListItemText primary={feature.text} />
                        </ListItem>
                    ))}
                </List>

            </Box>
        </Drawer>
    );
};

export default NavBar;