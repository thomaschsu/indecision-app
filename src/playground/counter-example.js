let count = 0;
const addOne = () => {
    count++
    renderCounterApp()
}
const minusOne = () => {
    count--
    renderCounterApp()
}
const setupReset = () => {
    count = 0
    renderCounterApp()
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

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={setupReset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot)
}
renderCounterApp()