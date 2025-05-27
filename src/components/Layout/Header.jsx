import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import ThemeToggle from '../ThemeToggle';

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.headerBg};
  border-bottom: 1px solid ${props => props.theme.colors.headerBorder};
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  padding: 0.5rem 0;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/"></Logo>
        <Navigation />
        <HeaderRight>
          <ThemeToggle />
        </HeaderRight>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
