import axios from 'axios';

export const URL = 'https://api.themoviedb.org/3/';
export const KEY = 'dc938579c590d583322532c91001c2e3';

export const ApiTrendMovies = async () => {
  try {
    const responce = await axios.get(`${URL}trending/movie/day?api_key=${KEY}`);
    console.log(responce.data.results);
    return responce.data;
  } catch (error) {
    console.log(error);
  }
};

export const ApiSearchMovies = async query => {
  try {
    const response = await axios.get(
      `${URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const ApiDetalsMovies = async id => {
  try {
    const response = await axios.get(
      `${URL}movie/${id}?api_key=${KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const ApiCastActors = async castId => {
  try {
    const response = await axios.get(
      `${URL}movie/${castId}/credits?api_key=${KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const ApiReviewsMovies = async reviewId => {
  try {
    const response = await axios.get(
      `${URL}movie/${reviewId}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
