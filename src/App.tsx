import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';

import Stats from './components/Stats';
import Event from "./components/Event.tsx";
import KOL from "./components/KOL.tsx";
import DiscussionComponent from "./components/DiscussionComponent.tsx";
import AllianceIntroduction from "@/components/AllianceIntroduction.tsx";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Event />
        <KOL></KOL>
        <DiscussionComponent />
        <AllianceIntroduction></AllianceIntroduction>
    </div>
  );
}

export default App;
