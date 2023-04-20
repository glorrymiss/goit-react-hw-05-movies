import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../../src/pages/Home';
import Movies from '../../src/pages/Movies';
import MovieDetals from '../../src/pages/MovieDetals';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetals />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
