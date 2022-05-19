import React from 'react';
// import "./Login.css"
import Loading from '../components/Loading';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loading: false,
      validEmail: false,
      validPassword: false,
    };
  }

  validityEmail = (email) => {
    console.log(email);
    // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const response = /\S+@\S+\.\S+/;
    this.setState({ validEmail: response.test(email) });
  }

  validitypassword = (password) => {
    const min = 6;
    const response = password.length >= min;
    this.setState({ validPassword: response });
  }

  inputHandleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
    if (name === 'email') this.validityEmail(value);
    if (name === 'password') this.validitypassword(value);
  }

  userLogin = () => {
    console.log('1343');
  }

  render() {
    // const minLenght = 6;
    const { email, password, loading, validEmail, validPassword } = this.state;
    return (
      <div className="Login">
        <h1>Tela Login</h1>
        <section>
          {loading && <Loading /> }
          {!loading
              && (
                <div data-testid="page-login">
                  Email
                  <input
                    data-testid="email-input"
                    type="email"
                    name="email"
                    onChange={ this.inputHandleChange }
                    value={ email }
                  />
                  Senha
                  <input
                    data-testid="password-input"
                    type="password"
                    name="password"
                    onChange={ this.inputHandleChange }
                    value={ password }
                  />
                  <button
                    data-testid="login-submit-button"
                    type="submit"
                    // disabled={ (password.length < minLenght) && !validEmail }
                    disabled={ !validPassword || !validEmail }
                    onClick={ this.userLogin }
                  >
                    Entrar
                  </button>
                </div>)}
        </section>
      </div>
    );
  }
}

export default Login;
