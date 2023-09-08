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
		name: "Wk 11",
		Amanda: 1200,
		Johnny: 880,
		Jane: 500,
	},
	{
		name: "Wk 12",
		Amanda: 1300,
		Johnny: 930,
		Jane: 560,
	},
	{
		name: "Wk 13",
		Amanda: 1200,
		Johnny: 1010,
		Jane: 680,
	},
	{
		name: "Wk 14",
		Amanda: 1400,
		Johnny: 1110,
		Jane: 780,
	},
	{
		name: "Wk 15",
		Amanda: 1450,
		Johnny: 1230,
		Jane: 700,
	},
	{
		name: "Wk 16",
		Amanda: 1680,
		Johnny: 1250,
		Jane: 800,
	},
	{
		name: "Wk 17",
		Amanda: 1570,
		Johnny: 1300,
		Jane: 900,
	},
];

const RatingsOverview = ({chosenKids}) => {
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

				{
					chosenKids.map((c) => <Line type="monotone" dataKey={c.name} stroke={c.color} /> )
				}

			</LineChart>
		</ResponsiveContainer>
	);
};

export default RatingsOverview;
