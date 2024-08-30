import CountGenre from "../components/CountGenre";
import CountMovie from "../components/CountMovie";

export default function Home() {
  return (
    <section>
      <CountMovie />
      <CountGenre />
    </section>
  );
}
