import TimeAdditionForm from "../Molecules/TimeAdditionForm.jsx";
import { useEffect } from "react";
import { BillingService } from "../../services/ApiService.jsx";
import data from '../../utils/table.js';
import {notifyError, notifyLoading, notifySuccess, stopLoading} from "../Atoms/Toast.jsx";

const billingService = new BillingService();
const OrderingContent = () => {
    useEffect(() => {
        const fixedData = [
            {
                id: 1,
                table: 'Meja 001',
                timeLeft: 0
            },
            {
                id: 2,
                table: 'Meja 002',
                timeLeft: 0
            },
            {
                id: 3,
                table: 'Meja 003',
                timeLeft: 0
            },
            {
                id: 4,
                table: 'Meja 004',
                timeLeft: 0
            }
        ];
    }, []);

    const handleTimeAddition = async (table, minutesToAdd) => {
        try {
            notifyLoading('Setting billing time...');
            const response = await billingService.setBillingTime(data.find(item => item.table === table)?.id, minutesToAdd);
            stopLoading();
            if (response.status === 'success') {
                notifySuccess(response.message);
                console.log(response.message, table);
            } else {
                notifyError('Error setting billing time: ' + response.message);
                console.error('Error setting billing time:', response.message);
            }
        } catch (error) {
            stopLoading();
            notifyError('Error setting billing time: ' + table);
            console.error('Error setting billing time:', table);
        }
    };


    return (
        <div className="container mx-auto p-5 sm:p-10 md:p-16">
            <div className="border-b mb-5 flex justify-center text-sm">
                <div className="text-green-600 flex items-center pb-2 border-b-2 border-green-600 uppercase font-semibold">
                    Modif
                </div>
            </div>
            <TimeAdditionForm onSubmit={handleTimeAddition} />
        </div>
    );
};

export default OrderingContent;
