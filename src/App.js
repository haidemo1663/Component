import React,{Component} from 'react';
import './App.css';
import HeaderPage from './Component/headerPage';
import LoginForm from './Component/loginForm';
class App extends Component {
  render(){
    return (
      <div className="App">
        <HeaderPage></HeaderPage>
        <LoginForm/>
      </div>
    );
  }
}

export default App;
