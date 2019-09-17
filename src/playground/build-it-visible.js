const app = {
    title: 'Visibility Toggle',
    clicked: false,
    details: 'Hey, these are some details you can now see!'
}

const appRoot = document.getElementById('app')

const showDetails = () => {
    app.clicked ? app.clicked = false : app.clicked = true
    renderApp()
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={showDetails}>
                {app.clicked ? 'Hide details' : 'Show details'}
            </button>
            {app.clicked && <div><p>{app.details}</p></div>}
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderApp()