import style from "@/styles/Contact.module.scss";

export default function Contact() {
  return (
    <div className={style.mainContainer}>
      <div className={style.headlinesContainer}>
        <h1>KONTAKT</h1>
      </div>
      <div className={style.contactFormContainer}>
        <div className={style.inputBox}>
          <input className={style.input} type="text" required="required" />
          <span className={style.inputTitle}>Name</span>
          <i className={style.stripe}></i>
        </div>
        <div className={style.inputBox}>
          <input className={style.input} type="text" required="required" />
          <span className={style.inputTitle}>Betreff</span>
          <i className={style.stripe}></i>
        </div>
        <div className={`${style.messageInputBox}`}>
          <textarea
            cols="20"
            rows="5"
            required="required"
            className={`${style.messageInput}`}
          ></textarea>
          {/* <input
            className={`${style.input} ${style.messageInput}`}
            type="text"
            required="required"
          /> */}
          <span className={style.messageInputTitle}>Nachricht</span>
          <span className={style.messageInputBackground}></span>
          <i className={style.stripe}></i>
        </div>
        <div className={style.btnContainer}>
          <button href="#" className={style.contactBtn} alt="Senden"></button>
        </div>
      </div>
    </div>
  );
}
