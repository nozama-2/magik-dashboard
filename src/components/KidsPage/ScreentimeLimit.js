import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";

const data = [
	{
		limit: 400,
	},
	{
		limit: 300,
	},
	{
		limit: 200,
	},
	{
		limit: 300,
	},
	{
		limit: 200,
	},
	{
		limit: 278,
	},
	{
		limit: 189,
	},
	{
		limit: 239,
	},
	{
		limit: 300,
	},
	{
		limit: 200,
	},
	{
		limit: 278,
	},
	{
		limit: 189,
	},
	{
		limit: 349,
	},
];

export default function ScreentimeLimit() {
	const [limit, setLimit] = React.useState(60);

	function onClick(adjustment) {
		setLimit(Math.max(30, Math.min(300, limit + adjustment)));
	}

	return (
		<Card>
			<CardHeader className="pb-4">
				<CardTitle className="text-base">Screentime Limit</CardTitle>
				<CardDescription>
					Set the screentime limit for your kid.
				</CardDescription>
			</CardHeader>
			<CardContent className="pb-2">
				<div className="flex items-center justify-center space-x-2">
					<Button
						variant="outline"
						size="icon"
						className="h-8 w-8 shrink-0 rounded-full"
						onClick={() => onClick(-10)}
						disabled={limit <= 30}>
						<Minus className="h-4 w-4" />
						<span className="sr-only">Decrease</span>
					</Button>
					<div className="flex-1 text-center">
						<div className="text-5xl font-bold tracking-tighter">
							{limit}
						</div>
						<div className="text-[0.70rem] uppercase text-muted-foreground">
							Minutes
						</div>
					</div>
					<Button
						variant="outline"
						size="icon"
						className="h-8 w-8 shrink-0 rounded-full"
						onClick={() => onClick(10)}
						disabled={limit >= 300}>
						<Plus className="h-4 w-4" />
						<span className="sr-only">Increase</span>
					</Button>
				</div>
				<div className="my-3 h-[60px]">
					<ResponsiveContainer width="100%" height="100%">
						<BarChart data={data}>
							<Bar
								dataKey="limit"
								style={{
									fill: "#E11d48",
									opacity: 0.2,
									"--theme-primary": `light`,
								}}
							/>
						</BarChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full">Set Limit</Button>
			</CardFooter>
		</Card>
	);
}
