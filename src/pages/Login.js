import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
// import "./Login.css"
import Loading from '../components/Loading';
import addEmail from '../actions/userActions';

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
    // console.log('colchete', { [name]: value });
    // console.log('com objeto', { name: value });
    // console.log('sem objeto', name, value);
    this.setState({ [name]: value });
    if (name === 'email') this.validityEmail(value);
    if (name === 'password') this.validitypassword(value);
  }

  userLogin = (event) => {
    // const { history } = this.props;
    const { dispatch, history } = this.props;
    const { email } = this.state;
    event.preventDefault();
    dispatch(addEmail(email));
    history.push('/carteira');
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
                    // onClick={ () => history.push('/carteira') }
                  >
                    Entrar
                  </button>
                </div>)}
        </section>
      </div>
    );
  }
}

Login.propTypes = {
  // history: propTypes.shape({
  //   push: propTypes.func.isRequired,
  // }).isRequired,
  dispatch: propTypes.func.isRequired,
  history: propTypes.func.isRequired,
};

export default connect()(Login);
