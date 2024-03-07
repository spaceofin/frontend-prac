import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(<input value="hi" />);

setTimeout(function () {
    ReactDOM.createRoot(document.getElementById('root')).render(<input value={null} />);
}, 1000);