const inputs = [
  {
    id: 1,
    name: "Imię",
    type: "text",
    placeholder: "Imię",
    errorMessage: "Wpisz conajmniej 3 znaki nie zawierające znaków specjalnych i liczb",
    label: "Imię",
    pattern: "^[A-Za-z]{3,16}$",
    required: true,
  },
  {
    id: 2,
    name: "Nazwisko",
    type: "text",
    placeholder: "Nazwisko",
    errorMessage: "Wpisz conajmniej 3 znaki nie zawierające znaków specjalnych i liczb",
    label: "Nazwisko",
    pattern: "^[A-Za-z]{3,16}$",
    required: true,
  },
  {
    id: 3,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "Wprowadź poprawy adres!",
    label: "Email",
    required: true,
  },
];

export default function Form() {
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
  const { label, errorMessage } = input;
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...input} />
      <span>{errorMessage}</span>
    </div>
  );
}
