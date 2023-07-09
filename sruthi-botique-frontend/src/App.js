import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login and registration/js/LoginPage";
import RegisterPage from "./Components/Login and registration/js/RegisterPage";
import Background from "./Components/Main components/js/Background";
import Notification from "./Components/Notifications and loading/js/Notification";

function App() {
	//?notfication block
	const [notificationDeatils, setNotificationDeatils] = useState({ showNotification: false, notificationType: "warning", notificationMessage: "sample notification message" });
	useEffect(() => {
		if (!notificationDeatils.showNotification) return;
		const timeOut = setTimeout(() => {
			setNotificationDeatils({ notificationDeatils: false });
		}, 1000);
		return () => {
			clearTimeout(timeOut, 1000);
		};
	}, [notificationDeatils.showNotification]);

	return (
		<div className="app">
			<Background />
			{notificationDeatils.showNotification && <Notification notificationDeatils={notificationDeatils} setNotificationDeatils={setNotificationDeatils} />}
			<Routes>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="/register" element={<RegisterPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
