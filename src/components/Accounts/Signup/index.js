import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import * as styled from './styled';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $email: String!
    $password: String!
    $first_name: String!
    $last_name: String!
    $password_repeat: String!
  ) {
    register(
      email: $email
      password: $password
      firstName: $first_name
      lastName: $last_name
      passwordRepeat: $password_repeat
    ) {
      success
      errors
    }
  }
`;

type Props = {
  history: Object,
};

class Signup extends React.PureComponent<Props> {
  state = {
    user: {
      first_name: 'Tushant',
      last_name: 'Khatiwada',
      email: 'programmertushant@gmail.com',
      password: 'tushant',
      password_repeat: 'tushant',
    },
  };

  handleChange = ({ target: { name, value } }) => {
    const { user } = this.state;
    this.setState({ user: { ...user, [name]: value } });
  };

  handleSubmit = (e, mutation) => {
    e.preventDefault();
    console.log('user', mutation);
    mutation();
  };

  _confirm = async data => {
    console.log('data in confirm', data);
    const { history } = this.props;
    history.push('/accounts/login');
  };

  render() {
    const { user } = this.state;
    const {
      email,
      password,
      password_repeat, // eslint-disable-line camelcase
      first_name, // eslint-disable-line camelcase
      last_name, // eslint-disable-line camelcase
    } = user;
    const { history } = this.props;
    return (
      <styled.SignupForm>
        <styled.SignupWrapper>
          <Mutation mutation={SIGNUP_MUTATION}>
            {mutation => (
              <styled.Form
                onSubmit={async e => {
                  e.preventDefault();
                  const response = await mutation({
                    variables: { email, password, first_name, last_name, password_repeat },
                  });
                  console.log('response', response);
                  history.push('/accounts/login');
                }}
              >
                <styled.StyledLogo to="/">
                  SoclCard
                </styled.StyledLogo>
                <styled.Caption>Create An Account</styled.Caption>

                <styled.FormField>
                  <input
                    type="text"
                    className="form-input"
                    value={user.first_name}
                    name="first_name"
                    placeholder="First Name"
                    required
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    className="form-input"
                    value={user.last_name}
                    name="last_name"
                    placeholder="Last Name"
                    required
                    onChange={this.handleChange}
                  />
                </styled.FormField>

                <styled.FormField>
                  <input
                    type="text"
                    className="form-input"
                    value={user.email}
                    name="email"
                    placeholder="Email"
                    required
                    onChange={this.handleChange}
                  />
                </styled.FormField>

                <styled.FormField>
                  <input
                    type="password"
                    className="form-input"
                    value={user.password}
                    name="password"
                    placeholder="password"
                    required
                    onChange={this.handleChange}
                  />
                </styled.FormField>

                <styled.FormField>
                  <input
                    type="password"
                    className="form-input"
                    value={user.password_repeat}
                    name="password_repeat"
                    placeholder="Confirm Password"
                    required
                    onChange={this.handleChange}
                  />
                </styled.FormField>

                <styled.FormField>
                  <div className="contact100-form-checkbox">
                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                    <styled.Label>I accept the Terms of Use</styled.Label>
                  </div>
                </styled.FormField>

                <styled.FormField>
                  <styled.StyledButton>Sign up</styled.StyledButton>
                </styled.FormField>
                <styled.StyledNote>
                  Alreay have an account? <styled.StyledLink to="/accounts/login">Log in</styled.StyledLink>
                </styled.StyledNote>
              </styled.Form>
            )}
          </Mutation>
          <styled.RightBlock />
          <styled.LeftBlock />
        </styled.SignupWrapper>
      </styled.SignupForm>
    );
  }
}

export default Signup;
