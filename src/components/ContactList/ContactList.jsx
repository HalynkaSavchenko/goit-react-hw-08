import { useSelector } from 'react-redux';
import { selectVisibleCard } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';



export default function ContactList() {
    const visibleCard = useSelector(selectVisibleCard);
    
    return(
        <ul className={css.list}>
            {visibleCard.map((card) => (
                <li className={css.card} key={card.id}>
                  <Contact data={card} />
               </li>
            ))}
        </ul>
    )
}
