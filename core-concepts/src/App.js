import logo from './logo.svg';

import HelloWorld from './components/hello-world/HelloWorld';
import CreateElementComponent from './components/create-element-component/CreateElementComponent';
import ClassComponent from './components/class-component/ClassComponent';
import PureComponent from './components/pure-component/PureComponent';
import FunctionComponent from './components/function-component/FunctionComponent';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CreateElementComponent />
      <ClassComponent />
      <PureComponent text={'PureComponent'}/>
      <FunctionComponent />
    </div>
  );
}

export default App;
