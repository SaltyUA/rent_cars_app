import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Modal } from '../Modal/Modal';
import { useSelector } from 'react-redux';
import { selectIsShowModal } from '../../redux/selectors';
import Footer from '../Footer/Footer';

const SharedLayout = () => {
  const isShowModal = useSelector(selectIsShowModal);
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      {isShowModal && <Modal />}
      <Footer />
    </>
  );
};

export default SharedLayout;
