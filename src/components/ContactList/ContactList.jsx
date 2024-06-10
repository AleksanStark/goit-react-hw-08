import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice.js";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contact_list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
