import React from "react";
import "../styles/SendMail.scss";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeMessage } from "../features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";

function SendMail() {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (formData) => {
		console.log(formData);
		db.collection("emails").add({
			to: formData.to,
			subject: formData.subject,
			message: formData.message,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		dispatch(closeMessage());
	};

	const dispatch = useDispatch();

	return (
		<div className="SendMail">
			<div className="SendMailHeader">
				<h3>New Message</h3>
				<CloseIcon
					onClick={() => dispatch(closeMessage())}
					className="SendMailHeaderClose"
				/>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					name="to"
					type="email"
					placeholder="To"
					ref={register({ required: true })}
				/>

				{errors.to && <p className="SendMailError">To is Required!</p>}

				<input
					name="subject"
					type="text"
					placeholder="Subject"
					ref={register({ required: true })}
				/>
				{errors.to && <p className="SendMailError">Subject is Required!</p>}
				<input
					name="message"
					type="text"
					placeholder="Message..."
					className="SendMailMessage"
					ref={register({ required: true })}
				/>
				{errors.to && <p className="SendMailError">Message is Required!</p>}

				<div>
					<Button
						className="SendMailSend"
						type="submit"
						variant="contained"
						color="primary">
						Send
					</Button>
				</div>
			</form>
		</div>
	);
}

export default SendMail;
