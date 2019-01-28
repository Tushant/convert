import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FacebookLogin from "react-facebook-login";
import InstagramLogin from "react-instagram-login";
import TwitterLogin from "react-twitter-auth";

import { AUTH_TOKEN, AUTH_USER } from "constants/auth";
import * as styled from "./styled";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      success
      user {
        id
        email
        isStaff
        lastLogin
      }
      token
      errors
    }
  }
`;

class Login extends React.PureComponent {
  state = {
    user: {
      email: "programmertushant@gmail.com",
      password: "admin123"
    }
  };

  handleChange = ({ target: { name, value } }) => {
    const { user } = this.state;
    this.setState({ user: { ...user, [name]: value } });
  };

  handleSubmit = (e, mutation) => {
    e.preventDefault();
    const { user } = this.state;
    mutation({ variables: user });
  };

  _confirm = async ({ login }) => {
    const { history } = this.props;
    if (login.success && login.token !== "") {
      localStorage.setItem(AUTH_TOKEN, login.token);
      localStorage.setItem(AUTH_USER, JSON.stringify(login.user));
      history.push("/");
    }
  };

  render() {
    const { user } = this.state;
    return (
      <styled.LoginWrapper>
          <styled.StyledLogo to="/">SoclCard</styled.StyledLogo>
          {/* <styled.Caption>Sign in to your account</styled.Caption> */}
            <Mutation
              mutation={LOGIN_MUTATION}
              onCompleted={data => this._confirm(data)}
            >
              {mutation => (
                <styled.Form
                  action=""
                  method="post"
                  onSubmit={e => this.handleSubmit(e, mutation)}
                >
                  <styled.FormField>
                    <styled.Label htmlFor="login-username">Email</styled.Label>
                    <input
                      type="text"
                      className="form-input"
                      value={user.email}
                      name="email"
                      onChange={this.handleChange}
                      placeholder="Username"
                      required
                    />
                  </styled.FormField>

                  <styled.FormField>
                  <styled.Label htmlFor="login-password">Password</styled.Label>
                    <input
                      type="password"
                      className="form-input"
                      value={user.password}
                      name="password"
                      onChange={this.handleChange}
                      placeholder="Password"
                      required
                    />
                  </styled.FormField>

                  <styled.FormField>
                    <input type="submit" value="Log in" />
                  </styled.FormField>
                  <styled.CenterText>OR</styled.CenterText>
                  <styled.StyledRow>
                    <styled.StyledColumn>
                      <FacebookLogin
                        textButton=""
                        appId="259060191703565"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={response => console.log("response", response)}
                        cssClass="social-btn facebook-button"
                        icon="fa-facebook"
                      />
                    </styled.StyledColumn>
                    <styled.StyledColumn>
                      <InstagramLogin
                        clientId="5fd2f11482844c5eba963747a5f34556"

                        onSuccess={response =>
                          console.log("success response", response)
                        }
                        onFailure={response =>
                          console.log("failure response", response)
                        }
                        cssClass="social-btn instagram-button"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </InstagramLogin>
                    </styled.StyledColumn>
                    <styled.StyledColumn>
                      <TwitterLogin
                        loginUrl="http://localhost:3000/api/v1/auth/twitter"
                        onSuccess={response =>
                          console.log("success response", response)
                        }
                        onFailure={response =>
                          console.log("failure response", response)
                        }
                        requestTokenUrl="http://localhost:3000/api/v1/auth/twitter/reverse"
                        showIcon={false}
                        className="social-btn twitter-button"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </TwitterLogin>
                    </styled.StyledColumn>
                  </styled.StyledRow>
                </styled.Form>
              )}
            </Mutation>
        <styled.Footer>
          <styled.Text>
            Don't have an account?{" "}
            <styled.Anchor to="/accounts/signup">Sign up!</styled.Anchor>
          </styled.Text>
        </styled.Footer>
      </styled.LoginWrapper>
    );
  }
}

export default Login;
