import styled from 'styled-components';

const CVContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

function CV() {
  return (
    <CVContainer>
      <Title>Curriculum Vitae</Title>
      <p>CV content coming soon...</p>
    </CVContainer>
  );
}

export default CV;
