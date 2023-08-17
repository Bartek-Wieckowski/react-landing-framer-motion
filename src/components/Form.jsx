import { useState } from "react";

export default function Form() {
  const inputs = [
    {
      id: 1,
      name: "Imię",
      type: "text",
      placeholder: "Wpisz swoje imię",
      errormessage: "Wpisz conajmniej 3 litery bez znaków specjalnych i liczb.",
      label: "Imię",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Podaj swój adres e-mail",
      errormessage: "Wprowadź poprawy adres!",
      label: "E-mail",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      errormessage:
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
  const [showTooltip, setShowTooltip] = useState(false);

  const { label, errormessage, type } = input;

  function handleFocus(e) {
    setFocused(true);
  }

  function handleMouseEnter() {
    setShowTooltip(true);
    console.log("najechane");
  }

  function handleMouseLeave() {
    setShowTooltip(false);
  }

  let tooltip = null;
  if (type === "date" && showTooltip) {
    tooltip = <span className="tooltip">{errormessage}</span>;
  }

  return (
    <div className={`formInput ${type}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <label>{label}</label>
      <input {...input} onBlur={handleFocus} focused={focused.toString()} />
      {tooltip}
      <span>{errormessage}</span>
    </div>
  );
}
