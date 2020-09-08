import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from 'i18n-zone';

i18n.settings.setResource('en', {});
i18n.settings.setResource('vi', {
    'Enter date :format': 'Nhập ngày :format',
});
i18n.settings.setLocale('vi');

ReactDOM.render(<App/>, document.getElementById('app-root'));
