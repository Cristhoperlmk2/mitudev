
import './App.css';
import Mensaje from './Mensaje.js';

function App() {
  return (
    <div className="App">
     <Mensaje color="red" title="Principal" />
     <Mensaje color="green" title="Secundario"/>
     <Mensaje color="blue" title="Terciario"/>
    </div>
  );
}

export default App;
