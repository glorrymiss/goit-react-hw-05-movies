import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const KEY = 'dc938579c590d583322532c91001c2e3';

export const Api = async () => {
  try {
    const responce = await axios.get(
      `${URL}/trending/movie/day?api_key=${KEY}`
    );

    console.log(responce.data);
    return responce.data;
  } catch (error) {
    console.log(error);
  }
};
