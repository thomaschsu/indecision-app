console.log('App.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'Randomly choose a decision!',
    options: ['One', 'Two']
}

// JSX - JavaScript XML
var template = (
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
var user = {
    name: 'Tom',
    age: 30,
    location: 'Holmdel'
}
function getLocation (location) {
    return location !== undefined ? <p>Location: {location}</p> : undefined
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)