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
const NewLookModal = styled.div`
font-size: 25px;
width: 50%;
padding: 30px;
margin : 0 auto;
text-align : center;
background-color : #f5f5f5e6;
color: #0d203d;
`
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
font-family: Roboto, sans-serif;
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
      password: '',
      firstVisit: true
    }
  }

  componentDidMount() {
    if (localStorage.getItem("HBKWhereFirstVisit")) {
      this.setState({ firstVisit: false })
    };
    this.setState({ isLoaded: true });
  }

  handleFirstVisitClick() {
    this.setState({ firstVisit: false });
    // localStorage.setItem("HBKWhereFirstVisit", true);
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
        <div>
          {this.state.firstVisit ?
            <LoginScreen>
              <NewLookModal>
                <h3>Welcome to the New HBK Where Sign In Page</h3>
                <p>We’ve enhanced the look of this page. Use your regular login information to enter.</p>
                <p>Questions? Click here to chat</p>
                <LoginButton onClick={() => { this.handleFirstVisitClick() }}>Got it</LoginButton>
              </NewLookModal>
            </LoginScreen> :
            <LoginScreen>
              <HbkLogoImg src='/static/hbkLogo.PNG' alt='hbkLogo' />
              <LoginBox>
                <HbkWhereImg src='/static/hbkWhereLogo.PNG' alt='hbkWhereLogo' />
                <LoginForm>
                  <LoginHeader>Sign In</LoginHeader>
                  <LoginInput placeholder={'Enter Username'} />
                  <LoginInput placeholder={'Enter Password'} />
                  <LoginButton> Login </LoginButton>
                </LoginForm>
              </LoginBox>
            </LoginScreen>
          }
          <Footer>
            &copy; {new Date().getFullYear()} HBK Engineering, LLC | Version 2.1.6 |
                <Link href="http://help.hbkapps.com/" target="_blank"><a>Help</a></Link>
          </Footer>
        </div>
      );
    }
  }
}

export default LoginContainer;
