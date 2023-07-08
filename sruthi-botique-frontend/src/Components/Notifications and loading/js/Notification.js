import React from "react";
import "../css/Notification.css";

function Notification(props) {
	console.log(props.notificationDeatils);
	const { notificationType, notificationMessage } = props.notificationDeatils;
	return (
		<div className={`${notificationType} notification-container`}>
			<div>{notificationMessage}</div>
		</div>
	);
}

export default Notification;
