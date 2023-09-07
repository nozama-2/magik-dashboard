import { CheckIcon } from "@radix-ui/react-icons";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";

const Tag = ({ name }) => {
	const tagsColorMap = {
		logic: "#A8D1D1",
		multiplayer: "#FFCBCB",
		math: "#FDD97C",
	};
	return (
		<div
			style={{
				backgroundColor: tagsColorMap[name],
				borderRadius: "1rem",
				padding: "0 1rem 0 1rem",
				fontSize: "0.9rem",
			}}>
			{name}
		</div>
	);
};

const AccessoryCard = ({ className, item }) => {
	return (
		<Card className={cn("w-[380px]", className)}>
			<CardHeader>
				<CardTitle className="text-center">{item.title}</CardTitle>
				<CardDescription className="text-center">
					{item.subtitle}
				</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<div className=" flex items-center justify-center space-x-4 rounded-md p-2">
					<div className="flex flex-row space-y-1 item-center justify-center">
						<img src={item.imgUrl} class="h-28 w-28" />
					</div>
				</div>
				<div className="flex flex-row gap-2 justify-center">
					{item.tags.map((tag) => (
						<Tag name={tag} />
					))}
				</div>
			</CardContent>
			<CardFooter>
				{item.purchased ? (
					<Button variant="outline" className="w-full">
						<CheckIcon className="mr-2 h-4 w-4" /> Purchased
					</Button>
				) : (
					<Button className="w-full">$ {item.cost}</Button>
				)}
			</CardFooter>
		</Card>
	);
};

export default AccessoryCard;
