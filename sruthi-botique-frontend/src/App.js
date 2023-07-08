import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import Background from "./Components/Background";

function App() {
	return (
		<div className="app">
			<Background />
			<Routes>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="/register" element={<RegisterPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
