import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<GoogleOAuthProvider clientId="411007420772-jg3hr6qptotqkss9gng33vqguv378t25.apps.googleusercontent.com">
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</GoogleOAuthProvider>
);
