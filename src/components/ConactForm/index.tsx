import React, { useState } from "react";
import {
  validationAllFields,
  hasValidationErrors,
} from "../../services/validation";
import cl from "./contactForm.module.scss";
import { FieldData, User } from "../../types/user";
import { sendContact } from "../../api/contact";
import { UserName } from "./UserName";
import { UserEmail } from "./UserEmail";
import { UserPhone } from "./UserPhone";
import { UserBirthday } from "./UserBirthday";
import { UserMessage } from "./UserMessage";

const initialStateForForm = {
  name: { value: "" },
  email: { value: "" },
  phone: { value: "" },
  birthday: { value: "" },
  message: { value: "" },
} as User;

const ContactForm: React.FC = () => {
  const [user, setUser] = useState(initialStateForForm);
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (isLoading) {
      return;
    }

    setStatusMessage("");
    setUser(validationAllFields(user));

    if (!hasValidationErrors(user)) {
      await sendFormData();
    }
  };

  const sendFormData = async () => {
    setIsLoading(true);
    const response = await sendContact(user);
    setIsLoading(false);
    setStatusMessage(response.message);

    if (response.result !== "error") {
      setUser(initialStateForForm);
    }
  };

  const updateUser = (param: Partial<Record<keyof User, FieldData>>) => {
    setUser({ ...user, ...param });
  };

  return (
    <>
      <form className={cl.form}>
        <UserName name={user.name} updateUser={updateUser} />
        <UserEmail email={user.email} updateUser={updateUser} />
        <UserPhone phone={user.phone} updateUser={updateUser} />
        <UserBirthday birthday={user.birthday} updateUser={updateUser} />
        <UserMessage message={user.message} updateUser={updateUser} />
        <input
          type="button"
          value="Send"
          className={cl.form__button}
          disabled={isLoading}
          onClick={handleSubmit}
        />
        <div className={cl.form__message}>{statusMessage}</div>
      </form>
    </>
  );
};

export default ContactForm;
