import React from 'react';
import PatternedInput from '../../../index';
import dateTemplate from './dateTemplate';
import {translate} from 'i18n-zone';

export default function App({}) {
    return <div>
        <h3>{translate('Enter date :format', {format: 'dd/mm/yyyy'})}</h3>
        <PatternedInput
            template={dateTemplate}
            onChange={({year, month, date}) => console.log(year, month, date)}
        />
    </div>;
}
