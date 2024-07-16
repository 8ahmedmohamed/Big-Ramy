import React from 'react';

// Routes
import Routes from './Routes';

const RouteProvider = ({ children }) => {
    return (
        <React.Fragment>
            <Routes />
            {children}
        </React.Fragment>
    )
}

export default RouteProvider;