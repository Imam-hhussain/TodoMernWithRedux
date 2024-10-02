import Header from "./component/header";
import Main from "./component/main";
import './App.css';
import {DispalyTodos} from './component/dispalyTodos'

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <DispalyTodos/>
            
        </div>
    );
}

export default App;
