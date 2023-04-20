import { ApiReviewsMovies } from 'components/ApiUrl/ApiURL';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    ApiReviewsMovies().then(data => {
      return setReviews(data.results);
    });
  }, []);
  return (
    <ul>
      {reviews.length &&
        reviews.map(({ author, id, content }) => {
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
    </ul>
  );
};
export default Reviews;
