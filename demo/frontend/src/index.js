import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from 'i18n-zone';

ReactDOM.render(<App/>, document.getElementById('app-root'));

i18n.settings.setResource('en', {});
console.log(i18n.translate('Hahahahaa'));

