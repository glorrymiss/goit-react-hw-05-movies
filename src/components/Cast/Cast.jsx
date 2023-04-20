import { ApiCastActors } from 'components/ApiUrl/ApiURL';
import { useEffect, useState } from 'react';

const Cast = () => {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    ApiCastActors().then(data => {
      return setActors(data.cast);
    });
  }, []);
  return (
    <>
      <ul>
        {actors.length &&
          actors.map(({ cast_id, name, character, profile_path }) => {
            return (
              <li key={cast_id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : 'Sorry'
                  }
                  alt={name}
                />
                <p>{name}</p>
                <p>
                  <b>Character:</b> {character}
                </p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Cast;
