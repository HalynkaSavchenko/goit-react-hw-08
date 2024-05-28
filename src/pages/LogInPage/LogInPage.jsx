import LogInForm from '../../components/LogInForm/LogInForm';
import css from './LogInPage.module.css';

export default function LogInPage() {
    return (
        <div className={css.wrapper}>
            <h1>Log in</h1>
            <LogInForm/>
        </div>
    )
}
