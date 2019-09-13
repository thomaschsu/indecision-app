console.log('App.js is running');

// create app object title / sbutitle
// use title/subtitle in template
// render template
var app = {
    title: 'Indecision App',
    subtitle: 'Randomly choose a decision!'
}


// JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
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
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)