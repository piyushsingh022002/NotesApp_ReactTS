import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  background: #f0f4f8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Message = styled.h1`
  color: #333;
`;

export default function Dashboard() {
  return (
    <Wrapper>
      <Message>Welcome to your NoteApp Dashboard!</Message>
    </Wrapper>
  );
}
