import styled from 'styled-components';

const TravelsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 3rem;
  line-height: 1.6;
`;

function Travels() {
  return (
    <TravelsContainer>
      <Title>Travels</Title>
      <Description>
        Places I've been, both mentally and physically. A journey through different 
        landscapes, ideas, and experiences that have shaped my perspective.
      </Description>
      {/* Travel content will be added here */}
    </TravelsContainer>
  );
}

export default Travels; 