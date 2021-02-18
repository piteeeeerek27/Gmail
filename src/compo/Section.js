import React from "react";
import "../styles/Section.scss";

const Section = ({ title, Icon, color, selected }) => {
	return (
		<div
			className={`Section ${selected && "Section--Selected"}`}
			style={{
				borderBottom: `3px solid ${color}`,
				color: `${selected && color}`,
			}}>
			<Icon />
			<h4>{title}</h4>
		</div>
	);
};

export default Section;
