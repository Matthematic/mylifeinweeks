import React, { useState } from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import NumberPicker from "react-widgets/NumberPicker";
import DatePicker from "react-widgets/DatePicker";
import Combobox from "react-widgets/Combobox";

import "react-widgets/styles.css";
//Modal.setAppElement('.life');

function OptionsModal({ isOpen, onClose, onSubmit, onRequestClose }) {
  const [birthday, setBirthday] = React.useState(moment('03/17/1993').toDate());
  const [lifeExpectancy, setLifeExpectancy] = React.useState(88);
  const [shape, setShape] = React.useState('rounded');

  const optionList = {
    birthday,
    lifeExpectancy,
    shape
  };

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        // style={customStyles}
        className="options-modal"
    >
      <h2>Options</h2>
      <form>
        <div className="wrapper">
          <span className="label">When were you born?</span>
          <div>
            <DatePicker placeholder="03/17/1993" onChange={setBirthday} className="date-picker" />
          </div>
        </div>
        <div className="wrapper">
          <span className="label">How long will you live?</span>
          <div>
            <NumberPicker defaultValue={88} onChange={(value) => { setLifeExpectancy(value); }} className="number-picker" />
          </div>
        </div>

        <div className="wrapper">
          <span className="label">What shape do you like?</span>
          <div>
            <Combobox defaultValue="rounded" data={["rounded", "circle"]} onChange={(value) => { setShape(value); }} className="combo-box" />
          </div>
        </div>
        <input className="submit" type="submit" value="✔" onClick={() => { onClose(false); onSubmit(optionList);  }} />
      </form>
    </Modal>
  );
}

export default OptionsModal;
