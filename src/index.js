import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

import App from 'components/App';
import 'assets/css/index.css';

library.add(faStroopwafel);

const mountingPlace = document.getElementById('root');
ReactDOM.render(<App />, mountingPlace);
