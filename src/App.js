import logo from './logo.svg';
import './App.css';
import {Comp1} from './pracComponent.js';
import {ToggleColor} from './setstateprac';
import {Parent} from './parentStateless';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToggleColor/>
        <Comp1 name="arif" age="22"/>
        <Parent/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
