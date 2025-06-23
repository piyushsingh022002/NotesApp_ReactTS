import styled from 'styled-components';
import { keyframes } from 'styled-components';



export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid #fff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.05);
  }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const IconRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const IconWrap = styled.div`
  animation: ${float} 3s ease-in-out infinite;
  color: #fff;
  opacity: 0.8;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.3) rotate(10deg);
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('/assets/images/bg.jpg') no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 3rem;
  width: 90%;
  max-width: 500px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  text-align: center;
  color: #fff;

  @media (max-width: 600px) {
  padding: 2rem 1.5rem;
  ${Title} {
    font-size: 1.5rem;
  }
  ${Description} {
    font-size: 0.9rem;
  }
}
`;



