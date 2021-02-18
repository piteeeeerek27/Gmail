import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "../styles/EmailRow.scss";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice";

function EmailRow({ title, subject, description, time, id }) {
	const history = useHistory();
	const dispatch = useDispatch();

	const openMail = () => {
		dispatch(
			selectMail({
				title,
				subject,
				description,
				time,
				id,
			}),
		);

		history.push("./mail");
	};

	return (
		<div onClick={openMail} className="EmailRow">
			<div className="EmailRowOptions">
				<Checkbox />
				<IconButton>
					<StarBorderIcon />
				</IconButton>
				<IconButton>
					<LabelImportantIcon />
				</IconButton>
			</div>

			<h3 className="EmailRowTitle">{title}</h3>

			<div className="EmailRowMessage">
				<h4>
					{subject} {" - "} <span className="EmailRowDescr">{description}</span>
				</h4>
			</div>

			<p className="EmailRowTime">{time}</p>
		</div>
	);
}

export default EmailRow;
