import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import Loader from '../Loader/Loader.jsx';
import css from './App.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations.js'
import {selectLoading, selectError } from '../../redux/contacts/selectors.js'

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