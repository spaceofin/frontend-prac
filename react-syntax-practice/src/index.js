import ReactDOM from 'react-dom/client';

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) =>
    <span key={number}>
        {number * 2}{'  '}
    </span >
);

const tripledNumbers = numbers.map((number, index) =>
    <span key={index}>
        {number * 3}{'  '}
    </span >
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ul>
        {doubledNumbers}<br />
        {tripledNumbers}
    </ul >,

);