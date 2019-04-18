import React from 'react';
import { render } from 'react-dom';

const App = () => (<div>
    <h3>Hello From React</h3>
</div>);


const _root = document.createElement('div');
render(<App />, _root);
document.body.appendChild(_root);
