import { Link } from "react-router-dom";

export default function CountMovie() {
  return (
    <section>
      <article>
        <h1>Movies</h1>
        <p>10</p>
        <Link to="/movies">
          <button>Detail</button>
        </Link>
      </article>
    </section>
  );
}
