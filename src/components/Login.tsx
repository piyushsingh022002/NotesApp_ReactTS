import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const FormWrapper = styled.div`
  max-width: 400px;
  margin: 5rem auto;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: #6C5DD3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover { opacity: 0.9; }
`;

const Login: React.FC = () => {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'https://notesapp-itpb.onrender.com/api/auth/login',
        { email, password }
      );
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <FormWrapper>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="email" placeholder="Email"
          value={email} onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          type="password" placeholder="Password"
          value={password} onChange={e => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Log In</Button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </FormWrapper>
  );
};

export default Login;
