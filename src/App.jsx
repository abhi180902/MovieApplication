import "./css/App.css";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MovieCard from "./Components/MovieCard";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./Components/Navbar";
import { MovieProvider } from "./Contexts/MovieContext";
import Login from "./pages/Login";

// let router = createBrowserRouter([
//   {path:"/", element:<Home />},
//   {path:"/favorites", element:<Favorites />}
// ])

function App() {
  // <RouterProvider router={router}></RouterProvider>

  return (
    <div>
      <MovieProvider>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </MovieProvider>
    </div>
  );
}

export default App;

// function Text({display}){
//   return (
//     <div>
//       <p>{display}</p>
//     </div>
//   );
// }
