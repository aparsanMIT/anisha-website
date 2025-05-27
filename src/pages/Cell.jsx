import styled, { keyframes } from 'styled-components';

const CellContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

// Update the animation keyframes to use transform instead of path
const flow = keyframes`
  0% {
    transform: scale(1) translate(0, 0);
  }
  25% {
    transform: scale(1.1) translate(-5px, -10px);
  }
  50% {
    transform: scale(0.95) translate(10px, 5px);
  }
  75% {
    transform: scale(1.05) translate(-8px, 8px);
  }
  100% {
    transform: scale(1) translate(0, 0);
  }
`;

const AnimatedCellWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
`;

const MembraneWrapper = styled.g`
  transform-origin: center;
  transform-box: fill-box;
  animation: ${flow} 8s ease-in-out infinite;
`;

const AnimatedMembrane = styled.path`
  transform-origin: center;
  transform-box: fill-box;
`;

// Update the base path to be more organic
const basePath = `M200,50 
  C280,70 350,150 330,230 
  C310,310 230,350 150,330 
  C70,310 50,230 70,150 
  C90,70 120,30 200,50Z`;

function Cell() {
  return (
    <CellContainer>
      <Title></Title>
      <AnimatedCellWrapper>
        <svg
          viewBox="0 0 400 400"
          width="500"
          height="500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <MembraneWrapper>
            {/* Animated plasma membrane */}
            <AnimatedMembrane
              d={basePath}
              fill="#f7e6b7"
              stroke="#e2b96f"
              strokeWidth="8"
            />
          </MembraneWrapper>
          {/* Cytoplasm fill */}
          <ellipse
            cx="200"
            cy="200"
            rx="120"
            ry="120"
            fill="#ffe9c6"
            opacity="0.9"
          />
          {/* Nucleus */}
          <circle
            cx="200"
            cy="200"
            r="40"
            fill="#d4e6f1"
            stroke="#2980b9"
            strokeWidth="4"
          />
        </svg>
      </AnimatedCellWrapper>
    </CellContainer>
  );
}

export default Cell;
