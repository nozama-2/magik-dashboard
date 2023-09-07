import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import SideMenu from "./components/SideMenu/SideMenu";

// Pages Import
import HomePage from "./pages/HomePage/HomePage";
import KidsPage from "./pages/KidsPage/KidsPage";
import QuizzesPage from "./pages/QuizzesPage/QuizzesPage";
import AccessoriesPage from "./pages/AccessoriesPage/AccessoriesPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import CreateQuizPage from "./pages/QuizzesPage/CreateQuizPage";

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
						<Route path="/Quizzes" element={<QuizzesPage />} />
						<Route
							path="/Accessories"
							element={<AccessoriesPage />}
						/>
						<Route path="/Settings" element={<SettingsPage />} />

						{/* Additional Routes */}
						<Route
							path="/CreateQuiz"
							element={<CreateQuizPage />}
						/>
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
