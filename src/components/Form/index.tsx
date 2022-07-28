import React, { useState, ChangeEvent } from "react";
import cl from "./form.module.scss";

interface IFormData {
  value: string;
  error: string;
}

const UserForm: React.FC = () => {
  const [userName, setUserName] = useState({} as IFormData);
  const [userEmail, setUserEmail] = useState({} as IFormData);
  const [userPhone, setUserPhone] = useState({} as IFormData);
  const [userBirth, setUserBirth] = useState({} as IFormData);
  const [userMessage, setUserMessage] = useState({} as IFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validationName(userName.value);
    validationEmail(userEmail.value);
    validationPhone(userPhone.value);
    validationBirth(userBirth.value);
    validationMessage(userMessage.value);
    // TODO: calc all errors. if 0, then send ajax request to server
  };

  const transformName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName({ ...userName, value: e.target.value.toUpperCase() });
    // TODO: set cursor position after setUserName - use ref?
    if (userName.error) {
      validationName(e.target.value);
    }
  };

  const validationName = (value: string) => {
    setUserName({
      ...userName,
      error: !/^[A-Za-z]{3,30} [A-Za-z]{3,30}$/.test(value as string)
        ? "The field must contain two words from 3 to 30 letter characters long!"
        : "",
    });
  };

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setUserEmail({ ...userEmail, value: e.target.value });
    if (userEmail.error) {
      validationEmail(e.target.value);
    }
  };

  const validationEmail = (value: string) => {
    setUserEmail({
      ...userEmail,
      error: !/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(value as string)
        ? "Wrong email!"
        : "",
    });
  };

  const transformPhone = (e: ChangeEvent<HTMLInputElement>) => {
    setUserPhone({ ...userPhone, value: e.target.value });
    if (userPhone.error) {
      validationPhone(e.target.value);
    }
  };

  const validationPhone = (value: string) => {
    setUserPhone({
      ...userPhone,
      error: !/^\+7[\d]{10}$/.test(value as string) ? "Wrong phone!" : "",
    });
  };

  const changeBirth = (e: ChangeEvent<HTMLInputElement>) => {
    setUserBirth({ ...userBirth, value: e.target.value });
    if (userBirth.error) {
      validationBirth(e.target.value);
    }
  };

  const validationBirth = (value: string) => {
    setUserBirth({ ...userBirth, error: !value.length ? "Wrong date!" : "" });
  };

  const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUserMessage({ ...userMessage, value: e.target.value });
    if (userMessage.error) {
      validationMessage(e.target.value);
    }
  };

  const validationMessage = (value: string) => {
    setUserMessage({
      ...userMessage,
      error:
        value.length < 10 || value.length > 300
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
            value={userName.value}
            onChange={transformName}
            onBlur={(e: ChangeEvent<HTMLInputElement>) =>
              validationName(e.target.value)
            }
            minLength={3}
            maxLength={35}
          />
          {userName.error && (
            <div className={cl.form__error}>{userName.error}</div>
          )}
        </label>

        <label className={cl.form__label}>
          Email
          <input
            className={cl.form__input}
            type="text"
            onChange={changeEmail}
            onBlur={(e: ChangeEvent<HTMLInputElement>) =>
              validationEmail(e.target.value)
            }
            minLength={3}
            maxLength={35}
          />
          {userEmail.error && (
            <div className={cl.form__error}>{userEmail.error}</div>
          )}
        </label>
        <label className={cl.form__label}>
          Phone
          <input
            className={cl.form__input}
            type="text"
            placeholder="+7__________"
            value={userPhone.value}
            onChange={transformPhone}
            onBlur={(e: ChangeEvent<HTMLInputElement>) =>
              validationPhone(e.target.value)
            }
            minLength={12}
            maxLength={12}
          />
          {userPhone.error && (
            <div className={cl.form__error}>{userPhone.error}</div>
          )}
        </label>
        <label className={cl.form__label}>
          Birthday
          <input
            className={cl.form__input}
            type="date"
            onChange={changeBirth}
            onBlur={(e: ChangeEvent<HTMLInputElement>) =>
              validationBirth(e.target.value)
            }
            minLength={3}
            maxLength={15}
          />
          {userBirth.error && (
            <div className={cl.form__error}>{userBirth.error}</div>
          )}
        </label>
        <label className={cl.form__label}>
          Message
          <textarea
            className={cl.form__input}
            onChange={changeMessage}
            onBlur={(e: ChangeEvent<HTMLTextAreaElement>) =>
              validationMessage(e.target.value)
            }
            minLength={10}
            maxLength={300}
          />
          {userMessage.error && (
            <div className={cl.form__error}>{userMessage.error}</div>
          )}
        </label>
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default UserForm;
