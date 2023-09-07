import { useEffect } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { useSelector, useStore } from "react-redux";
import RecentQuizButton from "../../components/QuizzesPage/RecentQuizButton";
import "./QuizzesPage.css";

export default function QuizzesPage() {
	useEffect(() => {});
	return (
		<div className="flex-col md:flex quizzes-page-container">
			<div className="border-b">
				<div className="flex h-16 items-center justify-center px-4">
					<div className=" flex items-center justify-center space-x-4">
						<p className="tracking-tight"></p>
					</div>
				</div>
			</div>
			<div className="flex-1 space-y-4 p-8 pt-6">
				<div className="flex items-center justify-between space-y-2">
					<h2 className="text-3xl font-bold tracking-tight">
						My Quizzes
					</h2>
				</div>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					<Link to="/CreateQuiz">
						<Button
							color="#E11d48"
							className="flex flex-col items-center justify-center w-full h-full text-xl">
							<PlusIcon className="mr-2 h-20 w-20" /> Create a
							Quiz
						</Button>
					</Link>
					<Card className="flex flex-col items-center justify-center">
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-lg font-medium">
								Number of Quizzes Created
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-6xl my-4 font-bold">2</div>
							<p className="text-md text-muted-foreground">
								+2 quizzes from last month
							</p>
						</CardContent>
					</Card>
				</div>
				<div className="flex items-center justify-between space-y-2 pt-4">
					<h2 className="text-3xl font-bold tracking-tight">
						Recent Quizzes
					</h2>
				</div>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
					<RecentQuizButton
						name="Equations Quiz"
						description="Objective: Teach students the basics of single line
						equations."
						noOfQuestions={10}
					/>
					<RecentQuizButton
						name="Math Quiz"
						description="Objective: Teach students the basics of single line
						equations."
						noOfQuestions={7}
					/>
				</div>
			</div>
		</div>
	);
}
