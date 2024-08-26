import './App.css';
import Greeting from './Components/Greeting';
import Counter from './Components/Counter';
import ListRendering from './Components/ListRendering';

function App() {
  return (
    <div className="App mt-3">
      <Greeting name="Mouzammil" />
      <Counter />
      <ListRendering />
    </div>
  );
}

export default App;
