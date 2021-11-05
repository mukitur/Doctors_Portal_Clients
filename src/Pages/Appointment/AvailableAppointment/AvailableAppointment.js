import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div>
            <h2 style={{color: 'blue'}}> Available Appointment on {date.toDateString()}</h2>
        </div>
    );
};

export default AvailableAppointment;