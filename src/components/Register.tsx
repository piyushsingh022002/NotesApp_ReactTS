import React, { useState } from 'react';
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

const FormCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 3rem 3.5rem;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  outline: none;
`;

const SubmitButton = styled.button`
  background: rgba(255, 255, 255, 0.3);
  border: none;
  padding: 0.85rem;
  border-radius: 12px;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const InfoText = styled.p`
  font-size: 0.9rem;
  text-align: center;
  margin-top: 1rem;
  color: #ddd;
`;

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration logic
    // Replace with real API call later
    console.log('Registering:', formData);

    // On success:
    navigate('/login');
  };

  return (
    <Wrapper>
      <FormCard>
        <Title>Create Account</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            autoComplete="username"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />
          <SubmitButton type="submit">Register</SubmitButton>
        </Form>
        <InfoText>
          Already have an account?{' '}
          <span style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => navigate('/login')}>
            Login here
          </span>
        </InfoText>
      </FormCard>
    </Wrapper>
  );
}
