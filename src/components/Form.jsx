import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { getDatabase, ref, push, get } from "firebase/database";
import { webinarNumberAndDate } from "../utils/data-settings";
import app from "../firebaseConfig";


const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      repeatType: "mirror",
      repeat: Infinity,
      duration: 0.3,
    },
  },
};

export default function Form() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    birthday: "",
    email: "",
  });

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
        alert("Ten adres e-mail już istnieje w bazie danych!");
        return;
      }

      await push(formDataRef, {
        id: crypto.randomUUID(),
        name: values.name.trim(),
        email: values.email.trim(),
        birthday: values.birthday,
      });

      setValues((prevValues) => ({
        ...prevValues,
        name: "",
        email: "",
        birthday: "",
      }));
      alert("Success");

      navigate("/thanks");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Zapisz się na webinar!</h2>
      {inputs.map((input) => (
        <FormInput key={input.id} input={input} onChange={handleOnChange} value={values[input.name]} />
      ))}

      <motion.button className="button" variants={buttonVariants} whileHover="hover" type="submit">
        Wyślij i odbierz prezent!
      </motion.button>
    </form>
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
