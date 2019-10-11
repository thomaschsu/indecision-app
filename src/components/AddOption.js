import React from 'react'

class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
        e.preventDefault()
        const userInput = e.target.elements.input.value.trim()
        const error = this.props.handleAddOption(userInput)
        this.setState(() => ({ error }))
        if (!error) {
            e.target.elements.input.value = ''
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="input"></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOption;