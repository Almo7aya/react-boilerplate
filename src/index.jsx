import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './global.css';


const root = document.createElement('div');
render(<App />, root);
document.body.appendChild(root);
