import React from "react";
import { maxLength, required } from "../../Utils/validators";
import { Formik } from "formik";
import s from "./Login.module.css"

const validator = (value) => {
    console.log("Validator is called", value);

    const errors = {};

    let req = required(value.login);
    if (req)  errors.login = req;
    else {
        let len = maxLength(10)(value.login);
        if (len) errors.login = len;
    }

    req = required(value.password)
    if (req)  errors.password = req;

    console.log("Validator's result :", errors);
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