import React from 'react';
import ReactDOM from 'react-dom/client';


class ClassComponent extends React.Component {
    render() {
        return (
            <div>
                <p>This is {this.props.componentType}.</p>
            </div>
        );
    }
}

const FunctionComponentA = (props) => {
    return (
        <div>
            <p>This is {props.componentType} Type A.</p>
        </div>
    );
}

function FunctionComponentB(props) {
    return (
        <div>
            <p>This is {props.componentType} Type B.</p>
        </div>
    );
}


const App = () => {
    return (
        <div>
            <ClassComponent componentType="Class Component" />
            <FunctionComponentA componentType="Function Component" />
            <FunctionComponentB componentType="Function Component" />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

