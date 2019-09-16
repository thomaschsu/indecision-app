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

let count = 0;
const addOne = () => {
    count += 1
}
const minusOne = () => {
    count -= 1
}
const setupReset = () => {
    count = 0
}
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={setupReset}>Reset</button>
    </div>
);
console.log(templateTwo)
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot)