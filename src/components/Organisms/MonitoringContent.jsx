import React, { useState } from 'react';
import CardMonitoring from '../Molecules/CardMonitoring.jsx';
import useTimeLeft from '../../hooks/useTimeLeft.js';
import data from '../../utils/table.js';
import YoutubeVideo from "../Atoms/YoutubeVideo.jsx";
import {Dialog} from "primereact/dialog";

const MonitoringContent = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [selectedTable, setSelectedTable] = useState(null);
    const timeLeft = useTimeLeft(data);

    const toggleMute = () => {
        setIsMuted(prevState => !prevState);
    };

    const showDialog = (table) => {
        setSelectedTable(table);
        setIsDialogVisible(true);
    };

    const hideDialog = () => {
        setSelectedTable(null);
        setIsDialogVisible(false);
    };

    return (
        <div className="container mx-auto p-5 sm:p-10 md:p-16">
            <div className="border-b mb-5 flex justify-center text-sm">
                <div className="text-green-600 flex items-center pb-2 border-b-2 border-green-600 uppercase font-semibold">
                    Monitoring
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
                {data.map(item => (
                    <CardMonitoring
                        key={item.id}
                        item={item}
                        showDialog={showDialog}
                        timeLeft={timeLeft}
                    />
                ))}
            </div>

            <Dialog header={`CCTV ${selectedTable}`}
                    visible={isDialogVisible}
                    onHide={hideDialog}
                    fullscreen
                    maximized={true}
                    pt={{
                        root: {className: 'max-w-full md:max-w-[80%]'},
                    }}>
                <YoutubeVideo videoId={data.find(item => item.table === selectedTable)?.videoId} muted={isMuted}/>
                <div
                    className="absolute bottom-0 top-0 right-0 left-0  mx-6 my-16"></div>
            </Dialog>
        </div>
    );
};

export default MonitoringContent;
