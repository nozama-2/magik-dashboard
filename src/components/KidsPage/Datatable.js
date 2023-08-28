"use client";

import * as React from "react";
import {
	CaretSortIcon,
	ChevronDownIcon,
	DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";

const data = [
	{
		rating: 1316,
		percentile: 31,
		noOfGames: 11,
		screentime: 36,
		game: "Tangram",
		rank: 123543,
	},
	{
		rating: 1242,
		percentile: 24,
		noOfGames: 14,
		screentime: 22,
		game: "Matching Shapes",
		rank: 233452,
	},
	{
		rating: 1837,
		percentile: 83,
		noOfGames: 13,
		screentime: 87,
		game: "Battleship",
		rank: 452323,
	},
	{
		rating: 1874,
		percentile: 87,
		noOfGames: 17,
		screentime: 84,
		game: "Code-Cars",
		rank: 34534,
	},
];

export const columns = [
	{
		id: "id",
		// header: ({ table }) => (
		// 	<Checkbox
		// 		checked={table.getIsAllPageRowsSelected()}
		// 		onCheckedChange={(value) =>
		// 			table.toggleAllPageRowsSelected(!!value)
		// 		}
		// 		aria-label="Select all"
		// 	/>
		// ),
		// cell: ({ row }) => (
		// 	<Checkbox
		// 		checked={row.getIsSelected()}
		// 		onCheckedChange={(value) => row.toggleSelected(!!value)}
		// 		aria-label="Select row"
		// 	/>
		// ),
		// enableSorting: true,
		// enableHiding: false,
	},
	{
		accessorKey: "game",
		header: "Game",
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("game")}</div>
		),
	},
	{
		accessorKey: "screentime",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}>
					Screentime
					<CaretSortIcon className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="lowercase ml-4">
				{row.getValue("screentime")} min
			</div>
		),
	},
	{
		accessorKey: "noOfGames",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}>
					Played
					<CaretSortIcon className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="lowercase ml-4">
				{row.getValue("noOfGames")} games
			</div>
		),
	},
	{
		accessorKey: "percentile",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}>
					Percentile
					<CaretSortIcon className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="lowercase ml-4">{row.getValue("percentile")}%</div>
		),
	},
	{
		accessorKey: "rank",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}>
					Rank
					<CaretSortIcon className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="lowercase ml-4">#{row.getValue("rank")}</div>
		),
	},
	{
		accessorKey: "rating",
		header: ({ column }) => (
			<div className="text-right font-medium">
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}>
					Rating
					<CaretSortIcon className="ml-2 h-4 w-4" />
				</Button>
			</div>
		),
		cell: ({ row }) => {
			const rating = row.getValue("rating");
			return <div className="text-right font-medium mr-12">{rating}</div>;
		},
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<DotsHorizontalIcon className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem>Show Graphs</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

const DataTable = () => {
	const [sorting, setSorting] = React.useState([]);
	const [columnFilters, setColumnFilters] = React.useState([]);
	const [columnVisibility, setColumnVisibility] = React.useState({});
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<div className="w-full">
			{/* <div className="flex items-center py-4">
				<Input
					placeholder="Filter ranks..."
					value={table.getColumn("rank")?.getFilterValue() ?? ""}
					onChange={(event) =>
						table
							.getColumn("rank")
							?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" className="ml-auto">
							Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						{table
							.getAllColumns()
							.filter((column) => column.getCanHide())
							.map((column) => {
								return (
									<DropdownMenuCheckboxItem
										key={column.id}
										className="capitalize"
										checked={column.getIsVisible()}
										onCheckedChange={(value) =>
											column.toggleVisibility(!!value)
										}>
										{column.id}
									</DropdownMenuCheckboxItem>
								);
							})}
					</DropdownMenuContent>
				</DropdownMenu>
			</div> */}
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef
															.header,
														header.getContext()
												  )}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={
										row.getIsSelected() && "selected"
									}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<div className="flex-1 text-sm text-muted-foreground">
					{table.getFilteredSelectedRowModel().rows.length} of{" "}
					{table.getFilteredRowModel().rows.length} row(s) selected.
				</div>
				<div className="space-x-2">
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}>
						Previous
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
};

export default DataTable;
