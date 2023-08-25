import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, push, get } from "firebase/database";
import { webinarNumberAndDate, landingSettings } from "../utils/data-settings";
import app from "../firebaseConfig";
import Modal from "./Modal";
import AnimatedButton from "./AnimatedButton";
import emailjs from "emailjs-com"

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
      placeholder: "Enter your name",
      errormessage: "Enter at least 3 letters without special characters or numbers.",
      label: "Name",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter your e-mail address",
      errormessage: "Enter an improved address!",
      label: "E-mail",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      errormessage:
        "Date of birth is not necessary, but by providing it we can better customize the content you may receive from us.",
      label: "Birthday",
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
          buttonText: "Try again",
          contentText: "This email address already exists in the database!",
        });
        return;
      }

      await push(formDataRef, {
        id: crypto.randomUUID(),
        name: values.name.trim(),
        email: values.email.trim(),
        birthday: values.birthday,
      });

      emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, 'template_pz5h6xp', e.target, process.env.REACT_APP_EMAILJS_API_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      

      setFormSubmitted(true);
      setModalConfig({
        isOpen: true,
        buttonText: "Close",
        contentText: "Form sent correctly!",
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
        buttonText: "Try again",
        contentText: "An error occurred while submitting the form....",
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
        <h2>Sign up for an interview with us!</h2>
        {inputs.map((input) => (
          <FormInput key={input.id} input={input} onChange={handleOnChange} value={values[input.name]} />
        ))}

        {landingSettings.gift ? (
          <AnimatedButton type="submit">Send and receive a gift!</AnimatedButton>
        ) : (
          <AnimatedButton type="submit">Send</AnimatedButton>
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
