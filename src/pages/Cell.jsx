import styled from 'styled-components';

const CellContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

function Cell() {
  return (
    <CellContainer>
      <Title>Interactive Cell</Title>
      <p>Interactive cell visualization coming soon...</p>
    </CellContainer>
  );
}

export default Cell;
