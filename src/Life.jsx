import React, { useLayoutEffect } from 'react';
import moment from 'moment';
import Year from './Year';
import BirthdayModal from './BirthdayModal';

const years = [...Array(88).keys()].map(() => <Year />);

function fadeIn (item, delay) {
    setTimeout(() => {
        item.classList.add('fade-in')
    }, delay)
}

function mark (item) {
    item.classList.add('marked')
}

const Life = () => {
    const [birthday, setBirthday] = React.useState();

    const elapsed = moment().diff(moment(birthday), 'week');
    console.log("elapsed", elapsed);

    useLayoutEffect(() => {
        var items = document.getElementsByClassName("week");
        for (let i = 0; i < elapsed; ++i) {
            mark(items[i], i);
            fadeIn(items[i], i)
        }
    });

    return (<div className="life">
        <BirthdayModal onSubmit={(birthday) => { setBirthday(birthday) }} />
        { years }
    </div>);
}

export default Life;