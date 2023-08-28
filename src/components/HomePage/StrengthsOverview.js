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
		C: 90,
		fullMark: 150,
	},
	{
		subject: "Sensorial",
		A: 98,
		B: 130,
		C: 90,
		fullMark: 150,
	},
	{
		subject: "Mathematics",
		A: 86,
		B: 130,
		C: 90,
		fullMark: 150,
	},
	{
		subject: "Language",
		A: 99,
		B: 100,
		C: 90,
		fullMark: 150,
	},
	{
		subject: "Culture",
		A: 85,
		B: 90,
		C: 90,
		fullMark: 150,
	},
];

const StrengthsOverview = () => {
	return (
		<div className="h-[180px]">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
					<PolarGrid />
					<PolarAngleAxis dataKey="subject" />
					<PolarRadiusAxis angle={30} domain={[0, 150]} />
					<Radar
						name="Amanda"
						dataKey="A"
						stroke="#8884d8"
						fill="#8884d8"
						fillOpacity={0.6}
					/>
					<Radar
						name="Jane"
						dataKey="C"
						stroke="#E11d48"
						fill="#E11d48"
						fillOpacity={0.6}
					/>
					<Radar
						name="Johnny"
						dataKey="B"
						stroke="#82ca9d"
						fill="#82ca9d"
						fillOpacity={0.6}
					/>
					<Legend />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default StrengthsOverview;
