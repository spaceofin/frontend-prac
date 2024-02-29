import React from 'react';
import ReactDOM from 'react-dom/client';


class ClassComponent extends React.Component {
    render() {
        return (
            <div>
                <p>This is Class Component.</p>
            </div>
        );
    }
}

const FunctionComponentA = () => {
    return (
        <div>
            <p>This is Function Component Type A.</p>
        </div>
    );
}

function FunctionComponentB() {
    return (
        <div>
            <p>This is Function Component Type B.</p>
        </div>
    );
}


const App = () => {
    return (
        <div>
            <ClassComponent />
            <FunctionComponentA />
            <FunctionComponentB />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

