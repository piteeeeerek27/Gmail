import React, { useEffect, useState } from "react";
import "../styles/EmailList.scss";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import Section from "./Section";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

const EmailList = () => {
	const [emails, setEmails] = useState([]);

	useEffect(() => {
		db.collection("emails")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) =>
				setEmails(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					})),
				),
			);
	}, []);

	return (
		<div className="EmailList">
			<div className="EmailListSettings">
				<div>
					<Checkbox />
					<IconButton>
						<ArrowDropDownIcon />
					</IconButton>
					<IconButton>
						<RedoIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
				<div>
					<IconButton>
						<ChevronLeftIcon />
					</IconButton>
					<IconButton>
						<ChevronRightIcon />
					</IconButton>
					<IconButton>
						<KeyboardHideIcon />
					</IconButton>
					<IconButton>
						<SettingsIcon />
					</IconButton>
				</div>
			</div>
			<div className="EmailListSection">
				<Section Icon={InboxIcon} title="primary" color="red" selected />
				<Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
				<Section Icon={LocalOfferIcon} title="Promotions" color="green" />
			</div>
			<div className="EmailListList">
				{emails.map(({ id, data: { to, subject, message, timestamp } }) => (
					<EmailRow
						id={id}
						key={id}
						title={to}
						subject={subject}
						description={message}
						time={new Date(timestamp?.seconds * 1000).toUTCString()}
					/>
				))}
			</div>
		</div>
	);
};

export default EmailList;
