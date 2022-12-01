import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';



function App() {
  return (
    <div className="App" >
{/* <Login/> */}
{/* <Header/> */}
<Router>
      <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/Home" element={[<Header/>,<Home/>]}></Route>
      </Routes>
      </Router> 
      </div>
  );
}

export default App;