import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from './Pages/Home/Home';
import './App.scss';
import Rightbar from './Components/Rightbar/Rightbar';
import Users from './Pages/Users/Users';


function App() {
  return (
    <div>
      <Router>
     <Header />
     <div className="container">
     <Sidebar />
      <Switch>
     <Route exact path="/">
       <Home />
     </Route>
       <Route path="/users">
         <Users />
       </Route>
     </Switch>
     <Rightbar />
     </div>
     </Router>
    </div>
  );
}

export default App;
