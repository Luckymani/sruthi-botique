import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {GoogleOAuthProvider} from '@react-oauth/google'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<GoogleOAuthProvider clientId="641535309881-k6j6i5feilklr1ej7qpq60ntkorbn5mh.apps.googleusercontent.com">
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</GoogleOAuthProvider>
);


