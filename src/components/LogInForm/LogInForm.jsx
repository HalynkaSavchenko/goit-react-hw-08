import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { useId } from 'react';
import * as Yup from "yup";
import css from './LogInForm.module.css';
import toast from 'react-hot-toast';

const phonebookSchema = Yup.object().shape({
    email: Yup.string().email('Incorrect email format').required('The field is mandatory!'),
    password: Yup.string()
    .min(8, 'The password must contain at least 8 characters')
    .matches(/[a-z]/, 'The password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'The password must contain at least one digit')
    .matches(/[@$!%*?&#]/, 'The password must contain at least one special character (@$!%*?&#)')
    .required('The field is mandatory!'),
})

export default function LogInForm() {
    const passwordId = useId();
    const emailId = useId();

    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values))
        .unwrap()
        .then(data => {
            console.log(data);
            toast.success('You have successfully logged in.');
        })
        .catch(error => {
            console.log(error);
            toast.error('An error occurred, please try again.')
        });;
        actions.resetForm();
    }
    return (
        <Formik initialValues={{
            email: '',
            password: '',
        }}
        validationSchema={phonebookSchema}
        onSubmit={handleSubmit}>
            <Form className={css.form}>
              <div className={css.fieldwrapper}>
                <div className={css.wrapper}>
                   <label className={css.label} htmlFor={emailId}>
                    Email</label>
                    <Field className={css.field} type='email' name='email' id={emailId}/>
                    <ErrorMessage className={css.error} name='email' component='span'/>
                </div>
                <div className={css.wrapper}>
                    <label className={css.label} htmlFor={passwordId}>
                    Password</label>
                    <Field className={css.field} type='password' name='password' id={passwordId}/>
                    <ErrorMessage className={css.error} name='password' component='span'/>
                </div>
              </div>
                <button className={css.button} type='submit'>Log In</button>
            </Form>
        </Formik>
    )
}