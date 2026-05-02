import { useState } from "react";
import { useImmer } from "use-immer";

const initialData = {
  name: "",
  message: "",
};

export default function ContactForm() {
  const [contact, setContact] = useImmer(initialData);

  function handleNameContact(e) {
    setContact((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleMessageContact(e) {
    setContact((draft) => {
      draft.message = e.target.value;
    });
  }
  return (
    <div className="">
      <h1>Contact Form</h1>
      <form action="">
        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={handleNameContact}
        />
        <br />
        <input
          type="text"
          placeholder="Message"
          value={contact.message}
          onChange={handleMessageContact}
        />
      </form>
      <h1>Contact Detail</h1>
      <p>Name : {contact.name}</p>
      <p>Message : {contact.message}</p>
    </div>
  );
}
