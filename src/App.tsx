
import Stats from './components/Stats';
import Process from "@/components/Process.tsx";
import KOL from "@/components/KOL.tsx";
import AllianceIntroduction from "@/components/AllianceIntroduction.tsx";
import Event from "@/components/Event.tsx";
function App() {
    return (
        <div className="bg-[#000B9F]">
            <Stats />
            <Process />
            <Event />
            <KOL></KOL>
            <AllianceIntroduction></AllianceIntroduction>
        </div>
    );
}

export default App;
