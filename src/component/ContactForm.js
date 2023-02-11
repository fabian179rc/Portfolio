import emailjs from "emailjs-com";
import { useState } from "react";
import InputBox from "./InputBox";
import TextBox from "./TextBox";

export default function ContactForm() {
  const [contactmessage, setContactMessage] = useState(false);
  function submitFunction(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4op58kc",
        "template_1xdilik",
        e.target,
        "MK3ZoikXJocCC2687"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setContactMessage(true);
  }
  return (
    <form className="mt-0 md:px-5" onSubmit={submitFunction}>
      <InputBox
        LabelText="Nombre"
        name="name"
        type="text"
        placeholder="Ingrese su Nombre"
        required="required"
      />
      <InputBox
        LabelText="Asunto"
        name="subject"
        type="text"
        placeholder="Ingrese Asunto"
      />
      <InputBox
        LabelText="Email"
        name="email"
        type="email"
        placeholder="Ingrese su Email"
        required="required"
      />
      <TextBox
        LabelText="Mensaje"
        name="message"
        type="text"
        placeholder="Texto....."
      />
      <button
        type="submit"
        className="w-full btn-primary text-pink-500 border-pink-500 hover:text-white hover:bg-pink-500 block md:block m-auto transition duration-75"
      >
        Enviar
      </button>
      <span className="mt-3 text-center text-indigo-600 text-sm block">
        {contactmessage
          ? "Su mensaje ha sido enviado. Pronto me pondre en contacto."
          : null}
      </span>
    </form>
  );
}
