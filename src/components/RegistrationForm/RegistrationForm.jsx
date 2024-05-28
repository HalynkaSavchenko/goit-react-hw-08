import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useId } from 'react';
import * as Yup from "yup";
import css from './RegistrationForm.module.css';
import toast from 'react-hot-toast';

const phonebookSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short').max(50, 'Too long').required('The field is mandatory!'),
    email: Yup.string().email('Incorrect email format').required('The field is mandatory!'),
    password: Yup.string()
    .min(8, 'The password must contain at least 8 characters')
    .matches(/[a-z]/, 'The password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'The password must contain at least one digit')
    .matches(/[@$!%*?&#]/, 'The password must contain at least one special character (@$!%*?&#)')
    .required('The field is mandatory!'),
})

export default function RegistrationForm() {
    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();
        
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(register(values))
        .unwrap()
        .then(data => {
            console.log(data);
            toast.success('You have successfully registered.');
        })
        .catch(error => {
            console.log(error);
            toast.error('An error occurred, please try again.')
        });
        actions.resetForm();
    }
    return (
        <Formik initialValues={{
            name: '',
            email: '',
            password: '',
        }}
        validationSchema={phonebookSchema}
        onSubmit={handleSubmit}>
            <Form className={css.form} autoComplete='off'>
                <div className={css.fieldwrapper}>
                  <div className={css.wrapper}>
                    <label className={css.label} htmlFor={nameId}>
                      Username</label>
                      <Field className={css.field} type='text' name='name' id={nameId}/>
                      <ErrorMessage className={css.error} name='name' component='span'/>
                  </div>
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
                <button className={css.button} type='submit'>Register</button>
            </Form>
        </Formik>
    )
}