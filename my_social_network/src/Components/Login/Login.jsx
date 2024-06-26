import React from "react";
import { ComposeValidators, maxLength, required } from "../../Utils/validators";
import { Formik } from "formik";
import s from "./Login.module.css"

const validator = (value) => {
    const errors = {};
    errors.login = ComposeValidators([required, maxLength(10)])(value.login);
    errors.password = ComposeValidators([required])(value.password);
    return errors;
}

const LoginForm = (props) => {
    return (
        <div>
            <Formik
                initialValues={{ login: '', password: '', rememberMe: false }}
                validate={validator}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(props.onSubmit(values));
                }}
            >
                {({ values, errors, touched, handleSubmit, handleChange }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input className={errors.login && touched.login ? s.error : undefined}
                                name="login"
                                type="text"
                                placeholder={"Login"}
                                onChange={handleChange}
                                value={values.login}
                            />

                            {errors.login && touched.login && <span className={s.errorMsg}>{errors.login}</span>}
                        </div>
                        <div>
                            <input className={errors.password && touched.password ? s.error : undefined}
                                name="password"
                                type="text"
                                placeholder={"Password"}
                                onChange={handleChange}
                                value={values.password}
                            />
                            {errors.password && touched.password && <span className={s.errorMsg}>{errors.password}</span>}
                        </div>
                        <div>
                            <input
                                name="rememberMe"
                                type="checkbox"
                                onChange={handleChange}
                                value={values.rememberMe}
                            />
                        </div>
                        <div><button type={"submit"}>Login</button></div>
                    </form>
                )}
            </Formik>
        </div>
    )
}


function Login() {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;