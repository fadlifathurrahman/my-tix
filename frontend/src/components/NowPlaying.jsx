import { useState } from "react";
import bannerExample from "../assets/banner-example.jpg";
import { Link } from "react-router-dom";

export default function NowPlaying() {
  const [showCount, setShowCount] = useState(4);
  const moviesExample = [
    { id: 1, title: "Movie Title 1", rating: "1", duration: "1hr", genre: "Drama" },
    { id: 2, title: "Movie Title 2", rating: "2", duration: "2hr", genre: "Action" },
    { id: 3, title: "Movie Title 3", rating: "3", duration: "3hr", genre: "Comedy" },
    { id: 4, title: "Movie Title 4", rating: "4", duration: "4hr", genre: "Horror" },
    { id: 5, title: "Movie Title 5", rating: "5", duration: "5hr", genre: "Adventure" },
    { id: 6, title: "Movie Title 6", rating: "6", duration: "6hr", genre: "Romance" },
    { id: 7, title: "Movie Title 7", rating: "7", duration: "7hr", genre: "Sci-Fi" },
    { id: 8, title: "Movie Title 8", rating: "8", duration: "8hr", genre: "Thriller" },
    { id: 9, title: "Movie Title 9", rating: "9", duration: "9hr", genre: "Fantasy" },
  ];

  return (
    <main className="flex min-h-screen flex-col p-4 sm:p-6">
      {/* title */}
      <article className="p-2 bg-red-600 text-white sticky top-20 sm:top-28 z-10">
        <h1 className="text-xl sm:text-3xl font-bold">Now Playing</h1>
      </article>

      {/* search bar */}
      <article className="bg-red-500 text-white flex flex-col sm:flex-row gap-3 sm:gap-5 w-full justify-center items-center py-2 sticky top-28 sm:top-40 rounded-b-xl sm:rounded-b-3xl">
        {/* search */}
        <section className="flex gap-3 sm:gap-5 items-center w-full sm:w-auto">
          <button className="text-sm sm:text-base">Search</button>
          <input
            type="text"
            placeholder="Search movies title"
            className="px-2 py-1 text-black focus:outline-none focus:border-none w-full sm:w-auto"
          />
        </section>
        {/* genre */}
        <section className="flex gap-3 sm:gap-5 items-center w-full sm:w-auto">
          <p className="text-sm sm:text-base">Genre</p>
          <select name="genre" id="" className="bg-red-600 text-white py-1 px-3 text-sm sm:text-base w-full sm:w-auto">
            <option value="genre">All</option>
            {moviesExample
              .map((movie) => movie.genre)
              .map((genre) => (
                <option value={genre} key={genre}>
                  {genre}
                </option>
              ))}
          </select>
        </section>
      </article>

      {/* movies list */}
      <article className="p-3 sm:p-5 w-full flex gap-4 sm:gap-5 flex-wrap justify-center items-center flex-col">
        <div className="flex gap-3 sm:gap-5 flex-wrap justify-center sm:justify-around items-center w-full">
          {moviesExample.slice(0, showCount).map((movie) => {
            return (
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
                className="flex flex-col w-2/5 sm:w-1/5 items-center p-2 bg-yellow-300 rounded-b-xl sm:rounded-b-3xl"
              >
                {/* movie banner */}
                <img src={bannerExample} alt={movie.title} className="w-full h-auto" />
                {/* movie info */}
                <div className="flex gap-2 sm:gap-3 flex-col items-center w-full p-2 sm:p-3">
                  <p className="text-lg sm:text-2xl font-bold">{movie.title}</p>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-sm sm:text-base">Rating: {movie.rating}</p>
                    <p className="text-sm sm:text-base">Duration: {movie.duration}</p>
                  </div>
                  <p className="text-sm sm:text-base">Genre: {movie.genre}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* buttons container */}
        <div className="w-full flex justify-center items-center gap-3">
          {showCount < moviesExample.length && (
            <button
              onClick={() => setShowCount((prevCount) => prevCount + 4)}
              className="bg-blue-500 text-white py-2 px-4 w-2/5 sm:w-1/6 text-sm sm:text-base"
            >
              Show More
            </button>
          )}
          {showCount > 4 && (
            <button
              onClick={() => setShowCount(4)}
              className="bg-blue-500 text-white py-2 px-4 w-2/5 sm:w-1/6 text-sm sm:text-base"
            >
              Show Less
            </button>
          )}
        </div>
      </article>
    </main>
  );
}
