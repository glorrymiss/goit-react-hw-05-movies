import axios from 'axios';
const { useParams } = require('react-router-dom');
// import { useState } from 'react';

export const URL = 'https://api.themoviedb.org/3/';
export const KEY = 'dc938579c590d583322532c91001c2e3';

export const ApiTrendMovies = async () => {
  try {
    const responce = await axios.get(`${URL}trending/movie/day?api_key=${KEY}`);

    return responce.data;
  } catch (error) {
    console.log(error);
  }
};

export const ApiSearchMovies = async () => {
  // const [value, setValue] = useState('');
  try {
    const response = await axios.get(
      `${URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=cat`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const ApiDetalsMovies = async () => {
  const { movieId } = useParams();
  try {
    const response = await axios.get(
      `${URL}movie/${movieId}?api_key=${KEY}&language=en-US`
    );
    return response.data;
    // const poster = `${URL}movie/1060385?api_key=${KEY}&language=en-US`;
  } catch (error) {
    console.log(error);
  }
};

export const ApiCastActors = async () => {
  // const { movieId } = useParams();
  try {
    const response = await axios.get(
      `${URL}movie/272/credits?api_key=${KEY}&language=en-US`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const ApiReviewsMovies = async id => {
  // const { movieId } = useParams();
  try {
    const response = await axios.get(
      `${URL}movie/272/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
