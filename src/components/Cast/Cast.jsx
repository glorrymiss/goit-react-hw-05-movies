// import { ApiCastActors } from 'components/ApiUrl/ApiURL';
import { KEY, URL } from 'components/ApiUrl/ApiURL';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import iconHuman from '../../images/iconHuman.png';
import { Item, List } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      setLoading(true);
      fetch(`${URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Sorry, not found`));
        })
        .then(data => setActors(data.cast))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
    // ApiCastActors(id).then(data => {
    //   return setActors(data.cast);
    // });
  }, [movieId]);
  return (
    <>
      {loading && <Loader />}
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
