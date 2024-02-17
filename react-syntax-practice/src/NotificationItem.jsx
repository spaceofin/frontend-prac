import React from "react";

class NotificationItem extends React.Component {

    componentDidMount() {
        console.log(`NotificationItemDidMount: ${this.props.number}`);
    }
    componentDidUpdate() {
        console.log(`NotificationItemDidUpdate: ${this.props.number}`);
    }
    componentWillUnmount() {
        console.log(`NotificationItemWillUnmount: ${this.props.number}`);
    }

    render() {
        return (
            <div className="time-box">
                <span className="time-box-text">{this.props.message}</span>
            </div>
        );
    }
}

export default NotificationItem;
