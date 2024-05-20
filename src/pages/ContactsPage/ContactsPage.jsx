import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import Loader from '../../components/Loader/Loader';
import css from './ContactsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading, selectError } from '../../redux/contacts/selectors';

export default function ContactsPage() {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectLoading);

    const isError = useSelector(selectError);

    useEffect(() => {dispatch(fetchContacts())}, [dispatch]);

    return (
        <div className={css.container}>
            <div className={css.formwrapper}>
              <h1 className={css.title}>Phonebook</h1>
              <ContactForm />
              <SearchBox />
            </div>
            {isLoading && <Loader/>}
            {isError && <p>Ooops...Please reload this page!</p>}
            <div className={css.listwrapper}>
              <ContactList /> 
            </div>
        </div>
    )
}