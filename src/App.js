import './App.css';
import { Navbar } from './components';
import { Diploma , Examples, Weapons, Shopping } from './containers';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
      </div>
      <div>
        <Shopping/>
        <Weapons/>
        <Examples />
        <Diploma />
      </div>
      
    </div>
  );
}

export default App;
