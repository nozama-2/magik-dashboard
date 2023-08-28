import React from "react";
import "./AccessoriesPage.css";

import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "../../components/ui/tabs";
import AccessoryCard from "../../components/AccessoriesPage/AccessoryCard";
import { Input } from "../../components/ui/input";

const magikPiecesList = [
	{
		title: "Shapes Magik Pieces",
		subtitle: "Compatible with Tangram, Matching Shapes, etc...",
		imgUrl: "https://i.ibb.co/3cQwvHn/3d-shapes.png",
		tags: ["logic"],
		cost: 9.98,
		purchased: false,
	},
	{
		title: "Numbers Magik Pieces",
		subtitle: "Compatible with Equations, Area, Perimeter, etc...",
		imgUrl: "https://i.ibb.co/TwD1snk/3d-numbers.png",
		tags: ["math", "logic"],
		cost: 9.98,
		purchased: false,
	},
	{
		title: "Code-Cars Magik Pieces",
		subtitle: "Compatible with Code-Cars",
		imgUrl: "https://i.ibb.co/yQTGm2P/3d-codecars.png",
		tags: ["logic"],
		cost: 9.98,
		purchased: true,
	},
];

const Search = () => {
	return (
		<div>
			<Input
				type="search"
				placeholder="Search..."
				className="md:w-[100px] lg:w-[300px]"
			/>
		</div>
	);
};
const AccessoriesPage = () => {
	return (
		<div className="kids-page-container">
			<div className="border-b">
				<div className="flex h-16 items-center justify-center  px-4 space-x-4">
					<Search />
				</div>
			</div>
			<div className="flex-1 space-y-4 p-8 pt-6">
				<div className="flex items-center justify-between space-y-2">
					<h2 className="text-3xl font-bold tracking-tight">
						Accessories Store
					</h2>
				</div>
				<Tabs defaultValue="all" className="space-y-4">
					<TabsList>
						<TabsTrigger value="all">All</TabsTrigger>
						<TabsTrigger value="logic">Logic</TabsTrigger>
						<TabsTrigger value="math">Math</TabsTrigger>
						<TabsTrigger value="multiplayer">
							Multiplayer
						</TabsTrigger>
					</TabsList>
					<TabsContent value="all" className="space-y-4">
						<div className="flex flex-row gap-4 overflow-x-auto">
							{magikPiecesList.map((item) => (
								<AccessoryCard item={item} />
							))}
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default AccessoriesPage;
