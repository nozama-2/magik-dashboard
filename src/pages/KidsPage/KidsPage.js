import React from "react";
import "./KidsPage.css";
import KidsSwitcher from "../../components/KidsPage/KidsSwitcher";
import ScreenTimeGraph from "../../components/KidsPage/ScreentimeGraph";
import ScreentimeLimit from "../../components/KidsPage/ScreentimeLimit";
import StrengthRadarChart from "../../components/KidsPage/StrengthsRadarChart";
import DataTable from "../../components/KidsPage/Datatable";

const KidsPage = () => {
	return (
		<div className="accessories-page-container">
			<div className="border-b">
				<div className="flex h-16 items-center px-4">
					<div className="ml-auto flex items-center space-x-4">
						{/* <Search /> */}
					</div>
				</div>
			</div>
			<div className="space-y-4 p-8 pt-6">
				<div className="flex items-center justify-between space-y-2">
					<h2 className="text-3xl font-bold tracking-tight">
						My Kids
					</h2>
					<KidsSwitcher />
				</div>
				<div className="grid gap-4 grid-rows-2">
					<div className="grid gap-4 grid-cols-12">
						{/* First Row of Graphs */}
						<div className="col-span-4">
							<ScreentimeLimit />
						</div>
						<div className="col-span-8">
							<ScreenTimeGraph />
						</div>
					</div>
					<div className="grid gap-4 grid-cols-12">
						{/* Second Row of Graphs */}
						<div className="col-span-8">
							<DataTable />
						</div>
						<div className="col-span-4">
							<StrengthRadarChart />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KidsPage;
