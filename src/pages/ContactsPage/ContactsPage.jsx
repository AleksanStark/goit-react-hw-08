import { useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import { selectIsLoading } from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Oval } from "react-loader-spinner";
const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Your Contacts</h1>
      {isLoading && <Oval />}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
