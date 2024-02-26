
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.css';

import SecondsCounter from './component/SecondsCounter';

let counter = 0;

setInterval(function(){
    ReactDOM.render(<SecondsCounter seconds={counter}/>, document.getElementById('app'));
    counter += 1;
},
1000);