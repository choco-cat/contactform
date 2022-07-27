import React, { useState, ChangeEvent } from "react";
import cl from "./form.module.scss";

const UserForm: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [errorName, setErrorName] = useState("");
  const handleSubmit = () => {
    return;
  };
  const transformName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value.toUpperCase());
  };
  const validationName = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^[A-Za-z]{3,30} [A-Za-z]{3,30}$/.test(e.target.value as string)) {
      setErrorName(
        "The field must contain two words from 3 to 30 letter characters long!"
      );
    } else {
      setErrorName("");
    }
  };
  const validationMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={cl.form}>
        <label className={cl.form__label}>
          Your Name
          <input
            className={cl.form__input}
            type="text"
            value={userName}
            onChange={transformName}
            onBlur={validationName}
            required
            minLength={3}
            maxLength={35}
          />
          {errorName && <div className={cl.form__error}>{errorName}</div>}
        </label>

        <label className={cl.form__label}>
          Email
          <input
            className={cl.form__input}
            type="text"
            required
            minLength={3}
            maxLength={35}
          />
        </label>
        <label className={cl.form__label}>
          Phone
          <input
            className={cl.form__input}
            type="text"
            required
            minLength={3}
            maxLength={15}
          />
        </label>
        <label className={cl.form__label}>
          Bithday
          <input
            className={cl.form__input}
            type="date"
            required
            minLength={3}
            maxLength={15}
          />
        </label>
        <label className={cl.form__label}>
          Message
          <textarea
            className={cl.form__input}
            onChange={validationMessage}
            required
            minLength={3}
            maxLength={300}
          />
        </label>
      </form>
    </>
  );
};

export default UserForm;
