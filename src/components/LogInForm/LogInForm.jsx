import { Formik, Form, Field } from 'formik';
import css from './LogInForm.module.css';

export default function LogInForm() {
    return (
        <Formik initialValues={{
            email: '',
            password: '',
        }}>
            <Form>
                <label className={css.label}>
                    Email
                    <Field type='email' name='email'/>
                </label>
                <label className={css.label}>
                    Password
                    <Field type='password' name='password'/>
                </label>
                <button type='submit'>Log In</button>
            </Form>
        </Formik>
    )
}