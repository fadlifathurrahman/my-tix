import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SelectedMovie from "./pages/SelectedMovie";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/movie/:movieId", element: <SelectedMovie /> },
]);

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
