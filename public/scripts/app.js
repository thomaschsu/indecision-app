'use strict';

console.log('App.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'Randomly choose a decision!',
    options: ['One', 'Two']

    // JSX - JavaScript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        'App Subtitle: ',
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options:' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);
var user = {
    name: 'Tom',
    age: 30,
    location: 'Holmdel'
};
function getLocation(location) {
    return location !== undefined ? React.createElement(
        'p',
        null,
        'Location: ',
        location
    ) : undefined;
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
