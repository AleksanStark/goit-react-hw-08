import { BsPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div className={css.container}>
      <div className={css.contact_name}>
        <BsPersonFill className={css.person_icon} size={16} />
        <span>{name}</span>
      </div>

      <div className={css.contact_number}>
        <FaPhoneAlt className={css.phone_icon} size={16} />
        <span>{number}</span>
      </div>
      <button className={css.button_delete} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
