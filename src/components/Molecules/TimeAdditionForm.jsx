import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import {FaArrowAltCircleDown, FaArrowAltCircleUp} from 'react-icons/fa';

const TimeAdditionForm = ({ onSubmit }) => {
    const [selectedTable, setSelectedTable] = useState('');
    const [minutesToAdd, setMinutesToAdd] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedTable || !minutesToAdd) return;
        onSubmit(selectedTable, parseInt(minutesToAdd));
        setSelectedTable('');
        setMinutesToAdd('');
    };

    const tableOptions = [
        { label: 'Select Table', value: null },
        { label: 'Meja 001', value: 'Meja 001' },
        { label: 'Meja 002', value: 'Meja 002' },
        { label: 'Meja 003', value: 'Meja 003' },
        { label: 'Meja 004', value: 'Meja 004' }
    ];

    return (
        <form onSubmit={handleSubmit} className="p-grid p-fluid bg-green-300 shadow-lg p-4 rounded-lg ">
            <div className="p-col-12 md:p-4">
                <label htmlFor="tableSelect" className="block text-gray-900 text-lg font-medium">Select Table:</label>
                <Dropdown
                    id="tableSelect"
                    value={selectedTable}
                    options={tableOptions}
                    onChange={(e) => setSelectedTable(e.value)}
                    placeholder="Select Table"
                    className="p-inputtext bg-green-100 text-base font-medium"
                    pt={{
                        list: { className: `text-gray-900` },
                        itemLabel: { className: `text-gray-900` },
                        input: { className: `text-gray-900` }
                    }}
                />
            </div>
            <div className="p-col-12 md:p-4">
                <label htmlFor="minutesToAdd" className="block text-gray-900 text-lg font-medium">Minutes to Add:</label>
                <div className="card flex justify-content-center">
                    <InputNumber
                        id="minutesToAdd"
                        value={minutesToAdd}
                        onChange={(e) => setMinutesToAdd(e.value)}
                        showButtons
                        buttonLayout="vertical"
                        mode="decimal"
                        decrementButtonClassName="p-button-secondary"
                        incrementButtonClassName="p-button-secondary"
                        incrementButtonIcon={<FaArrowAltCircleUp />}
                        decrementButtonIcon={<FaArrowAltCircleDown />}
                        className="p-inputtext bg-green-100 text-gray-700 text-base font-medium"
                        pt={{
                            root: { className: ` bg-green-100"` },
                            input: { className: `text-gray-900 bg-green-100` }
                        }}
                    />
                </div>
            </div>
            <div className="p-col-12 p-2 md:p-4 flex items-center justify-center">
                <Button type="submit" label="Submit" className="w-[20%] text-gray-700 text-lg font-medium p-button p-button-raised p-button-primary p-3 border-2 border-gray-500" />
            </div>
        </form>
    );
};

export default TimeAdditionForm;
