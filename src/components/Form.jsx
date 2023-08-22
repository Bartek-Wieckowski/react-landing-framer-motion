import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, push, get } from "firebase/database";
import { webinarNumberAndDate, landingSettings } from "../utils/data-settings";
import app from "../firebaseConfig";
import Modal from "./Modal";
import AnimatedButton from "./AnimatedButton";

export default function Form() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    birthday: "",
    email: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [modalConfig, setModalConfig] = useState(null);

  const inputs = [
    {
      id: 1,
      name: "name",
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

  function handleOnChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    const database = getDatabase(app);
    const emailID = values.email.replace(/[.]/g, "_");
    const formDataRef = ref(database, webinarNumberAndDate + "/" + emailID);

    try {
      const snapshot = await get(formDataRef);
      if (snapshot.exists()) {
        setModalConfig({
          isOpen: true,
          buttonText: "Spróbuj ponownie",
          contentText: "Ten adres e-mail już istnieje w bazie danych!",
        });
        return;
      }

      await push(formDataRef, {
        id: crypto.randomUUID(),
        name: values.name.trim(),
        email: values.email.trim(),
        birthday: values.birthday,
      });

      setFormSubmitted(true);
      setModalConfig({
        isOpen: true,
        buttonText: "Zamknij",
        contentText: "Formularz wysłany poprawnie!",
      });

      setValues((prevValues) => ({
        ...prevValues,
        name: "",
        email: "",
        birthday: "",
      }));
    } catch (error) {
      setModalConfig({
        isOpen: true,
        buttonText: "Spróbuj ponownie",
        contentText: "Wystąpił błąd podczas wysyłania formularza...",
      });
      console.log(error);
    }
  }
  function handleCloseModal() {
    setModalConfig(null);
    if (formSubmitted) {
      navigate("/thanks");
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h2>Zapisz się na webinar!</h2>
        {inputs.map((input) => (
          <FormInput key={input.id} input={input} onChange={handleOnChange} value={values[input.name]} />
        ))}

        {landingSettings.gift ? (
          <AnimatedButton type="submit">Wyślij i odbierz prezent!</AnimatedButton>
        ) : (
          <AnimatedButton type="submit">Wyślij</AnimatedButton>
        )}
      </form>
      {modalConfig && (
        <Modal
          isOpen={modalConfig.isOpen}
          onClose={handleCloseModal}
          buttonText={modalConfig.buttonText}
          contentText={modalConfig.contentText}
        />
      )}
    </>
  );
}

function FormInput({ input, value, onChange }) {
  const [focused, setFocused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const { label, errormessage, type } = input;

  function handleFocus() {
    setFocused(true);
  }

  function handleMouseEnter() {
    if (type === "date" && value === "") {
      setShowTooltip(true);
    }
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
      <input {...input} onBlur={handleFocus} focused={focused.toString()} onChange={(e) => onChange(e)} />
      {tooltip}
      <span>{errormessage}</span>
    </div>
  );
}
