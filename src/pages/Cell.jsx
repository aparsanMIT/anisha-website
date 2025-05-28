import styled, { keyframes } from 'styled-components';
import Organelle from '../components/Cell/Organelle';
import mitochondriaImg from '../assets/organelles/mitochondria.png';
import golgiImg from '../assets/organelles/golgi.png';
import centrioleImg from '../assets/organelles/centriole.png';

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
    filter: drop-shadow(0 0 8px rgba(64, 156, 255, 0.2));
  }
  25% {
    transform: scale(1.05) translate(-3px, -5px);
    filter: drop-shadow(0 0 10px rgba(64, 156, 255, 0.25));
  }
  50% {
    transform: scale(0.98) translate(5px, 3px);
    filter: drop-shadow(0 0 8px rgba(64, 156, 255, 0.2));
  }
  75% {
    transform: scale(1.02) translate(-4px, 4px);
    filter: drop-shadow(0 0 10px rgba(64, 156, 255, 0.25));
  }
  100% {
    transform: scale(1) translate(0, 0);
    filter: drop-shadow(0 0 8px rgba(64, 156, 255, 0.2));
  }
`;

const AnimatedCellWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  position: relative;
  height: 800px;
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

const OrganellesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  
  * {
    pointer-events: auto;
  }
`;

// Update the base path to be larger and more organic
const basePath = `M300,75 
  C420,105 525,225 495,345 
  C465,465 345,525 225,495 
  C105,465 75,345 105,225 
  C135,105 180,45 300,75Z`;

// Animation for mitochondria (reduced movement range)
const createMitochondriaAnimation = (delay) => keyframes`
  0%   { transform: translate(0, 0) rotate(0deg); }
  10%  { transform: translate(80px, -40px) rotate(8deg); }
  20%  { transform: translate(100px, 0px) rotate(16deg); }
  30%  { transform: translate(80px, 40px) rotate(24deg); }
  40%  { transform: translate(40px, 60px) rotate(32deg); }
  50%  { transform: translate(0px, 40px) rotate(40deg); }
  60%  { transform: translate(-20px, 0px) rotate(32deg); }
  70%  { transform: translate(0px, -40px) rotate(24deg); }
  80%  { transform: translate(40px, -60px) rotate(16deg); }
  90%  { transform: translate(80px, -40px) rotate(8deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

// Animation for Golgi (reduced movement range)
const createGolgiAnimation = (delay) => keyframes`
  0%   { transform: translate(0, 0) rotate(0deg); }
  25%  { transform: translate(70px, 35px) rotate(15deg); }
  50%  { transform: translate(0, 70px) rotate(30deg); }
  75%  { transform: translate(-70px, 35px) rotate(15deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

// Animation for Centriole (zigzag pattern)
const createCentrioleAnimation = (delay) => keyframes`
  0%   { transform: translate(0, 0) rotate(0deg); }
  20%  { transform: translate(-80px, -60px) rotate(-10deg); }
  40%  { transform: translate(80px, -40px) rotate(10deg); }
  60%  { transform: translate(-60px, 80px) rotate(-10deg); }
  80%  { transform: translate(60px, 40px) rotate(10deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

function Cell() {
  return (
    <CellContainer>
      <Title></Title>
      <AnimatedCellWrapper>
        <svg
          viewBox="0 0 600 600"
          width="700"
          height="700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <MembraneWrapper>
            <AnimatedMembrane
              d={basePath}
              fill="#f8f9fa"
              stroke="#4a90e2"
              strokeWidth="8"
              filter="url(#glow)"
            />
          </MembraneWrapper>
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <ellipse
            cx="300"
            cy="300"
            rx="180"
            ry="180"
            fill="#e8f4f8"
            opacity="0.85"
          />
          <circle
            cx="300"
            cy="300"
            r="60"
            fill="#d1e3f5"
            stroke="#2c5282"
            strokeWidth="4"
          />
        </svg>
        <OrganellesContainer>
          <Organelle
            image={mitochondriaImg}
            label="Classes"
            tooltip="A graph of all classes I've taken and what I've thought of them"
            link="/classes"
            position={{ x: '40%', y: '40%' }}
            size="70px"
            delay="0.5s"
            animation={createMitochondriaAnimation}
          />
          <Organelle
            image={golgiImg}
            label="Blog"
            tooltip="Some not so organized thoughts on things I've learned"
            link="/blog"
            position={{ x: '60%', y: '45%' }}
            size="70px"
            delay="1s"
            animation={createGolgiAnimation}
          />
          <Organelle
            image={centrioleImg}
            label="Travels"
            tooltip="Places I've been (mentally and physically)"
            link="/travels"
            position={{ x: '50%', y: '60%' }}
            size="70px"
            delay="1.5s"
            animation={createCentrioleAnimation}
          />
        </OrganellesContainer>
      </AnimatedCellWrapper>
    </CellContainer>
  );
}

export default Cell;
