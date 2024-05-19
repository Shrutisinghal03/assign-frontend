import logo from './logo.svg';
import Navbar from './components/Navbar';
import Books from './components/Books';
import BookID from './components/BookID'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
     
      
     
      <Router>
      <Routes>
        <Route
          path="/"
          element={ <>
           < Navbar></Navbar>
          <Books></Books>
          </>
          }
        />
        <Route
          path="/:id"
          element={ <>
            < Navbar></Navbar>
           <BookID></BookID>
           </>}
        />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
