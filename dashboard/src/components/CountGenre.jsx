import { Link } from "react-router-dom";

export default function CountGenre() {
  return (
    <section>
      <article>
        <h1>Genre</h1>
        <p>20</p>
        <Link to="/genres">
          <button>Detail</button>
        </Link>
      </article>
    </section>
  );
}
