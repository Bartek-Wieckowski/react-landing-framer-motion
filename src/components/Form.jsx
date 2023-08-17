import { useState } from "react";

export default function Form() {
  
  const inputs = [
    {
      id: 1,
      name: "Imię",
      type: "text",
      placeholder: "Wpisz swoje imię",
      errorMessage: "Wpisz conajmniej 3 litery bez znaków specjalnych i liczb.",
      label: "Imię",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Podaj swój adres e-mail",
      errorMessage: "Wprowadź poprawy adres!",
      label: "E-mail",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      errorMessage:
        "Data urodzenia nie jest konieczna, ale podając ją możemy lepiej dostosować treści jakie możesz od nas otrzymywać.",
      label: "Data urodzenia",
    },
  ];
  return (
    <form>
      <h2>Zapisz się na webinar!</h2>
      {inputs.map((input) => (
        <FormInput key={input.id} input={input} />
      ))}
      <button>Wyślij i odbierz prezent!</button>
    </form>
  );
}

function FormInput({ input }) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage } = input;

  function handleFocus(e) {
    setFocused(true);
  }
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...input} onBlur={handleFocus} focused={focused.toString()} />
      <span>{errorMessage}</span>
    </div>
  );
}
