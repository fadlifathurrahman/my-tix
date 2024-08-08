import { useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SelectedMovie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
