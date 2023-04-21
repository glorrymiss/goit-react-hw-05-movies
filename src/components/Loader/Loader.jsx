import { InfinitySpin } from 'react-loader-spinner';
import { ButtonLoad } from './Loader.styled';
const Loader = () => {
  return (
    <ButtonLoad type="button">
      <InfinitySpin width="200" color="rgba(218, 13, 13, 0.868)" />
    </ButtonLoad>
  );
};
export default Loader;
