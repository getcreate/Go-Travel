import './App.scss';
import { Header, Logo } from "./components";

function App() {
  return (
    <div className="App">
      <Header>
        <Logo classes="header__logo"/>
      </Header>
    </div>
  );
}

export default App;
