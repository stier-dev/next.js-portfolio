// Have to buy a domain first!

// Good explanation:
// https://www.youtube.com/watch?v=QrVYLLpoyMw&ab_channel=ColbyFayock

// Form error message and forth:
// Next.js (react) contact form using react-hook-form and /api route for submission
// https://www.youtube.com/watch?v=7j6xWy4P_LA&ab_channel=AdamRichardson

// automaticly sent the people an email, that i will message them back soon :)
// need security stuff, to secure peoples Data and spam bot protection

import { useForm } from "react-hook-form";
import style from "@/styles/contact.module.scss";
import axios from "axios";

export default function Contact() {
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
        // !!! reactivate to reset
        // reset();
        console.log(
          "success",
          "Thank you for contacting us, we will be in touch soon."
        );
      }
    } catch (err) {}
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
          <button href="#" className={style.contactBtn} alt="Senden"></button>
          {errors.name || errors.subject || errors.email ? (
            <span role="alert" className={style.submitError}>
              * Bite fülle alle erforderlichen Felder aus *
            </span>
          ) : (
            <h3 className={style.submitSuccess}>
              Deine Nachricht wurde erfolgreich geschickt!
            </h3>
          )}
        </div>
      </form>
    </div>
  );
}
