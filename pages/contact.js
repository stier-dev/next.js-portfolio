// Have to buy a domain first!

// Good explanation:
// https://www.youtube.com/watch?v=QrVYLLpoyMw&ab_channel=ColbyFayock

// Form error message and forth:
// Next.js (react) contact form using react-hook-form and /api route for submission
// https://www.youtube.com/watch?v=7j6xWy4P_LA&ab_channel=AdamRichardson

// automaticly sent the people an email, that i will message them back soon :)
// need security stuff, to secure peoples Data and spam bot protection

import { useForm } from "react-hook-form";
import { useState } from "react";
import style from "@/styles/contact.module.scss";
import axios from "axios";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  // ! if (input.value = empty) { make white and on spot }
  // ! if (input.value >= 0) { blue, small on top }
  // ! css: :focus { blue, small on top }
  function setFocusInput(inputField) {}

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(values) {
    let config = {
      method: "post",
      url: `api/contact`,
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
    <div className={style.mainContainer}>
      <div className={style.headlinesContainer}>
        <h1>KONTAKT</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={style.contactFormContainer}
      >
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
                console.log("now you can write another message");
              }}
              className={`${style.contactBtn} ${style.newMessageBtn}`}
              alt="Neue Nachricht"
            ></button>
          </div>
        </div>
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
          <span className={style.inputTitle}>
            Name
            {errors.name && (
              <span role="alert" className={style.inputError}>
                &nbsp;{errors.name.message}
              </span>
            )}
          </span>
          <i className={style.stripe}></i>
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
          <span className={style.inputTitle}>
            Betreff{" "}
            {errors.subject && (
              <span role="alert" className={style.inputError}>
                &nbsp;{errors.subject.message}
              </span>
            )}
          </span>
          <i className={style.stripe}></i>
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
          <span className={style.inputTitle}>
            Email
            {errors.email && (
              <span role="alert" className={style.inputError}>
                &nbsp;{errors.email.message}
              </span>
            )}
          </span>
          <i className={style.stripe}></i>
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
          <span className={style.messageInputTitle}>
            Nachricht
            {errors.message && (
              <span role="alert" className={style.inputError}>
                &nbsp;{errors.message.message}
              </span>
            )}
          </span>
          <span className={style.messageInputBackground}></span>
          <i className={style.stripe}></i>
        </div>
        <div className={style.btnContainer}>
          <button className={style.contactBtn} alt="Senden"></button>
          {errors.name || errors.subject || errors.email ? (
            <span role="alert" className={style.submitError}>
              * Bite fülle alle Felder aus *
            </span>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}
