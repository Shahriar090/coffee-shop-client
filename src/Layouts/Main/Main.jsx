import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className="pt-32">
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Main;