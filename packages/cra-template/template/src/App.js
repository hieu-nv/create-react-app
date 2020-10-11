import logo from './logo.svg';
import css from './App.m.scss';

function App() {
  return (
    <div className={css.App}>
      <header className={css['App-header']}>
        <img src={logo} className={css['App-logo']} alt="logo" />
        <p className="mt-8">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={css['App-link']}
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
