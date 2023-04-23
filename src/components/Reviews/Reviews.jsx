import { ApiReviewsMovies } from 'components/ApiUrl/ApiURL';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Description, List, Title } from './Reviews.styled';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    if (movieId) {
      setIsLoading(true);
      ApiReviewsMovies(movieId)
        .then(data => setReviews(data.results))
        .catch(error => console.log(error))
        .finally(setIsLoading(false));
    }
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}
      <List>
        {reviews.length
          ? reviews.map(({ author, id, content }) => {
              return (
                <li key={id}>
                  <Title>Author: {author}</Title>
                  <Description>{content}</Description>
                </li>
              );
            })
          : 'Sorry, reviews not found'}
      </List>
    </>
  );
};
export default Reviews;
