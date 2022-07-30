export const validationField = (field: string, value: string) => {
  switch (field) {
    case "name":
      return !/^[A-Za-z]{3,30} [A-Za-z]{3,30}$/.test(value)
        ? "The field must contain two words from 3 to 30 letter characters long!"
        : "";
    case "email":
      return !/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(value as string)
        ? "Email is incorrect!"
        : "";
    case "phone":
      return !/^\+7[\d]{10}$/.test(value as string)
        ? "Phone is incorrect!"
        : "";
    case "birthday":
      return !value ? "Wrong date!" : "";
    case "message":
      return (value && (value.length < 10 || value.length > 300)) || !value
        ? "message length must be greater than 3 and less than 300!"
        : "";
    default:
      return value.length ? "" : "Field is empty!";
  }
};
