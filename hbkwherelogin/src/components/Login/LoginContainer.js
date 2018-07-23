import React, { Component } from 'react';
import chicago2 from './images/chicago2.PNG';
import hbkLogo from './images/hbkLogo.PNG';
import hbkWhereLogo from './images/hbkWhereLogo.PNG';
import styled, { injectGlobal } from 'styled-components';
import './LoginContainer.css';

const LoginScreen = styled.div`
position: fixed;
width: 100%;
height: 100vh;
background-image: url(${chicago2});
background-size: cover;
background-position: right 0px
`;
const LoginBox = styled.div`
  margin: 50vh 30px 0 30px;
  float: left;
  width: 35% ;
  vertical-align: middle;
  padding: 10px;
`;
const LoginForm = styled.form`
  width: 100%;
  background-color : rgba(26, 25, 25, 0.85);
  padding: 10px;
  color: white;
  border-radius: 10px
`;
const LoginInput = styled.input`
  width: 85%;
  height : 30px;
  margin: 5px 0;
`;
const LoginButton = styled.button`
  width: 85%;
  height : 30px;
  background-color : rgb(0, 155, 0);
  color: white;
`;
const Footer = styled.footer`
color: white;
font-size: 16px;
margin-top: 97vh;`

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    this.setState({ isLoaded: true })
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }



  // .loginForm{
  //     width: 100%;
  //     background-color : rgba(26, 25, 25, 0.85);
  //    padding: 10px;
  //    color: white;
  //    border-radius: 10px
  // }


  // .footer{


  // }
  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <LoginScreen>
          <img src={hbkLogo} alt={hbkLogo} style={{ width: '20%', float: 'right', margin: '20px 35px' }} />
          <LoginBox>
            <img src={hbkWhereLogo} alt={hbkWhereLogo} style={{ width: '100%' }} />
            <LoginForm>
              <p style={{ float: 'left', margin: '8px 100px 8px 8px' }}>Sign In</p>
              <LoginInput placeholder={'Enter Username'} />
              <LoginInput placeholder={'Enter Password'} />
              <LoginButton> Login </LoginButton>
            </LoginForm>
          </LoginBox>
          <Footer>
            <p>&copy; 2018 HBK Engineering, LLC | Version 2.1.6 |
                <a href="http://help.hbkapps.com/" target="_blank">Help</a>
            </p>
          </Footer>
        </LoginScreen>
      );
    }
  }
}

export default LoginContainer;