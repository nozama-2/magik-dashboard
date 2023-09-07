import { Link } from "react-router-dom";

import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";

import { Button } from "../../components/ui/button";
import { ScrollArea } from "../../components/ui/scroll-area";
import NewQuestion from "../../components/QuizzesPage/NewQuestion";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "../../components/ui/tabs";
import AddQuestionButton from "../../components/QuizzesPage/AddQuestionButton";
import SaveQuizCheckPage from "../../components/QuizzesPage/SaveQuizCheckPage";

const CreateQuizPage = () => {
	let questionTemplate = {
		id: 0, // This is necessary for the reorder of the question components
		questionTitle: "",
		questionDescription: "",
		imageUrl: "",
		correctAnswer: 0,
	};

	const [showSaveQuizCheck, setShowSaveQuizCheck] = useState(false);
	const [questions, setQuestions] = useState([]);

	const addQuestionFunction = () => {
		questionTemplate["id"] = questions.length;
		setQuestions([...questions, questionTemplate]);
	};

	const addQuestionDataToQuestionsList = (
		id,
		questionTitle,
		questionDescription,
		preview,
		correctAnswer
	) => {
		// setQuestions(...questions.filter((question) => question.id != id), {
		// 	id: id,
		// 	questionTitle: questionTitle,
		// 	questionDescription: questionDescription,
		// 	imageUrl: preview ? preview : "",
		// 	correctAnswer: correctAnswer,
		// });
		console.log("QUESTIONS", questions);
	};

	const saveQuiz = () => {
		setShowSaveQuizCheck(true);
	};

	return (
		<>
			{!showSaveQuizCheck ? (
				<div className="flex-col md:flex quizzes-page-container">
					<div className="border-b">
						<div className="flex h-16 items-center justify-center px-4">
							<div className=" flex items-center justify-center space-x-4">
								<p className="tracking-tight"></p>
							</div>
						</div>
					</div>
					<Tabs defaultValue="blank" className="space-y-4">
						<div className="flex space-y-4 p-8 pt-6 flex-col items-center">
							<div className="flex flex-row justify-between w-full space-y-2">
								<h2 className="text-3xl font-bold tracking-tight">
									New Quiz
								</h2>
								<TabsList>
									<TabsTrigger value="blank">
										Blank
									</TabsTrigger>
									<TabsTrigger value="generateEquations">
										Generate Equations
									</TabsTrigger>
								</TabsList>
								<Link to="/Quizzes">
									<Button variant="outline">
										Back to My Quizzes
									</Button>
								</Link>
							</div>
							<TabsContent
								value="blank"
								className="flex flex-col items-center space-y-4 w-full"
								style={{ height: "70vh" }}>
								<p className="text-xl font-bold">
									{questions.length}{" "}
									{questions.length == 1
										? "Question"
										: "Questions"}
								</p>
								<ScrollArea className="flex flex-col items-center justify-center h-full w-5/6">
									<Reorder.Group
										axis="y"
										values={questions}
										onReorder={setQuestions}>
										{questions.length &&
											questions.map((question) => (
												<NewQuestion
													id={question.id}
													addQuestionDataToQuestionsList={
														addQuestionDataToQuestionsList
													}
												/>
											))}
										{/* {questions.length &&
											questions.map((question) => (
												<Reorder.Item
													key={question}
													value={question}>
													<NewQuestion />
												</Reorder.Item>
											))} */}
									</Reorder.Group>
									<AddQuestionButton
										addQuestionFunction={() =>
											addQuestionFunction()
										}
									/>
								</ScrollArea>
							</TabsContent>
							<TabsContent
								value="generateEquations"
								className="flex flex-col items-center justify-center space-y-4 w-full">
								<p>Generate Equations</p>
							</TabsContent>
						</div>
					</Tabs>
					<div className="flex flex-row justify-around">
						<Button variant="outline">Discard Changes</Button>
						<Button onClick={saveQuiz} color="#E11d48">
							Save Quiz
						</Button>
					</div>
				</div>
			) : (
				<SaveQuizCheckPage />
			)}
		</>
	);
};

export default CreateQuizPage;
