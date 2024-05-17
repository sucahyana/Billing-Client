import React from 'react';

const Timer = ({ timeLeft }) => {
    const formatTime = (seconds) => {
        const days = Math.floor(seconds / (24 * 3600));
        const hours = Math.floor((seconds % (24 * 3600)) / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return { days, hours, mins, secs };
    };

    const { days, hours, mins, secs } = formatTime(timeLeft);

    if (timeLeft === 0) {
        return <div className="text-red-600 font-bold">Expired</div>;
    }

    return (
        <div className="flex justify-center mt-4">
            <div className="countdown-container bg-green-600 text-white rounded p-2 md:p-3 lg:p-4 xl:p-5 flex justify-center items-center gap-2">
                {days > 0 && (
                    <div className="flex flex-col items-center">
                        <span className="countdown font-mono text-base md:text-lg lg:text-xl xl:text-2xl">{days}</span>
                        <span className="text-xs md:text-sm lg:text-base">days</span>
                    </div>
                )}
                {hours > 0 && (
                    <div className="flex flex-col items-center">
                        <span className="countdown font-mono text-base md:text-lg lg:text-xl xl:text-2xl">{hours}</span>
                        <span className="text-xs md:text-sm lg:text-base">hours</span>
                    </div>
                )}
                {mins > 0 && (
                    <div className="flex flex-col items-center">
                        <span className="countdown font-mono text-base md:text-lg lg:text-xl xl:text-2xl">{mins}</span>
                        <span className="text-xs md:text-sm lg:text-base">mins</span>
                    </div>
                )}
                {secs > 0 && (
                    <div className="flex flex-col items-center">
                        <span className="countdown font-mono text-base md:text-lg lg:text-xl xl:text-2xl">{secs}</span>
                        <span className="text-xs md:text-sm lg:text-base">secs</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timer;
