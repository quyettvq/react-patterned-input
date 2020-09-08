import React from 'react';
import PatternedInput from '../../../index';
import dateTemplate from './dateTemplate';

export default function App({}) {
    return <div>
        <PatternedInput
            template={dateTemplate}
            onChange={({year, month, date}) => console.log(year, month, date)}
        />
    </div>;
}
