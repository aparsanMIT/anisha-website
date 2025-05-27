import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.accent};
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
  
  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    margin: 0 0.5rem;
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>© {new Date().getFullYear()} Anisha Parsan. All rights reserved.</div>
        <SocialLinks>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
