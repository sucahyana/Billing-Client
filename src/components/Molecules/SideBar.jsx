import React from 'react';
import {Link} from "react-router-dom";
import {FaFirstOrder} from "react-icons/fa";
import {MdMonitor, MdSettingsSuggest} from "react-icons/md";
import logo from "../../assets/logo.png"

export default function LeftSidebar() {


    return (
        <aside
            className="shadow-lg hidden lg:flex flex-col justify-between h-screen p-5 border-r sticky top-0 whitespace-nowrap px-4 xl:px-12 bg-green-400">
            <Link to={"/"} className="mx-auto">
                <img className="w-auto h-36 bg-none" src={logo} alt="Logo Kumpulin" />
            </Link>
            <div className="flex flex-col justify-between w-full mt-24">
                <nav className="-mx-3 space-y-6 ">
                    <div className="space-y-4 ">
                        <span className={`border ml-4 border-gray-600`}></span>
                        <label className="px-3 text-base md:text-lg lg:text-xl text-gray-50 font-semibold ">Menu</label>

                        <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                              to={'/Monitoring'}>
                            <div>
                                <MdMonitor size={`24px`} className={`text-gray-600`}/>
                            </div>

                            <span className="mx-2 text-lg xl:text-xl font-medium">Monitoring</span>
                        </Link>

                        <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                              to={"/ordering"} >
                            <FaFirstOrder size="24px" className={`text-gray-600`}/>

                            <p className="mx-2 text-lg xl:text-xl font-medium whitespace-nowrap">Ordering</p>
                        </Link>
                        <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                              to={"/modif"}>
                            <MdSettingsSuggest size="24px" className={`text-gray-600`} />

                            <span className="mx-2 text-lg xl:text-xl font-medium">Modif</span>
                        </Link>
                    </div>
                </nav>
            </div>
            <footer className="flex flex-col mt-auto text-sm text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} Billing Billiard UPB.</p> <p className="">All rights reserved.</p>
            </footer>
        </aside>
    )
}
