import React from 'react';
import ReactDOM from 'react-dom';
import { getTheme } from './utils/getTheme';

import App from './App';

ReactDOM.render(<App theme={getTheme()} />,
  document.getElementById('root')
);

