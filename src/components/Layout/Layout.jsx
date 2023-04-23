import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';
import { Container, Wrap } from './Layout.styled';
import Loader from 'components/Loader/Loader';
import { Footer } from 'components/Footer/Footer';
const Layout = () => {
  return (
    <Wrap>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </Wrap>
  );
};

export default Layout;
