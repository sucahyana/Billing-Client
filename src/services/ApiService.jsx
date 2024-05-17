import React from 'react';

class BillingService extends React.Component {
    constructor(props) {
        super(props);
        this.apiUrl = 'https://be-billing-iot.vercel.app';
    }

    getAllData = async () => {
        try {
            const response = await fetch(`${this.apiUrl}/data`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            if (responseData.status === 'success') {
                return responseData;
            } else {
                throw new Error(responseData.message);
            }
        } catch (error) {
            console.error('Error getting all billing:', error);
            return { status: 'error', message: 'Gagal mendapatkan data billing.' };
        }
    };

    setBillingTime = async (number, addTime) => {
        try {
            const response = await fetch(`${this.apiUrl}/waktu`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ number, addTime }),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error setting billing time:', error);
            return { status: 'error', message: 'Gagal mengatur waktu billing.' };
        }
    };

    stopBilling = async (number) => {
        try {
            const response = await fetch(`${this.apiUrl}/stop`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ number }),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error stopping billing:', error);
            return { status: 'error', message: 'Gagal menghentikan billing.' };
        }
    };

    resetBilling = async () => {
        try {
            const response = await fetch(`${this.apiUrl}/reset`, {
                method: 'DELETE',
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error resetting billing:', error);
            return { status: 'error', message: 'Gagal mereset billing.' };
        }
    };

    render() {
        return null;
    }
}



export { BillingService };
