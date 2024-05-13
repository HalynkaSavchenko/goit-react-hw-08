import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';


export default function Contact({data: {id, name, number}}) {
    const dispatch = useDispatch()
    return(
        <div className={css.card}>
            <div>
              <p className={css.name}><FaUser className={css.icon}/>{name}</p>
              <p className={css.number}><FaPhoneAlt className={css.icon}/>{number}</p>
            </div>
            <button className={css.button} onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </div>
    )
}