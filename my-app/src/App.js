import logo from './logo.svg';
import './App.css';
import AboutUs from './pages/AboutUs';
import FirstBtn from './components/FirstBtn';
import CategoryList from './components/CategoryList';
import Electronics from './pages/Electronics';
import Furniture from './pages/Furniture';
import Decoration from './pages/Decoration';
import AutoProducts from './pages/AutoProducts';
import GardenProducts from './pages/GardenProducts';
import Counter from './pages/Counter';


function App() {
  const a = 5
  const b = 12
  console.log(a + b);
  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <header className="App-header">
        <CategoryList />
        <AboutUs />
        <FirstBtn src={'main button'} color={'red'} />
        <img src={logo} className="App-logo" alt="logo" />
        <FirstBtn src={'first button'} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AboutUs />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          My first React app
        </a>
        <FirstBtn color={'orange'} src={'my orange button'} />
      </header>
      <Electronics />
      <Furniture />
      <Decoration />
      <AutoProducts />
      <GardenProducts />
    </div>
  );
}

export default App;
