
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from './Pages/Home/Home';
import './App.scss';
import Rightbar from './Components/Rightbar/Rightbar';


function App() {
  return (
    <div>
      <Router>
     <Header />
     <div className="container">
      <Sidebar />
    <div className="main">
    <Home />
    </div>
   
    <Rightbar />
    
     </div>
     </Router>
    </div>
  );
}

export default App;
