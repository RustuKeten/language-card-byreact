
import './App.css';
import Card from './components/Card';
import {languages} from "./data";
import Header from "./header/Header";


function App() {
  return (
    <div className="main-container">
    <Header/>
    <Card/>
    </div>
  );
}

export default App;
// {/* {languages.map((item) =><Card {...item}/>)} */}