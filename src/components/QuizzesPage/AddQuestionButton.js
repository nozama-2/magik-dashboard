import { Button } from "../../components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

const AddQuestionButton = ({ addQuestionFunction }) => {
	return (
		<div className="flex flex-row justify-center">
			<Button
				color="#E11d48"
				size="icon"
				onClick={() => addQuestionFunction()}
				style={{ borderRadius: "10rem" }}>
				<PlusIcon className="h-10 w-10 p-1" />
			</Button>
		</div>
	);
};

export default AddQuestionButton;
