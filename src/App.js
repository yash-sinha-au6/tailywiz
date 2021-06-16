//import logo from './logo.svg';
import './App.css';
import AuthorList from  './screens/AuthorList'
import Authordetaillist from './screens/AuthordetailScreen'
import PostDetail from './screens/PostDetail'
import {BrowserRouter as Router,Route} from "react-router-dom"
function App() {
  return (
    <Router>
           <div className="App">
        <Route  path="/" component={AuthorList} exact/>
        <Route  path="/:id" component={Authordetaillist} exact/>
        <Route path='/post/:id'  component={PostDetail}/>
    </div>
    </Router>
   
  );
}

export default App;
