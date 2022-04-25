import React from 'react';
import Week from './Week';

const Year = () => {
    return [...Array(52).keys()].map(() => <Week />);
}

export default Year;