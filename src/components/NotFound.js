import React from 'react';

const NotFound = () => {
    const notFoundStyle = {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
        fontSize:'30px'


    }
    return (
        <div style={notFoundStyle}>
            <h1>404 : not found</h1>
        </div>
    );
};

export default NotFound;