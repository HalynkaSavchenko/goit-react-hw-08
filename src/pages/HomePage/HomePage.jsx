import css from './HomePage.module.css';


export default function HomePage() {
    return (
        <div className={css.hero}>
            <h1 className={css.title}>Welcome to your phonebook</h1>
        </div>
    )
}