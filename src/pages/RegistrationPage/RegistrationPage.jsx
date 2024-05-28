import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

export default function RegistrationPage() {
    return (
        <div className={css.wrapper}>
            <h1>Please register in the application</h1>
            <RegistrationForm/>
        </div>
    )
}