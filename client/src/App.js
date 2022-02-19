import './App.css';
import './styles/output.css'
import MainComponent from './components/MainComponent'
import { Provider } from "react-redux";
import createStore from "./redux/reducers/rootReducer";

function App() {
  const store = createStore()
  return (
    
    <div className="App">
      <Provider store={store} >
        <div>
          <MainComponent />
        </div>
      </Provider>
    </div>
  );
}

export default App;
