import React from "react";
import "./SideMenu.css";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useLocation, Link } from "react-router-dom";

const SideMenu = () => {
	const location = useLocation();

	return (
		<div className="side-menu-container">
			<div className="flex flex-row gap-4 pb-4 border-b">
				<Avatar>
					<AvatarImage
						src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
						alt="Image"
					/>
					<AvatarFallback>OM</AvatarFallback>
				</Avatar>
				<div>
					<p className="text-md font-medium leading-none">
						Sophia Applewood
					</p>
					<p className="text-md text-muted-foreground">Mother of 4</p>
				</div>
			</div>
			<Link
				className={
					location.pathname === "/" ? "nav-active" : "nav-item"
				}
				to="/">
				Overview
			</Link>
			<Link
				className={
					location.pathname === "/Kids" ? "nav-active" : "nav-item"
				}
				to="/Kids">
				My Kids
			</Link>
			<Link
				className={
					location.pathname === "/Accessories"
						? "nav-active"
						: "nav-item"
				}
				to="/Accessories">
				Accessories
			</Link>
			<Link
				className={
					location.pathname === "/Settings"
						? "nav-active"
						: "nav-item"
				}
				to="/Settings">
				Settings
			</Link>
		</div>
	);
};

export default SideMenu;
