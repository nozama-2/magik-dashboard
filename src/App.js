import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import SideMenu from "./components/SideMenu/SideMenu";

// Pages Import
import HomePage from "./pages/HomePage/HomePage";
import KidsPage from "./pages/KidsPage/KidsPage";
import AccessoriesPage from "./pages/AccessoriesPage/AccessoriesPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

function App() {
	return (
		<div className="App">
			<Router>
				<div className="navigation-container">
					<SideMenu />
				</div>
				<div className="main-content-container">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/Kids" element={<KidsPage />} />
						<Route
							path="/Accessories"
							element={<AccessoriesPage />}
						/>
						<Route path="/Settings" element={<SettingsPage />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
