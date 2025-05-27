import styled from 'styled-components';

const PapersContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

function Papers() {
  return (
    <PapersContainer>
      <Title>Papers & Readings</Title>
      <p>Papers and readings content coming soon...</p>
    </PapersContainer>
  );
}

export default Papers;
