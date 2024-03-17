import { reduxForm } from "redux-form";


const LoginForm = (props) => {
    const {fields: {login, password, rememberMe}, handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type={'text'} name={'login'} placeholder={"Login"} {...login} />
            </div>
            <div>
                <input type={'text'} name={'password'} placeholder={"Password"} {...password} />
            </div>
            <div>
                <input type={"checkbox"} name={'rememberMe'}  {...rememberMe} /> remember me
            </div>
            <div>
                <button type={'submit'}>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
    fields: ['login', 'password', 'rememberMe']
    })(LoginForm);

function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm />
        </div>
    )
}

export default Login;