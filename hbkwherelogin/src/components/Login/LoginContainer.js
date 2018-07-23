import React, { Component } from 'react';
import chicago2 from './images/chicago2.PNG';
import hbkLogo from './images/hbkLogo.PNG';
import hbkWhereLogo from './images/hbkWhereLogo.PNG';
import './LoginContainer.css';


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
        <div className={'loginScreen'} style={{ position: 'fixed', width: '100%', height: '100vh', backgroundImage: `url(${chicago2})`, backgroundSize: 'cover', backgroundPosition: 'right 0px' }}>
          <img src={hbkLogo} alt={hbkLogo} style={{ width: '20%', float: 'right', margin: '20px 35px' }} />
          <div className={'loginBox'}>
            <img src={hbkWhereLogo} alt={hbkWhereLogo} style={{ width: '100%' }} />
            <form className={'loginForm'}>
              <p style={{float : 'left' , margin : '8px 100px 8px 8px'}}>Sign In</p>
              <input className={'loginInput'} placeholder={'Enter Username'} />
              <input className={'loginInput'}  placeholder={'Enter Password'} />
              <button className={'loginButton'}>Login </button>
            </form>
          </div>
          <div className={'footer'}>
                <p>&copy; 2018 HBK Engineering, LLC | Version 2.1.6 |
                <a href="http://help.hbkapps.com/" target="_blank">Help</a>
                </p>
            </div>
        </div>
      );
    }
  }
}

export default LoginContainer;