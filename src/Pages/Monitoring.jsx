import ContainerStarter from "../components/Organisms/ContainerStarter.jsx";
import MonitoringContent from "../components/Organisms/MonitoringContent.jsx";



const Monitoring = () => {
    const content = () => {
        return (
            <MonitoringContent/>
        )
    }
    return (
        <ContainerStarter Content={content()}/>
    )
}

export default Monitoring;
