
import './index.css';
import '../src/components/header/header.css'
import Header from './components/header/Header';
import StandFor from './components/stand/StandFor';
import Cards from "./components/cards/Cards";


function App() {
  return (
    <div className="App">
<Header/>
<StandFor/>
<Cards/>
    </div>
  );
}

export default App;
