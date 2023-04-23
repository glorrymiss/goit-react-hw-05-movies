import { ApiReviewsMovies } from 'components/ApiUrl/ApiURL';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    if (movieId) {
      ApiReviewsMovies(movieId)
        .then(data => setReviews(data.results))
        .catch(error => console.log(error));
    }
  }, [movieId]);
  return (
    <ul>
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
