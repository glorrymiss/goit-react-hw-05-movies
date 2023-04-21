import { useState } from 'react';
const Movies = ({ submit }) => {
  const [nameValue, setNameValue] = useState('');

  const hendleInput = event => {
    setNameValue(event.currentTarget.value.toLowerCase());
  };

  const hendleSubmit = event => {
    event.preventDefault();

    if (nameValue.trim() === '') {
      alert('Please enter the name of the movie');

      return;
    }

    submit(nameValue);
  };
  return (
    <form onSubmit={hendleSubmit}>
      <input
        type="text"
        name="nameValue"
        onChange={hendleInput}
        value={nameValue}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default Movies;
