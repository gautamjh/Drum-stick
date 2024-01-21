import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>
                <Button color="inherit" component={Link} to="/home">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/about">
                    About
                </Button>
                <Button color="inherit" component={Link} to="/services">
                    Services
                </Button>
                <Button color="inherit" component={Link} to="/contact">
                    Contact
                </Button>
                <Button color="inherit" component={Link} to="/pdf">
                    PDF
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
