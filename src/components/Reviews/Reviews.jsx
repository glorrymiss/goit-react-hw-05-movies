import { URL, KEY } from 'components/ApiUrl/ApiURL';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    if (movieId) {
      setLoading(true);
      fetch(
        `${URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Sorry, not found`));
        })
        .then(data => setReviews(data.results))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
    //   useEffect(() => {
    //     ApiReviewsMovies().then(data => {
    //       return setReviews(data.results);
    //     });
  }, [movieId]);
  return (
    <ul>
      {loading && <Loader />}
      {reviews.length
        ? reviews.map(({ author, id, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })
        : 'Sorry, reviews not found'}
    </ul>
  );
};
export default Reviews;
