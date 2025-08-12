
import Stats from './components/Stats';
import Process from "@/components/Process.tsx";
import KOL from "@/components/KOL.tsx";
import AllianceIntroduction from "@/components/AllianceIntroduction.tsx";
import Footer from "@/components/Footer.tsx";
import Event from "@/components/Event.tsx";
function App() {
    return (
        <div className="bg-[#000B9F]">
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
