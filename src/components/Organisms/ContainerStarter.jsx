import React from 'react';
import LeftSidebar from '../Molecules/SideBar';
import Navbar from "../Molecules/Navbar.jsx";

const ContainerStarter = ({ Content }) => {
    return (
        <div className="flex flex-col lg:flex-row bg-white min-h-screen mb-20 lg:mb-0">
            <Navbar/>
            <LeftSidebar className="hidden lg:block"/>
            <div className="flex flex-grow">

                <main className="flex-grow p-4 sm:p-8">
                    {Content}
                </main>
            </div>
        </div>
    );
};

export default ContainerStarter;
