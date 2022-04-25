import React, { useLayoutEffect } from 'react';
import moment from 'moment';
import Year from './Year';
import OptionsModal from './OptionsModal';


function fadeIn (item, delay) {
    setTimeout(() => {
        if (item) {
            item.classList.add('fade-in')
        }
        else {
            console.error("Item not found");
        }
    }, delay)
}

function mark (item) {
    if (item) {
        item.classList.add('marked')
    }
    else {
        console.error("Item not found");
    }
}

function makeShape(item, shape) {
    if (item) {
        item.classList.add(shape)
    }
    else {
        console.error("Item not found");
    }
}

const Life = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(true);
    const [birthday, setBirthday] = React.useState();
    const [lifeExpectancy, setLifeExpectancy] = React.useState(88);
    const [shape, setShape] = React.useState('rounded');

    console.log("shape", shape);
    const years = [...Array(Number(lifeExpectancy)).keys()].map(() => <Year />);

    console.log(lifeExpectancy, years.length)

    const elapsed = moment().diff(moment(birthday), 'week');
    console.log("elapsed", elapsed);

    useLayoutEffect(() => {
        var items = document.getElementsByClassName("week");
        for (let i = 0; i < items.length; ++i) {
            makeShape(items[i], shape);
            console.log("added shape")
            if (i <= elapsed) {
                mark(items[i], i);
                fadeIn(items[i], i);
            }
        }
    });

    return (<div className="life">
        <OptionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={({ birthday, lifeExpectancy, shape }) => { setBirthday(birthday); setLifeExpectancy(lifeExpectancy); setShape(shape); }} />
        { !isModalOpen && years }
    </div>);
}

export default Life;