import { useEffect, useState } from "react";

export default function Genres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8081/api/genre/find-all`)
      .then((response) => response.json())
      .then((genres) => setGenres(genres));
  }, []);

  const onDelete = (id) => {
    fetch(`http://localhost:8081/api/genre/delete-genre/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        setGenres(genres.filter((genre) => genre.id !== id));
      }
    });
  };

  return (
    <>
      <h1>Genres</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {genres.map((genre) => (
            <tr key={genre.id}>
              <td className="py-2 px-4 border-b">{genre.genreName}</td>
              <td className="py-2 px-4 border-b">
                <button onClick={() => onDelete(genre.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}


