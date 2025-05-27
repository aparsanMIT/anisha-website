import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import headshot from '../assets/headshot.jpg';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const WelcomeSection = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: 3rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Headshot = styled.img`
  width: 200px;
  height: auto;
  border-radius: 4px;
  object-fit: cover;
`;

const WelcomeContent = styled.div`
  flex: 1;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #0366d6; // GitHub blue
  }
`;

const Publication = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
`;

const PublicationTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
`;

const PublicationAuthors = styled.p`
  font-style: italic;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.textSecondary};
`;

const PublicationVenue = styled.p`
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.textSecondary};
`;

const PublicationLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const PublicationLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

function About() {
  return (
    <AboutContainer>
      <Title>Anisha Parsan</Title>
      
      <WelcomeSection>
        <ImageContainer>
          <Headshot src={headshot} alt="Anisha Parsan" />
          <SocialLinks>
            <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
          </SocialLinks>
        </ImageContainer>
        <WelcomeContent>
          <p>
            Hi! I'm Anisha Parsan. This is my personal website where I share my thoughts,
            research, and experiences in [your field]. I'm passionate about [your interests]
            and love exploring the intersection of [relevant topics].
          </p>
        </WelcomeContent>
      </WelcomeSection>

      <Section>
        <SectionTitle>Publications</SectionTitle>
        <Publication>
          <PublicationTitle>Name of pub yah yah</PublicationTitle>
          <PublicationAuthors>Collaborators</PublicationAuthors>
          <PublicationVenue>The Forty-first International Conference on Machine Learning (ICML), lit 2024</PublicationVenue>
          <PublicationLinks>
            <PublicationLink href="#" target="_blank" rel="noopener noreferrer">PDF</PublicationLink>
            <PublicationLink href="#" target="_blank" rel="noopener noreferrer">Code</PublicationLink>
            <PublicationLink href="#" target="_blank" rel="noopener noreferrer">Project Page</PublicationLink>
          </PublicationLinks>
        </Publication>
        {/* Add more publications following the same template */}
      </Section>
    </AboutContainer>
  );
}

export default About;
