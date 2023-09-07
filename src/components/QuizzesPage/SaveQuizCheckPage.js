import "./SaveQuizCheckPage.css";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const SaveQuizCheckPage = () => {
	return (
		<div className="flex-col md:flex quizzes-page-container">
			<div className="border-b">
				<div className="flex h-16 items-center justify-center px-4">
					<div className=" flex items-center justify-center space-x-4">
						<p className="tracking-tight"></p>
					</div>
				</div>
			</div>
			<div className="flex space-y-4 p-8 pt-40 flex-col items-center justify-center">
				<h2 className="text-3xl font-bold tracking-tight">
					Quiz Saved!
				</h2>

				<div class="animation-ctn">
					<div class="icon icon--order-success svg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="154px"
							height="154px">
							<g fill="none" stroke="#22AE73" stroke-width="2">
								<circle
									cx="77"
									cy="77"
									r="72"
									className="circle-1"></circle>
								<circle
									id="colored"
									fill="#22AE73"
									cx="77"
									cy="77"
									r="72"
									className="circle-2"></circle>
								<polyline
									class="st0"
									stroke="#fff"
									stroke-width="10"
									points="43.5,77.8 63.7,97.9 112.2,49.4 "
									className="circle-3"
								/>
							</g>
						</svg>
					</div>
				</div>
				<Link to="/Quizzes">
					<Button variant="outline">Back to My Quizzes</Button>
				</Link>
			</div>
		</div>
	);
};

export default SaveQuizCheckPage;
