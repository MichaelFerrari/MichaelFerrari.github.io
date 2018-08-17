import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from 'react-intl';

import 'semantic-ui-css/semantic.min.css';

import localeEn from 'react-intl/locale-data/en';
import localeZh from 'react-intl/locale-data/zh';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

addLocaleData([...localeEn, ...localeZh]);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
