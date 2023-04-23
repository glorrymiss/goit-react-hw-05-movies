import { ApiCastActors } from 'components/ApiUrl/ApiURL';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import iconHuman from '../../images/iconHuman.png';
import { Item, List } from './Cast.styled';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      setIsLoading(true);
      ApiCastActors(movieId)
        .then(data => setActors(data.cast))
        .catch(error => console.log(error))
        .finally(setIsLoading(false));
    }
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}
      <List>
        {actors.length > 0
          ? actors.map(({ cast_id, name, character, profile_path }) => {
              return (
                <Item key={cast_id}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                        : iconHuman
                    }
                    alt={name}
                    width="200"
                  />
                  <div>
                    <h3>{name}</h3>
                    <p>
                      <b>Character:</b> {character}
                    </p>
                  </div>
                </Item>
              );
            })
          : 'Sorry, cast not found'}
      </List>
    </>
  );
};

export default Cast;
