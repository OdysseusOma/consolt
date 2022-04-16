import React from 'react'
import './home.css'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import * as Yup from 'yup'


const SignUpForm = () => {
  return (
    <div>
        <Formik
            initialValues={{ email: ''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({ isSubmitting }) => (
                <Form className='useForm'>
                    <Field placeholder='Your Email' type="email" name="email" />

                    <button className='formBtn' type="submit" disabled={isSubmitting}>
                        Subscribe
                    </button>
                    <ErrorMessage name="email" component="div" />
                </Form>
            )}
    </Formik>
    </div>
  )
}

export default SignUpForm