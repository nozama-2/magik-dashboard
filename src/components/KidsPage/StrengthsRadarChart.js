import React from "react";
import {
	Radar,
	RadarChart,
	PolarGrid,
	Legend,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
} from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

const data = [
	{
		subject: "Practical Life",
		A: 120,
		B: 110,
		fullMark: 150,
	},
	{
		subject: "Sensorial",
		A: 98,
		B: 130,
		fullMark: 150,
	},
	{
		subject: "Mathematics",
		A: 86,
		B: 130,
		fullMark: 150,
	},
	{
		subject: "Language",
		A: 99,
		B: 100,
		fullMark: 150,
	},
	{
		subject: "Culture",
		A: 85,
		B: 90,
		fullMark: 150,
	},
];

const StrengthRadarChart = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Strengths and Weaknesses</CardTitle>
				<CardDescription>
					Shown in the different categorical domains of games that the
					child plays.
				</CardDescription>
			</CardHeader>
			<CardContent className="pb-4">
				<div className="h-[200px]">
					<ResponsiveContainer width="100%" height="100%">
						<RadarChart
							cx="50%"
							cy="50%"
							outerRadius="80%"
							data={data}>
							<PolarGrid />
							<PolarAngleAxis dataKey="subject" />
							<PolarRadiusAxis angle={30} domain={[0, 150]} />
							<Radar
								name="Mike"
								dataKey="A"
								stroke="#E11d48"
								fill="#E11d48"
								fillOpacity={0.6}
							/>
							{/* <Radar
								name="Lily"
								dataKey="B"
								stroke="#82ca9d"
								fill="#82ca9d"
								fillOpacity={0.6}
							/> */}
							{/* <Legend /> */}
						</RadarChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
};

export default StrengthRadarChart;
