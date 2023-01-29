// ! Telefonnummer mit Whatsapp Icon hinzufügen
// ! email hinzufügen

// ! memory different for schmartphones an

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import style from "@/styles/contact.module.scss";
import axios from "axios";
import Image from "next/legacy/image";

export default function Contact() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm();

	const [messageSent, setMessageSent] = useState(false);
	const nameValue = watch("name", "");
	const subjectValue = watch("subject", "");
	const emailValue = watch("email", "");
	const messageValue = watch("message", "");

	function inputIsEmpty(value) {
		if (value == "") {
			return true;
		}
		if (value != "") {
			return false;
		}
	}

	async function onSubmit(values) {
		let config = {
			method: "post",
			url: "api/contact",
			headers: {
				"content-Type": "application/json",
			},
			data: values,
		};

		try {
			const response = await axios(config);
			console.log(response);
			if (response.status == 200) {
				reset();
				setMessageSent(true);
			}
		} catch (err) {
			console.log("--- ERROR ---");
			console.log(err);
		}
	}

	return (
        <div id="contact" className={style.mainContainer}>
			<div className={style.headlinesContainer}>
				<h1 className={style.headline}>KONTAKT</h1>
				<div className={style.contactContainer}>
					<div className={style.contactInfos}>
						<a href="tel:+491743917416" className={style.iconAndText}>
							<div className={`${style.image} ${style.tel}`}>
								<Image layout="fill" src={"/img/contact/phone.svg"} />
							</div>
							<div className={style.image}>
								<Image layout="fill" src={"/img/contact/whatsapp.svg"} />
							</div>
							<h3 className={style.contact}>0174 3917416</h3>
						</a>
						<a href="mailto:info@stier.dev" className={style.iconAndText}>
							<div className={`${style.image} ${style.mail}`}>
								<Image layout="fill" src={"/img/contact/mail.svg"} />
							</div>
							<h3 className={style.contact}>info@stier.dev</h3>
						</a>
					</div>
				</div>
			</div>

			<div className={style.formAndSucessScreenContainer}>
				<div
					className={`${style.messageSentContainer}  ${
						messageSent ? style.sentAppear : style.sentDisappear
					}`}
				>
					<div className={style.sentTextContainer}>
						<h1 className={`${style.sentHeadline}`}>Glückwunsch</h1>
						<h3 className={`${style.sentMessage}`}>
              Die Brieftaube ist unterwegs!
						</h3>
						<button
							onClick={() => {
								setMessageSent(false);
							}}
							className={`${style.contactBtn} ${style.newMessageBtn}`}
							alt="Neue Nachricht"
						></button>
					</div>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={style.contactFormContainer}
				>
					{/* NAME */}
					<div className={style.inputBox}>
						<input
							{...register("name", {
								required: {
									value: true,
									message: "*",
								},
							})}
							className={style.input}
							// type="text"
							// required={true}
						/>
						<span
							className={`${style.inputTitle} ${
								!inputIsEmpty(nameValue) ? style.activeInputTitle : ""
							}`}
						>
              Name
							{errors.name && (
								<span role="alert" className={style.inputError}>
                  &nbsp;{errors.name.message}
								</span>
							)}
						</span>
						<i
							className={`${style.stripe} ${
								!inputIsEmpty(nameValue) ? style.activeStripe : ""
							}`}
						></i>
					</div>
					{/* BETREFF */}
					<div className={style.inputBox}>
						<input
							{...register("subject", {
								required: { value: true, message: "*" },
							})}
							className={style.input}
							// type="text"
							// required="required"
						/>
						{/* BETREFF */}
						<span
							className={`${style.inputTitle} ${
								!inputIsEmpty(subjectValue) ? style.activeInputTitle : ""
							}`}
						>
              Betreff
							{errors.subject && (
								<span role="alert" className={style.inputError}>
                  &nbsp;{errors.subject.message}
								</span>
							)}
						</span>
						<i
							className={`${style.stripe} ${
								!inputIsEmpty(subjectValue) ? style.activeStripe : ""
							}`}
						></i>
					</div>
					<div className={style.inputBox}>
						<input
							{...register("email", {
								required: {
									value: true,
									message: "*",
								},
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: "Die Email scheint falsch zu sein",
								},
							})}
							className={style.input}
							// type="email"
							// required="required"
						/>
						{/* EMAIL */}
						<span
							className={`${style.inputTitle} ${
								!inputIsEmpty(emailValue) ? style.activeInputTitle : ""
							}`}
						>
              Email
							{errors.email && (
								<span role="alert" className={style.inputError}>
                  &nbsp;{errors.email.message}
								</span>
							)}
						</span>
						<i
							className={`${style.stripe} ${
								!inputIsEmpty(emailValue) ? style.activeStripe : ""
							}`}
						></i>
					</div>
					{/* MESSAGE */}
					<div className={`${style.messageInputBox}`}>
						<textarea
							{...register("message", {
								required: { value: true, message: "*" },
								minLength: {
									value: 10,
									message: "Schreibe mir bitte mehr",
								},
							})}
							// required="required"
							className={`${style.messageInput}`}
							cols="20"
							rows="5"
						></textarea>
						<span
							className={`${style.messageInputTitle} ${
								!inputIsEmpty(messageValue) ? style.activeMessageInputTitle : ""
							}`}
						>
              Nachricht
							{errors.message && (
								<span role="alert" className={style.inputError}>
                  &nbsp;{errors.message.message}
								</span>
							)}
						</span>
						<span className={style.messageInputBackground}></span>
						<i
							className={`${style.stripe} ${
								!inputIsEmpty(messageValue) ? style.activeStripe : ""
							}`}
						></i>
					</div>
					<div className={style.btnContainer}>
						<button className={style.contactBtn} alt="Senden"></button>
						{errors.name || errors.subject || errors.email ? (
							<span role="alert" className={style.submitError}>
                * Bitte fülle alle Felder aus *
							</span>
						) : (
							""
						)}
					</div>
				</form>
			</div>
		</div>
    );
}
