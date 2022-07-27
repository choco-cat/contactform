import React, { useState, ChangeEvent } from "react";
import cl from "./form.module.scss";

const UserForm: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("+7");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorBirth, setErrorBirth] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = () => {
    return;
  };
  const transformName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value.toUpperCase());
  };
  const validationName = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorName(
      !/^[A-Za-z]{3,30} [A-Za-z]{3,30}$/.test(e.target.value as string)
        ? "The field must contain two words from 3 to 30 letter characters long!"
        : ""
    );
  };

  const validationEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorEmail(
      !/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(e.target.value as string)
        ? "Wrong email!"
        : ""
    );
  };

  const transformPhone = (e: ChangeEvent<HTMLInputElement>) => {
    setUserPhone(e.target.value);
  };

  const validationPhone = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorPhone(
      !/^\+7[\d]{10}$/.test(e.target.value as string) ? "Wrong phone!" : ""
    );
  };

  const validationBirth = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorBirth(!e.target.value.length ? "Wrong date!" : "");
  };

  const validationMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setErrorMessage(
      e.target.value.length < 3 || e.target.value.length > 300
        ? "message length must be greater than 3 and less than 300!"
        : ""
    );
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
            onBlur={validationEmail}
            required
            minLength={3}
            maxLength={35}
          />
          {errorEmail && <div className={cl.form__error}>{errorEmail}</div>}
        </label>
        <label className={cl.form__label}>
          Phone
          <input
            className={cl.form__input}
            type="text"
            value={userPhone}
            onChange={transformPhone}
            onBlur={validationPhone}
            required
            minLength={12}
            maxLength={12}
          />
          {errorPhone && <div className={cl.form__error}>{errorPhone}</div>}
        </label>
        <label className={cl.form__label}>
          Birthday
          <input
            className={cl.form__input}
            type="date"
            onBlur={validationBirth}
            required
            minLength={3}
            maxLength={15}
          />
          {errorBirth && <div className={cl.form__error}>{errorBirth}</div>}
        </label>
        <label className={cl.form__label}>
          Message
          <textarea
            className={cl.form__input}
            onBlur={validationMessage}
            required
            minLength={10}
            maxLength={300}
          />
          {errorMessage && <div className={cl.form__error}>{errorMessage}</div>}
        </label>
      </form>
    </>
  );
};

export default UserForm;
