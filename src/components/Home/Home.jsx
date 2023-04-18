import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Title } from '../Home/Home.styled';

const Home = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Title>Trending Today</Title>
      <ul>
        <li>
          <Link>Popular films</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
