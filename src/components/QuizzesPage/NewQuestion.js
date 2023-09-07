import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const NewQuestion = ({ id, addQuestionDataToQuestionsList }) => {
	const [isEditingQuestion, setIsEditingQuestion] = useState(true);

	const [questionTitle, setQuestionTitle] = useState("");
	const [questionDescription, setQuestionDescription] = useState("");
	const [correctAnswer, setCorrectAnswer] = useState();

	// States for the image upload
	const [selectedFile, setSelectedFile] = useState();
	const [preview, setPreview] = useState();

	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined);
			return;
		}

		const objectUrl = URL.createObjectURL(selectedFile);
		setPreview(objectUrl);

		// free memory when ever this component is unmounted
		return () => URL.revokeObjectURL(objectUrl);
	}, [selectedFile]);

	const onSelectFile = (e) => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedFile(undefined);
			return;
		}
		setSelectedFile(e.target.files[0]);
	};
	const editQuestion = () => {
		setIsEditingQuestion(true);
	};

	const saveQuestion = () => {
		addQuestionDataToQuestionsList(
			id,
			questionTitle,
			questionDescription,
			preview,
			correctAnswer
		);
		setIsEditingQuestion(false);
	};

	return (
		<>
			{/* This is the display when the question is being edited */}
			{isEditingQuestion ? (
				<div className="flex flex-col gap-4 mb-4 border p-4 rounded-md">
					<div className="flex flex-col gap-4">
						<Input
							type="question-title"
							value={questionTitle}
							onChange={(e) => setQuestionTitle(e.target.value)}
							placeholder="Question Title"
						/>
						<Input
							type="question-description"
							value={questionDescription}
							onChange={(e) =>
								setQuestionDescription(e.target.value)
							}
							placeholder="Question Description"
						/>
					</div>
					<div className="pb-4 flex flex-col justify-center">
						<Label htmlFor="picture">Picture</Label>
						<Input
							id="picture"
							onChange={onSelectFile}
							type="file"
						/>
					</div>
					<div className="pb-4 flex flex-row justify-center">
						{selectedFile && <img src={preview} />}
					</div>
					<div className="flex flex-row justify-center gap-4">
						<p className="text-2xl">$</p>
						<Input
							type="number"
							value={correctAnswer}
							onChange={(e) => setCorrectAnswer(e.target.value)}
							placeholder="The Question's Answer"
						/>
					</div>
					<div className="flex flex-row justify-center gap-4">
						<Button
							variant="outline"
							onClick={saveQuestion}
							style={{
								color: "#E11d48",
								borderColor: "#E11d48",
							}}>
							Save Question
						</Button>
					</div>
				</div>
			) : (
				/* This is the final displayed question */
				<div className="flex flex-col gap-4 mb-4 border p-4 rounded-md">
					<div className="grid grid-cols-7">
						<div className="flex flex-col gap-4 col-span-6">
							<p className="text-xl font-bold">{questionTitle}</p>
							<p className="text-md font-light">
								{questionDescription}
							</p>
						</div>
						<div className="text-right col-span-1">
							<Button
								variant="outline"
								onClick={editQuestion}
								style={{
									color: "#E11d48",
									borderColor: "#E11d48",
								}}>
								Edit Question
							</Button>
						</div>
					</div>
					<div className="flex flex-row justify-center">
						{selectedFile && <img src={preview} />}
					</div>
					<div className="flex flex-row justify-center gap-4">
						<p className="text-xl font-bold">
							The correct answer is:
						</p>
						<p className="text-xl font-light">${correctAnswer}</p>
					</div>
				</div>
			)}
		</>
	);
};

export default NewQuestion;
