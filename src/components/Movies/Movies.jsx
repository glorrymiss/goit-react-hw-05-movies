import { useState } from 'react';
import { Button, Input } from './Movies.styled';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
const Movies = ({ submit }) => {
  const [nameValue, setNameValue] = useState('');

  const hendleInput = event => {
    setNameValue(event.currentTarget.value.toLowerCase());
  };

  const hendleSubmit = event => {
    event.preventDefault();

    if (nameValue.trim() === '') {
      Notiflix.Notify.failure('Please enter the name of the movie');

      return;
    }

    submit(nameValue);
    setNameValue('');
  };
  return (
    <form onSubmit={hendleSubmit}>
      <Input
        type="text"
        name="nameValue"
        onChange={hendleInput}
        value={nameValue}
        placeholder="Enter name movie..."
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

Movies.propTypes = {
  submit: PropTypes.func.isRequired,
};
export default Movies;
