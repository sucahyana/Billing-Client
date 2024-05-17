import { useState, useEffect } from "react";
import { BillingService } from "../services/ApiService.jsx";

const getAllData = () => {
    const billingService = new BillingService();
    const [dataWithDurations, setDataWithDurations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await billingService.getAllData();
                if (response.status === 'success' && response.data) {
                    const newDataWithDurations = response.data.map(item => ({
                        ...item,
                        durationInMinutes: convertToMinutes(item.start_at, item.expired_at)
                    }));
                    setDataWithDurations(newDataWithDurations);
                } else {
                    console.error('Error:', response);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const convertToMinutes = (start, end) => {
        const durationInMilliseconds = end - start;
        return durationInMilliseconds / 60000;
    };

    return dataWithDurations;
};

export default getAllData;
