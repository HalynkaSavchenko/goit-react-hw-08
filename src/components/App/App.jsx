import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps'
import css from './App.module.css'
import {selectLoading, selectError } from '../../redux/selectors.js'
import Loader from '../Loader/Loader.jsx';

export default function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);

  const isError = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

    return(
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