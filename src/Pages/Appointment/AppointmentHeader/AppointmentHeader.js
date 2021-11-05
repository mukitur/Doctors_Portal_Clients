import { Container, Grid } from '@mui/material';
import React from 'react';
import chairImg from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';

const AppointmentHeader = ({date, setDate}) => {
    return (
        <Container container spacing={2} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Calender date={date} setDate={setDate}></Calender>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <img style={{width: '100%'}} src={chairImg} alt="" />
                    </Grid>
                </Grid>
        </Container>
    );
};

export default AppointmentHeader;