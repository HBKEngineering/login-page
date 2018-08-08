import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Intercom from 'react-intercom';

const LoginScreen = styled.div`
position: fixed;
width: 100%;
height: 100vh;
background-image: url('/static/backdrop-2.PNG');
background-size: cover;
background-position: right 0px;
font-family: Roboto, sans-serif;
display: grid;
grid-template-columns: 25% 25% 25% 25%;
grid-template-rows: 25% 25% 25% 25%;
`;
const NewLookModal = styled.div`
grid-row: 2;
grid-column: 2 / span 2 ;
text-align : center;
padding: 18px;
background-color : #f5f5f5e6;
color: #0d203d;
@media (max-width: 400px) {
  grid-row: 2 / span 2;
grid-column: 2 / span 2 
}
`
const LoginBox = styled.div`
  grid-row: 3 / span 2;
  grid-column: 1;
  align-content: center;

  @media (max-width: 1025px) {
    grid-row: 2 / span 2;
    grid-column: 2 / span 2;
  }
  @media (max-width: 400px) {
    grid-row: 2 / span 2;
  grid-column: 1 / span 4 
  }
`;
const LoginForm = styled.form`
  height: 50%
  background-color : rgba(26, 25, 25, 0.85);
  padding: 15px;
  color: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto auto;
  
  @media (max-width: 1025px) {
    width: 100%;
    padding : 0px;
    text-align : center;
    grid-template-columns: 15% 70% 15%
  }
`;
const UsernameInput = styled.input`
  margin: 5px 0;
  grid-row : 2;
  border: none;
  @media (max-width: 1025px) {
    grid-column: 2
  }
`;
const PasswordInput = styled.input`
  margin: 5px 0;
  grid-row : 3;
  border: none;
  @media (max-width: 1025px) {
    grid-column: 2
  }
`;
const LoginButton = styled.button`
  background-color : rgb(0, 155, 0);
  color: white;
  border: none;
  grid-row : 4
  @media (max-width: 1025px) {
    grid-column: 2;
  }
`;
const NewLookButton = styled.button`
  background-color : rgb(0, 155, 0);
  color: white;
  padding: 10px;
  border: none;
  @media (max-width: 1025px) {
    grid-column: 2;
  }
`;
const Footer = styled.footer`
color: white;
font-family: Roboto, sans-serif;
font-size: 12px;
position: fixed;
bottom: 10px;
left : 15px;
width: 100%;
text-align: center
`;
const SignInHeader = styled.p`
grid-row : 1;
grid-column : 1;
margin: 0;
@media (max-width: 1025px) {
  grid-column: 2;
  margin: auto;
}
`;
const Questions = styled.p`
grid-row : 5;
text-align : center;
margin: auto;
cursor: pointer
@media (max-width: 1025px) {
  grid-column: 1 / span 3
}
`;
const HbkLogoImg = styled.img`
width: 92%;
grid-row: 1;
grid-column: 4 / span 1;
@media (max-width: 1025px) {
  grid-column: 3 / span 2;
}
`;
const HbkWhereImg = styled.img`
width : 100%;
`;
const QuestionsModal = styled.div`
grid-row: 2;
grid-column: 2 / span 2 ;
text-align : center;
padding: 18px;
background-color : #f5f5f5e6;
color: #0d203d;
display: grid;
grid-template-columns: auto;
grid-template-rows: auto auto auto auto;
@media (max-width: 1025px) {
  height: 350px
}
@media (max-width: 400px) {
  grid-row: 2 / span 2;
grid-column: 1 / span 4 
}
`;
const IntercomNameInput = styled.input`
margin: 5px;
z-index: 100;
`;
const IntercomEmailInput = styled.input`
margin: 5px;
z-index: 100
`;
const SubmitQuestionButton = styled.button`
background-color : rgb(0, 155, 0);
color: white;
border: none;
grid-row : 3;
margin: 5px;
z-index: 100
`;
const CloseQuestionButton = styled.button`
color: white;
background-color: red;
border: none;
grid-row : 4;
margin: 5px;
z-index: 100
`


class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      username: '',
      password: '',
      firstVisit: true,
      help: false,
      intercom: false,
      IntercomEmail: '',
      IntercomName: '',
      IntercomUserID: '',
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
    //this would allow users who have already seen the new layout to skip the notification the next time they enter
    localStorage.setItem("HBKWhereFirstVisit", true);
  }
  handleNeedHelpClick() {
    this.setState({ help: true });
  }
  handleHelpSubmit(){
    //I doubt this is the best way to handle validation
    if (this.state.IntercomEmail.includes('@') && this.state.IntercomName !== ''){
    this.setState({ IntercomUserID : this.state.IntercomName , intercom: true , help: false });
    }
    else {alert("Please enter your name and a valid email address to begin a chat with us.")}
  console.log(this.state.IntercomEmail , "email")
  console.log(this.state.IntercomName, "name")
  console.log( this.state.IntercomUserID, "id")
  }
  handleHelpClose(){
    this.setState({ help: false });
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      //some code from https://www.npmjs.com/package/react-intercom
      const user = {
        user_id: `${this.state.IntercomEmail}`,
        username: `${this.state.IntercomEmail}`,
        email: `${this.state.IntercomEmail}`,
        name: `${this.state.IntercomName}`
      };

      return (
        <div>
          {this.state.firstVisit ?
            <LoginScreen>
              <NewLookModal>
                <h3>Welcome to the New HBK Where Sign In Page</h3>
                <p>We’ve enhanced the look of this page. Use your existing login information to enter.</p>
                <NewLookButton onClick={() => { this.handleFirstVisitClick() }}>GOT IT</NewLookButton>
              </NewLookModal>
            </LoginScreen> :
            <LoginScreen>
              <HbkLogoImg src='/static/hbkLogo.PNG' alt='hbkLogo' />
              <LoginBox>
                <HbkWhereImg src='/static/hbkWhereLogo.PNG' alt='hbkWhereLogo' />
                <LoginForm>
                  <SignInHeader>Sign In</SignInHeader>
                  <UsernameInput placeholder='Enter Username' name='Username' value={this.state.Username} onChange={this.handleInputChange}/>
                  <PasswordInput placeholder='Enter Password' name='Password' value={this.state.Password} onChange={this.handleInputChange}/>
                  <LoginButton> LOGIN </LoginButton>
                  <Questions onClick={()=>{this.handleNeedHelpClick()}}>
                    Questions? Click here to chat.
                  </Questions>
                </LoginForm>
              </LoginBox>
              {this.state.help ?
              <QuestionsModal>
                <IntercomNameInput placeholder='Enter Name' name='IntercomName' value={this.state.IntercomName} onChange={this.handleInputChange}/>
                <IntercomEmailInput placeholder='Enter Email'  name='IntercomEmail' value={this.state.IntercomEmail} onChange={this.handleInputChange} />
                <SubmitQuestionButton onClick={()=>this.handleHelpSubmit()}>SUBMIT</SubmitQuestionButton>
                <CloseQuestionButton onClick={()=>this.handleHelpClose()}>CLOSE</CloseQuestionButton>
              </QuestionsModal> : ''}
              {this.state.intercom ?
              <Intercom appID='gwrahg7n' {...user}/> : ''}
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
