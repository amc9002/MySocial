import React from "react";
import { Form, Field } from 'react-final-form'


const LoginForm = (props) => {
    return (
        <Form
            fields={['login', 'password', 'rememberMe']}
            onSubmit={values => {
                console.log(values);
                props.onSubmit(values);
            }}
        >
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name={"login"} component={"input"} type={"text"} placeholder={"Login"} />
                    </div>
                    <div>
                        <Field name={"password"} component={"input"} type={"text"} placeholder={"Password"} />
                    </div>
                    <div>
                        <Field name={"rememberMe"} component={"input"} type={"checkbox"} /> remember me
                    </div>
                    <div><button type={"submit"}>Log in</button></div>
                </form>
            )}
        </Form>
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