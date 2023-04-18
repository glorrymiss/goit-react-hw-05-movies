import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from '../components/pages/MoviesPage';
import MovieDetals from './pages/MovieDetals';
import Layout from './Layout/Layout';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetals />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
