import React from "react";
import "../css/Notification.css";
import { AiFillCloseCircle } from "react-icons/ai";

function Notification(props) {
	const { notificationType, notificationMessage } = props.notificationDeatils;
	return (
		<div className={`${notificationType} notification-container`}>
			<div>
				{notificationMessage}
				<AiFillCloseCircle className="close-icon" onClick={() => props.setNotificationDeatils({ showNotificationDeatils: false })} />
			</div>
		</div>
	);
}

export default Notification;
