import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const OrganelleWrapper = styled(Link)`
  position: absolute;
  left: ${props => props.position.x};
  top: ${props => props.position.y};
  transform: translate(-50%, -50%);
  width: ${props => props.size};
  height: ${props => props.size};
  text-decoration: none;
  color: inherit;
  z-index: 2;
  transition: transform 0.3s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    z-index: 3;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  animation: ${props => props.animation(props.delay)} 20s infinite;
  animation-timing-function: ease-in-out;
  animation-delay: ${props => props.delay};
  will-change: transform;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 0 8px rgba(74, 144, 226, 0.3));
  }

  ${OrganelleWrapper}:hover & {
    animation-play-state: paused;
  }
`;

const Label = styled.div`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  font-weight: 700;
  color: #000;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;

  ${OrganelleWrapper}:hover & {
    opacity: 1;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: -65px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(44, 82, 130, 0.95);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 4;

  ${OrganelleWrapper}:hover & {
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid rgba(44, 82, 130, 0.95);
  }
`;

function Organelle({ image, label, tooltip, link, position, size, delay, animation }) {
  return (
    <OrganelleWrapper to={link} position={position} size={size}>
      <ImageContainer animation={animation} delay={delay}>
        <img src={image} alt={label} />
        <Label>{label}</Label>
        <Tooltip>{tooltip}</Tooltip>
      </ImageContainer>
    </OrganelleWrapper>
  );
}

Organelle.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string
  }).isRequired,
  size: PropTypes.string.isRequired,
  delay: PropTypes.string.isRequired,
  animation: PropTypes.func.isRequired
};

export default Organelle;
