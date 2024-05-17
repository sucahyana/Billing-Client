import React, { useState } from 'react';
import YoutubeVideo from "../Atoms/YoutubeVideo.jsx";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import PrimeButton from "../Atoms/PrimeButton.jsx";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { RiBilliardsFill } from "react-icons/ri";
import Icon from "../Atoms/Icon.jsx";
import { IoTabletLandscape } from "react-icons/io5";
import Timer from "../Atoms/Timer.jsx";

const CardMonitoring = ({ item, showDialog, isHovered, setIsHovered, timeLeft }) => {
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        setIsMuted(prevState => !prevState);
    };

    return (
        <div
            key={item.id}
            className="card-monitoring rounded overflow-hidden shadow-lg relative bg-green-100"
            onMouseEnter={() => setIsHovered(item.id)}
            onMouseLeave={() => setIsHovered(null)}
        >
            <div className="card-monitoring-header">
                <div className="video-container relative">
                    <YoutubeVideo videoId={item.videoId} muted={isMuted} />
                    <div className="video-overlay hover:bg-transparent transition duration-300 absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-75"></div>
                    <div className={`status-badge rounded text-xs absolute top-2 right-2 bg-green-600 px-3 md:px-4 py-1 md:py-2 text-white mt-3 mr-3 hover:bg-white hover:text-green-600 transition duration-500 ease-in-out opacity-80 ${
                        isHovered === item.id ? 'block' : 'hidden'
                    }`}>
                        {timeLeft[item.table] > 0 ? 'Sedang Dipakai' : 'Tidak Dipakai'}
                    </div>
                </div>
                <section className="card-monitoring-info flex flex-row justify-between font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl hover:text-green-600 transition duration-500 ease-in-out px-4 md:px-6 py-3 md:py-4">
                    <div className="flex flex-row gap-1 md:gap-2">
                        <Icon icon={<RiBilliardsFill className="text-orange-700 text-lg md:text-xl lg:text-2xl" />} />
                        <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl">{item.name}</h1>
                    </div>
                    <div className="flex flex-row gap-1 md:gap-2">
                        <Icon icon={<IoTabletLandscape className="text-green-700 text-lg md:text-xl lg:text-2xl" />} />
                        <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl">{item.table}</h2>
                    </div>
                </section>
            </div>
            <footer className="card-monitoring-footer px-4 md:px-6 py-3 md:py-4 flex flex-row justify-between">
                <div className="flex flex-row gap-1 md:gap-2 justify-center items-center">
                    <PrimeButton
                        label={isMuted ? "Mute CCTV" : "Unmute CCTV"}
                        icon={isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                        onClick={toggleMute}
                        severity="secondary"
                        pt={{
                            label : {className :`text-red-900 text-sm lg:text-base `},
                            root : {className : ` py-1 px-2 md:py-2 md:px-3`}
                        }}
                        className="text-green-900 bg-green-200 border-2 border-green-400 shadow-lg hover:bg-green-100 hover:border-green-300"
                    />
                    <PrimeButton
                        icon={<MdOutlineZoomOutMap className="text-green-900" />}
                        onClick={() => showDialog(item.table)}
                        severity="secondary"
                        pt={{
                            label : {className :`text-red-900 text-sm md:text-base `},
                            root : {className : ` py-1 px-2 `}
                        }}
                        className="bg-green-200 border-2 border-green-400 shadow-lg hover:bg-green-100 hover:border-green-300"
                    />
                </div>
                <Timer timeLeft={timeLeft[item.table]} />
            </footer>
        </div>
    );
};

export default CardMonitoring;
