import React, { useState, ChangeEvent } from "react";
import cl from "./form.module.scss";

const UserForm: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("+7");
  const [errors, setError] = useState({
    name: "",
    email: "",
    phone: "",
    birth: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    return !Object.values(errors).find((value) => value !== "");
    // TODO: run validation for all inputs - use refs?
    // TODO: send ajax request to server
  };

  const transformName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value.toUpperCase());
    // TODO: set cursor position after setUserName - use ref?
    if (errors.name) {
      validationName(e);
    }
  };

  const validationName = (e: ChangeEvent<HTMLInputElement>) => {
    setError({
      ...errors,
      name: !/^[A-Za-z]{3,30} [A-Za-z]{3,30}$/.test(e.target.value as string)
        ? "The field must contain two words from 3 to 30 letter characters long!"
        : "",
    });
  };

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    if (errors.email) {
      validationEmail(e);
    }
  };

  const validationEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setError({
      ...errors,
      email: !/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(
        e.target.value as string
      )
        ? "Wrong email!"
        : "",
    });
  };

  const transformPhone = (e: ChangeEvent<HTMLInputElement>) => {
    setUserPhone(e.target.value);
    if (errors.phone) {
      validationPhone(e);
    }
  };

  const validationPhone = (e: ChangeEvent<HTMLInputElement>) => {
    setError({
      ...errors,
      phone: !/^\+7[\d]{10}$/.test(e.target.value as string)
        ? "Wrong phone!"
        : "",
    });
  };

  const changeBirth = (e: ChangeEvent<HTMLInputElement>) => {
    if (errors.birth) {
      validationBirth(e);
    }
  };

  const validationBirth = (e: ChangeEvent<HTMLInputElement>) => {
    setError({ ...errors, birth: !e.target.value.length ? "Wrong date!" : "" });
  };

  const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (errors.message) {
      validationMessage(e);
    }
  };

  const validationMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setError({
      ...errors,
      message:
        e.target.value.length < 10 || e.target.value.length > 300
          ? "message length must be greater than 3 and less than 300!"
          : "",
    });
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
          {errors.name && <div className={cl.form__error}>{errors.name}</div>}
        </label>

        <label className={cl.form__label}>
          Email
          <input
            className={cl.form__input}
            type="text"
            onChange={changeEmail}
            onBlur={validationEmail}
            required
            minLength={3}
            maxLength={35}
          />
          {errors.email && <div className={cl.form__error}>{errors.email}</div>}
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
          {errors.phone && <div className={cl.form__error}>{errors.phone}</div>}
        </label>
        <label className={cl.form__label}>
          Birthday
          <input
            className={cl.form__input}
            type="date"
            onChange={changeBirth}
            onBlur={validationBirth}
            required
            minLength={3}
            maxLength={15}
          />
          {errors.birth && <div className={cl.form__error}>{errors.birth}</div>}
        </label>
        <label className={cl.form__label}>
          Message
          <textarea
            className={cl.form__input}
            onChange={changeMessage}
            onBlur={validationMessage}
            required
            minLength={10}
            maxLength={300}
          />
          {errors.message && (
            <div className={cl.form__error}>{errors.message}</div>
          )}
        </label>
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default UserForm;
