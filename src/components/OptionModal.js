import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Close</button>
    </Modal>
)


export default OptionModal


// Create a new event handler in IndecisionApp that clears SelectedOption state
// Pass that into OptionModal
// Call it on button click