import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
    return (
        <Container>
            <Typography variant="h4" component="h2" align="center" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod libero non nisi
                accumsan ullamcorper. Duis a aliquam lacus, id tristique metus. Phasellus elementum justo
                eu arcu finibus, non condimentum justo euismod.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Aenean facilisis, lectus a scelerisque condimentum, odio magna ultrices nulla, ut laoreet
                quam ex at nibh. In ullamcorper quam ut convallis sollicitudin. Proin hendrerit maximus
                volutpat. Vestibulum ultrices ultrices ligula, nec egestas dolor vestibulum non.
            </Typography>
        </Container>
    );
};

export default About;

