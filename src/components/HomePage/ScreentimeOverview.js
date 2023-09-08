import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const originalData = [
	{
		name: "Mon",
		total: Math.floor(Math.random() * 50) + 10,
	},
	{
		name: "Tues",
		total: Math.floor(Math.random() * 50) + 10,
	},
	{
		name: "Wed",
		total: Math.floor(Math.random() * 50) + 10,
	},
	{
		name: "Thurs",
		total: Math.floor(Math.random() * 50) + 10,
	},
	{
		name: "Fri",
		total: Math.floor(Math.random() * 50) + 10,
	},
	{
		name: "Sat",
		total: Math.floor(Math.random() * 50) + 10,
	},
	{
		name: "Sun",
		total: Math.floor(Math.random() * 50) + 10,
	},
];

const ScreentimeOverview = (chosenKids) => {
	const [data, setData] = useState(originalData)

	useEffect(() => {
		setData([
			{
				name: "Mon",
				total: Math.floor(Math.random() * 50) + 10,
			},
			{
				name: "Tues",
				total: Math.floor(Math.random() * 50) + 10,
			},
			{
				name: "Wed",
				total: Math.floor(Math.random() * 50) + 10,
			},
			{
				name: "Thurs",
				total: Math.floor(Math.random() * 50) + 10,
			},
			{
				name: "Fri",
				total: Math.floor(Math.random() * 50) + 10,
			},
			{
				name: "Sat",
				total: Math.floor(Math.random() * 50) + 10,
			},
			{
				name: "Sun",
				total: Math.floor(Math.random() * 50) + 10,
			},
		])
	}, [chosenKids])
	
	return (
		<ResponsiveContainer width="100%" height={350}>
			<BarChart data={data}>
				<XAxis
					dataKey="name"
					stroke="#888888"
					fontSize={12}
					tickLine={false}
					axisLine={false}
				/>
				<YAxis
					stroke="#888888"
					fontSize={12}
					tickLine={false}
					axisLine={false}
					tickFormatter={(value) => `${value} min`}
				/>
				<Bar dataKey="total" fill="#E11d48" radius={[4, 4, 0, 0]} />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default ScreentimeOverview;
