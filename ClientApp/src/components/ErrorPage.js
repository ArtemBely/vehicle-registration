import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ErrorPage = ({ errorCode }) => {
    const errorMessages = {
        404: 'Page not found',
    };

    const errorMessage = errorMessages[errorCode] || 'Mistake';

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            bgcolor: 'background.default',
            color: 'text.primary'
        }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Mistake {errorCode}
            </Typography>
            <Typography variant="h5" gutterBottom>
                {errorMessage}
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => window.location.href = '/analytics'}
            >
                Back to analytics
            </Button>
        </Box>
    );
};

export default ErrorPage;
