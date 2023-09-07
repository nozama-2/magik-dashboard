import { Button } from "../../components/ui/button";
import { images } from "../../constants";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Switch } from "../../components/ui/switch";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../../components/ui/sheet";

const RecentQuizButton = ({ name, description, noOfQuestions }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					className="flex flex-col items-center justify-center h-full text-xl p-4">
					<img
						src={
							name == "Equations Quiz"
								? images.mathOperations
								: images.coins
						}
						style={{ height: "5vw", width: "auto" }}
					/>
					<p>{name}</p>
					<p className="text-sm font-light">
						{noOfQuestions} questions
					</p>
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>{name}</SheetTitle>
					<SheetDescription>{description}</SheetDescription>
				</SheetHeader>
				<div className="grid gap-4 py-4 items-center">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-left col-span-3">
							Maximum time per question
						</Label>
						<Input id="name" type="number" className="col-span-1" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label
							htmlFor="randomise-switch"
							className="text-left col-span-3">
							Randomise Questions?
						</Label>
						<Switch
							id="randomise-switch"
							className="text-right col-span-1"
							// checked={field.value}
							// onCheckedChange={field.onChange}
						/>
					</div>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<div className="flex flex-row justify-center items-center gap-6">
							<Button
								variant="outline"
								type="submit"
								className="mt-4">
								Edit Questions
							</Button>
							<Button type="submit" className="mt-4">
								Start Quiz
							</Button>
						</div>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default RecentQuizButton;
