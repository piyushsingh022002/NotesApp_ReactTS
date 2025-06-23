import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaRocket, FaGhost, FaHeart, FaBolt, FaMagic } from 'react-icons/fa';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LandingWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 3rem 4rem;
  max-width: 450px;
  width: 100%;
  text-align: center;
  animation: ${fadeInUp} 1s ease forwards;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: #e0e0e0;
  line-height: 1.5;
`;

const IconRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  color: #ffd700;
  font-size: 2.4rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const GlassButton = styled.button`
  background: rgba(255, 255, 255, 0.15);
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  padding: 0.85rem 2rem;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.7);
    transform: scale(1.05);
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export default function Landing() {
  return (
    <LandingWrapper>
      <GlassCard>
        <IconRow>
          <FaRocket />
          <FaGhost />
          <FaHeart />
          <FaBolt />
          <FaMagic />
        </IconRow>
        <Title>Welcome to Iconify!</Title>
        <Description>
          Discover amazing icons, seamless animations, and a stylish glassy design. Join us today!
        </Description>
        <ButtonGroup>
          <GlassButton>Login</GlassButton>
          <GlassButton>Register</GlassButton>
        </ButtonGroup>
      </GlassCard>
    </LandingWrapper>
  );
}
