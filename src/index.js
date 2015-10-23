import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getInitialData } from './utils';

const initialData = getInitialData();

ReactDOM.render(<App data={initialData} />, document.getElementById('root'));
