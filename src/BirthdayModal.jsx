import React, { useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-date-picker';
import moment from 'moment';

//Modal.setAppElement('.life');

function BirthdayModal({ isOpen, onSubmit, onRequestClose }) {
  const [isModalOpen, setIsModalOpen] = React.useState(true);
  const [birthday, setBirthday] = React.useState(moment('03/17/1993').toDate());

  return (
    <Modal
        isOpen={isModalOpen}
        onRequestClose={onRequestClose}
        // style={customStyles}
        className="birthday-modal"
    >
      <form>
        <span>When were you born?</span>
        <div className="wrapper">
          <DatePicker onChange={setBirthday} value={birthday} className="datepicker" />
          <input className="submit" type="submit" value="✔" onClick={() => { setIsModalOpen(false); onSubmit(birthday);  }}></input>
        </div>
      </form>
    </Modal>
  );
}

export default BirthdayModal;
