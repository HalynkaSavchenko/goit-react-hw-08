import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { setFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css';


export default function SearchBox() {
    const dispatch = useDispatch()
    const filters = useSelector(selectNameFilter)
    const filterId = useId()
    return(
        <div className={css.searchBox}>
            <label htmlFor={filterId} className={css.label}>Find contacts by name</label>
            <input 
            className={css.field}
            type="text"
            value={filters}
            onChange={(e) => dispatch(setFilter(e.target.value))}
            id={filterId} />
        </div>
    )
}