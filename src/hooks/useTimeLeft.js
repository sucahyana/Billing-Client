
import { useState, useEffect } from 'react';
import getAllData from '../utils/getAllData';
import fixedData from '../utils/fixedData';

const useTimeLeft = (data) => {
    const [timeLeft, setTimeLeft] = useState({});
    const dataWithDurations = getAllData();

    useEffect(() => {
        const updatedData = fixedData.map(item => {
            const table = data.find(t => t.table === item.table);
            if (table) {
                const responseItem = dataWithDurations.find(d => d.number === table.id);
                if (responseItem) {
                    item.timeLeft = responseItem.durationInMinutes;
                }
            }
            return item;
        });

        setTimeLeft(updatedData.reduce((acc, cur) => {
            acc[cur.table] = cur.timeLeft * 60;
            return acc;
        }, {}));
    }, [dataWithDurations, data]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                const updatedTimeLeft = {...prevTime};
                Object.keys(updatedTimeLeft).forEach(table => {
                    updatedTimeLeft[table] = updatedTimeLeft[table] > 0 ? updatedTimeLeft[table] - 1 : 0;
                });
                return updatedTimeLeft;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return timeLeft;
};

export default useTimeLeft;
