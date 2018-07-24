import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const LoginScreen = styled.div`
position: fixed;
width: 100%;
height: 100vh;
background-image: url('/static/chicago2.PNG');
background-size: cover;
background-position: right 0px;
font-family: Roboto, sans-serif;
`;
const LoginBox = styled.div`
  margin: 50vh 30px 0 30px;
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
font-size: 12px;
position: fixed;
bottom: 10px;
left : 15px
`;
const LoginHeader = styled.p`
float: left;
margin: 8px 50px 8px 8px
`;
const HbkLogoImg = styled.img`
width: 20%;
float: right;
margin: 20px 35px
`;
const HbkWhereImg = styled.img`
width : 100%
`;


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

  // handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value
  //   });
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
          <HbkLogoImg src='/static/hbkLogo.PNG' alt='hbkLogo'/>
          <LoginBox>
            <HbkWhereImg src='/static/hbkWhereLogo.PNG' alt='hbkWhereLogo'/>
            <LoginForm>
              <LoginHeader>Sign In</LoginHeader>
              <LoginInput placeholder={'Enter Username'} />
              <LoginInput placeholder={'Enter Password'} />
              <LoginButton> Login </LoginButton>
            </LoginForm>
          </LoginBox>
          <Footer>
            &copy; {new Date().getFullYear()} HBK Engineering, LLC | Version 2.1.6 |
                <Link href="http://help.hbkapps.com/" target="_blank"><a>Help</a></Link>
          </Footer>
        </LoginScreen>
      );
    }
  }
}

export default LoginContainer;