import React from 'react';
import ContainerStarter from "../components/Organisms/ContainerStarter";
import GetAllData from "../utils/getAllData.jsx";
import ModifContent from "../components/Organisms/ModifContent.jsx";

const Modif = () => {
    const dataWithDurations = GetAllData();

    const content = () => {
        return (
            <div>
                {dataWithDurations.map(item => (
                    <div key={item.id}>
                        <p>Number: {item.number}</p>
                        <p>Start At: {item.start_at}</p>
                        <p>Expired At: {item.expired_at}</p>
                        <p>Duration (Minutes): {item.durationInMinutes}</p>
                    </div>
                ))}
                <ModifContent/>
            </div>
        );
    };

    return <ContainerStarter Content={content()} />;
};

export default Modif;
