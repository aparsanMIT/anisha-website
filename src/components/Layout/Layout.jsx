import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from '../../pages/About';
import CV from '../../pages/CV';
import Cell from '../../pages/Cell';
import Classes from '../../pages/Classes';
import Blog from '../../pages/Blog';
import Travels from '../../pages/Travels';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/cell" element={<Cell />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/travels" element={<Travels />} />
        </Routes>
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
}

export default Layout; 