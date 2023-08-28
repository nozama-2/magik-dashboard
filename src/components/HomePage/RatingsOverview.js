import React from "react";
import {
	ResponsiveContainer,
	LineChart,
	Line,
	Legend,
	Tooltip,
	CartesianGrid,
	XAxis,
	YAxis,
} from "recharts";

const data = [
	{
		name: "Mon",
		Amanda: 1200,
		Johnny: 880,
		Jane: 500,
	},
	{
		name: "Tues",
		Amanda: 1300,
		Johnny: 930,
		Jane: 560,
	},
	{
		name: "Wed",
		Amanda: 1200,
		Johnny: 1010,
		Jane: 680,
	},
	{
		name: "Thurs",
		Amanda: 1400,
		Johnny: 1110,
		Jane: 780,
	},
	{
		name: "Fri",
		Amanda: 1450,
		Johnny: 1230,
		Jane: 700,
	},
	{
		name: "Sat",
		Amanda: 1680,
		Johnny: 1250,
		Jane: 800,
	},
	{
		name: "Sun",
		Amanda: 1570,
		Johnny: 1300,
		Jane: 900,
	},
];

const RatingsOverview = () => {
	return (
		<ResponsiveContainer width="100%" height={350}>
			<LineChart
				width={730}
				height={250}
				data={data}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="Amanda" stroke="#8884d8" />
				<Line type="monotone" dataKey="Johnny" stroke="#82ca9d" />
				<Line type="monotone" dataKey="Jane" stroke="#E11d48" />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default RatingsOverview;
