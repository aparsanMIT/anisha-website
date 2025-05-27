import styled from 'styled-components';

const ClassesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

function Classes() {
  return (
    <ClassesContainer>
      <Title>Classes & Learning</Title>
      <p>Interactive class graph coming soon...</p>
    </ClassesContainer>
  );
}

export default Classes;
