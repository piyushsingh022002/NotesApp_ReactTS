import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 3rem 4rem;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 2.5rem;
`;

const Description = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.4;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const Button = styled.button`
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: #fff;
  padding: 0.75rem 2rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

export default function Landing() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Card>
        <Title>Welcome to NoteApp</Title>
        <Description>Your smart note-taking companion</Description>
        <ButtonGroup>
          <Button onClick={() => navigate('/login')}>Login</Button>
          <Button onClick={() => navigate('/register')}>Register</Button>
        </ButtonGroup>
      </Card>
    </Wrapper>
  );
}
