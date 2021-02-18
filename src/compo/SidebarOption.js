import React from "react";
import "../styles/SidebarOption.scss";

function SidebarOption({ Icon, title, number, selected }) {
	return (
		<div className={`SidebarOption ${selected && "SidebarOptionActive"}`}>
			<Icon />
			<h3>{title}</h3>
			<p>{number}</p>
		</div>
	);
}

export default SidebarOption;
