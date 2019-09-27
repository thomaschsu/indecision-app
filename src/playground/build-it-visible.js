// VisibilityToggle - render, constructor, handleToggleVisibility
// visiblity -> false 

class VisibilityToggle extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <div><p>{this.state.details}</p></div>}
            </div>
        )
    }
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            title: 'Visibility Toggle',
            visibility: false,
            details: 'Hey, these are some details you can now see!'
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))