import css from './UserMenu.module.css'
export default function UserMenu() {
    return (
        <div className={css.wrapper}>
            <p className={css.text}>Welcome, user</p>
            <button type='button' className={css.button}>LogOut</button>
        </div>
    )
}