console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Randomly choose a decision!',
    options: ['One', 'Two']
}

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>App Subtitle: {app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);