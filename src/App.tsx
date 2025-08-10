
import Process from './components/Process';
import Stats from './components/Stats';
import Event from "./components/Event.tsx";
import KOL from "./components/KOL.tsx";
import AllianceIntroduction from "@/components/AllianceIntroduction.tsx";
import Footer from "./components/Footer.tsx";
function App() {
    return (
        <div className=" bg-white">
            <Stats />
            <Process />
            <Event />
            <KOL></KOL>
            <AllianceIntroduction></AllianceIntroduction>
            <Footer />
        </div>
    );
}

export default App;
