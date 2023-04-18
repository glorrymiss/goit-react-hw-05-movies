import { useEffect, useState } from 'react';
const Movies = () => {
  const [value, setValue] = useState('');
  useEffect(() => {}, [value]);

  return (
    <form>
      <input type="text" />
      <button type="submit">Search</button>
    </form>
  );
};
export default Movies;
