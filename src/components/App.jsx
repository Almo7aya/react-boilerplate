import React from 'react';
import styled, { css } from 'styled-components';

import Navbar from './Navbar';
import Booking from './Booking';


const Button = styled.button`
    padding: 8px 5px;
    border: 1px solid palevioletred;
    background-color: #fff;

    ${props => props.primary && css`
        background: palevioletred;
        color: white;
  `}
`;

export default function App() {
  Button.toString();
  return (
    <div>
      <Navbar />

      <Booking />
    </div>
  );
}
