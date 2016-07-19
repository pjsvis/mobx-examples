import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import Counter from './model/Counter';

const counter = new Counter();

render(
    <App counter={counter}></App>,
    document.getElementById('root')
);