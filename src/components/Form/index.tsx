import React from "react";
import cl from "./form.module.scss";

const UserForm: React.FC = (props) => {
  const handleSubmit = () => {
    return;
  };
  const validationInput = () => {
    return;
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={cl.form}>
        <label className={cl.form__label}>
          Your Name
          <input
            className={cl.form__input}
            type="text"
            required
            minLength={3}
            maxLength={35}
          />
        </label>
        <label className={cl.form__label}>
          Email
          <input
            className={cl.form__input}
            type="text"
            onChange={() => validationInput}
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
            onChange={() => validationInput}
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
            onChange={() => validationInput}
            required
            minLength={3}
            maxLength={15}
          />
        </label>
        <label className={cl.form__label}>
          Message
          <textarea
            className={cl.form__input}
            onChange={() => validationInput}
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
