import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
const todos=['Di Cho', 'Nau Com', 'Quet Nha'];
class App extends Component {
  render(){
    return (
      <div className="App">
        <ul>
          {todos.map((x,index)=><li key={index}>{x}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
