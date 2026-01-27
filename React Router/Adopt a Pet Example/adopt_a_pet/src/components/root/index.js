import React from 'react';
import Navigation from '../navigation';
// import Outlet
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <Navigation/>
            {/* Outlet tells the parent route where it should render nested elements */}
            <Outlet/>
        </>
    );
};

export default Root;