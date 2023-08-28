import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../../components/ui/card";

import ScreentimeOverview from "../../components/HomePage/ScreentimeOverview";
import "./HomePage.css";
import RatingsOverview from "../../components/HomePage/RatingsOverview";
import StrengthsOverview from "../../components/HomePage/StrengthsOverview";
import KidsTable from "../../components/HomePage/KidsTable";

export default function HomePage() {
	return (
		<div className="flex-col md:flex home-page-container">
			<div className="border-b">
				<div className="flex h-16 items-center justify-center px-4">
					<div className=" flex items-center justify-center space-x-4">
						<p className="tracking-tight">
							<strong>AI Analysis:</strong> In general, your kids
							should practice more logic based games, like
							Code-Cars.
						</p>
					</div>
				</div>
			</div>
			<div className="flex-1 space-y-4 p-8 pt-6">
				<div className="flex items-center justify-between space-y-2">
					<h2 className="text-3xl font-bold tracking-tight">
						Dashboard
					</h2>
				</div>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					<Card className="flex flex-col items-center justify-center">
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-lg font-medium">
								Number of Games Owned
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-6xl my-4 font-bold">15</div>
							<p className="text-md text-muted-foreground">
								+3 games from last month
							</p>
						</CardContent>
					</Card>
					<Card className="flex flex-col items-center justify-center">
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-lg font-medium">
								Number of Magik-Piece Sets Owned
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-6xl my-4 font-bold">5</div>
							<p className="text-md text-muted-foreground">
								+2 sets from last month
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-col items-left justify-between space-y-0">
							<CardTitle className="mb-2">
								Overall Strengths and Weaknesses
							</CardTitle>
							<CardDescription>
								Shown in the different categorical domains of
								games that the child plays.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<StrengthsOverview />
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								My Kids
							</CardTitle>
						</CardHeader>
						<CardContent>
							<KidsTable />
						</CardContent>
					</Card>
				</div>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
					<Card className="col-span-4">
						<CardHeader>
							<CardTitle>Screentime Overview</CardTitle>
							<CardDescription>
								Average screentime of the aggregate of my kids
								in the past week.
							</CardDescription>
						</CardHeader>
						<CardContent className="pl-2">
							<ScreentimeOverview />
						</CardContent>
					</Card>
					<Card className="col-span-3">
						<CardHeader>
							<CardTitle>Ratings Overview</CardTitle>
							<CardDescription>
								Ratings Progression of all my kids in the past
								week.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<RatingsOverview />
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
