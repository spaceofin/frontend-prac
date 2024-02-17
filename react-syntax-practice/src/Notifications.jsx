import React from "react";
import NotificationItem from "./NotificationItem";

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const times = [
            {
                key: 1,
                message: "띵동! 첫번째 시간입니다.",
            },
            {
                key: 2,
                message: "띵동!! 두번째 시간입니다.",
            },
            {
                key: 3,
                message: "띵동!!! 세번째 시간입니다.",
            },
        ];

        const { notifications } = this.state;
        // const notifications = this.state.notifications.slice();

        const timerID = setInterval(() => {
            if (notifications.length < times.length) {
                notifications.push(times[notifications.length]);
            } else {
                notifications.push({ key: -1, message: "끝났습니다~!!" });
                clearInterval(timerID);
            }
            this.setState({
                notifications: notifications,
            });
        }, 2000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        < NotificationItem
                            key={notification.key}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Notifications;
