import React from "react";
import NotificationItem from "./NotificationItem";

let timerID;

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

        timerID = setInterval(() => {
            if (notifications.length < times.length) {
                notifications.push(times[notifications.length]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                notifications.push({ key: -1, message: "끝났습니다~!!" });
                this.setState({
                    notifications: [],
                });
                clearInterval(timerID);
            }

        }, 2000);

        console.log("___NotificationsDidMount___");
    }

    componentDidUpdate() {
        console.log("___NotificationsDidUpdate___");
    }

    componentWillUnmount() {
        console.log("___NotificationsWillUnmount___");
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        < NotificationItem
                            key={notification.key}
                            number={notification.key}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Notifications;
