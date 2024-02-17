import React from "react";

class NotificationItem extends React.Component {
    render() {
        return (
            <div className="time-box">
                <span className="time-box-text">{this.props.message}</span>
            </div>
        );
    }
}

export default NotificationItem;
