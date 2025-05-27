import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleButton = styled.button`
  background: none;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 6px;
  padding: 5px 10px;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.border};
  }

  svg {
    font-size: 16px;
  }
`;

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {isDarkMode ? <FaSun /> : <FaMoon />}
      {isDarkMode ? 'Light' : 'Dark'}
    </ToggleButton>
  );
}

export default ThemeToggle; 