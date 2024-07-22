import CoomingSoon from "../components/CoomingSoon";
import NowPlaying from "../components/NowPlaying";

export default function Home() {
    
    return(
        <main
        className="flex min-h-screen flex-col justify-between bg-zinc-300">
            <NowPlaying/>
            <CoomingSoon/>
        </main>
    );
}