import React from 'react';
import ContainerStarter from "../components/Organisms/ContainerStarter";
import OrderingContent from "../components/Organisms/OrderingContent.jsx";

const Ordering = () => {


    const content = () => {
        return (
            <div>

                <OrderingContent/>
            </div>
        );
    };

    return <ContainerStarter Content={content()} />;
};

export default Ordering;
