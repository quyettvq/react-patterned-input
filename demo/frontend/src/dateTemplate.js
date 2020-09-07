import {PIECE_NUMBER} from '../../../index';

export default [
    {
        key: 'date',
        type: PIECE_NUMBER,
        min: 1,
        max: ({year, month}) => getLastDayOfMonth([year, month]),
        increasingDefaultNumber: getCurrentDayOfMonth(),
        decreasingDefaultNumber: getCurrentDayOfMonth(),
        emptyDigit: 'd',
    },
    '/',
    {
        key: 'month',
        type: PIECE_NUMBER,
        min: 1,
        max: 12,
        increasingDefaultNumber: getCurrentMonthOfYear(),
        decreasingDefaultNumber: getCurrentMonthOfYear(),
        emptyDigit: 'm',
    },
    '/',
    {
        key: 'year',
        type: PIECE_NUMBER,
        min: 1,
        max: 9999,
        increasingDefaultNumber: getCurrentYear(),
        decreasingDefaultNumber: getCurrentYear(),
        emptyDigit: 'y',
    },
];

function checkIsLeapYear(year)
{
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

function getLastDayOfMonth([year, month]) {
    if (year === null && month === null) {
        return 31;
    }

    if (month === 2) {
        if (year === null || checkIsLeapYear(year)) {
            return 29;
        }

        return 28;
    }

    if ([4, 6, 9, 11].includes(month)) {
        return 30;
    }

    return 31;
}

function getToday() {
    const now = new Date();
    return [now.getFullYear(), now.getMonth() + 1, now.getDate()];
}

function getCurrentYear() {
    return new Date().getFullYear();
}

function getCurrentMonthOfYear() {
    return new Date().getMonth() + 1;
}

function getCurrentDayOfMonth() {
    return new Date().getDate();
}
