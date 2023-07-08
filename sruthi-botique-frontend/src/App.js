import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login and registration/js/LoginPage";
import RegisterPage from "./Components/Login and registration/js/RegisterPage";
import Background from "./Components/Main components/js/Background";
import Notification from "./Components/Notifications and loading/js/Notification";

function App() {
	const [notificationDeatils, setNotificationDeatils] = useState({ showNotification: true, notificationType: "", notificationMessage: "sample notification message" });
	return (
		<div className="app">
			<Background />
			{notificationDeatils.showNotification && <Notification notificationDeatils={notificationDeatils} />}
			<Routes>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="/register" element={<RegisterPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
