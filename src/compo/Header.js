import React from "react";
import "../styles/Header.scss";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { logout, selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";

const Header = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const signOut = () => {
		auth.signOut().then(() => {
			dispatch(logout());
		});
	};
	return (
		<div className="Header">
			<div className="HeaderLeft">
				<IconButton>
					<MenuIcon />
				</IconButton>
				<img
					src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
					alt=""
				/>
			</div>

			<div className="HeaderMiddle">
				<SearchIcon />
				<input type="text" placeholder="Search mail" />
				<ArrowDropDownIcon />
			</div>

			<div className="HeaderRight">
				<IconButton>
					<AppsIcon />
				</IconButton>
				<IconButton>
					<NotificationsIcon />
				</IconButton>
				<Avatar
					className="HeaderRightAvatar"
					onClick={signOut}
					src={user?.photoUrl}
				/>
			</div>
		</div>
	);
};

export default Header;
