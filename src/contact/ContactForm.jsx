import { useState } from "react";

const initialData = {
  name: "",
  message: "",
};

export default function ContactForm() {
  const [contact, setContact] = useState(initialData);

  function handleNameContact(e) {
    setContact({
      ...contact,
      name: e.target.value,
    });
  }

  function handleMessageContact(e) {
    setContact({
      ...contact,
      message: e.target.value,
    });
  }
  return (
  <div className="">
    <h1>Contact Form</h1>
    <form action="">
        <input type="text" placeholder="Name" value={contact.name} onChange={handleNameContact}/>
        <br />
        <input type="text" placeholder="Message" value={contact.message} onChange={handleMessageContact}/>
    </form>
    <h1>Contact Detail</h1>
    <p>Name : {contact.name}</p>
    <p>Message : {contact.message}</p>
  </div>
  );
}
