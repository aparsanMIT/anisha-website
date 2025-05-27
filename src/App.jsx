import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import Layout from './components/Layout/Layout';
import './styles/globals.css';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    transition: background-color 0.2s, color 0.2s;
  }
`;

function AppContent() {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Layout />
      </Router>
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
