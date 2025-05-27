import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const NavItem = styled(NavLink)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem;
  position: relative;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  
  &.active {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${props => props.theme.colors.background};
  min-width: 160px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  z-index: 1000;
  padding: 0.5rem 0;
`;

const DropdownItem = styled(NavLink)`
  color: ${props => props.theme.colors.text};
  padding: 0.5rem 1rem;
  display: block;
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.primary};
  }
  
  &.active {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
  }
`;

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Nav>
      <NavItem to="/" end>About</NavItem>
      <NavItem to="/cv">CV</NavItem>
      <DropdownContainer
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <NavItem to="/cell">Cell</NavItem>
        <DropdownContent isOpen={isDropdownOpen}>
          <DropdownItem to="/papers">Papers & Readings</DropdownItem>
          <DropdownItem to="/classes">Classes</DropdownItem>
          <DropdownItem to="/blog">Blog</DropdownItem>
        </DropdownContent>
      </DropdownContainer>
    </Nav>
  );
}

export default Navigation;
