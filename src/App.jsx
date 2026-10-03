import FootballHero from "./components/FootballHero/FootballHero";
import "./App.css";
import FootballInvite from "./components/FootballInvite/FootballInvite.jsx";
import GameDay from "./components/GameDay/GameDay.jsx";
import FinalFootball from "./components/FinalFootball/FinalFootball.jsx";
import Music from "./components/Music/Music.jsx";

function App() {
    return (
        <main>
            <Music/>
            <FootballHero />
            <FootballInvite/>
            <GameDay/>
            <FinalFootball/>
        </main>
    );
}

export default App;