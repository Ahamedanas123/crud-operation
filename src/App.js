import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser';
import NoPage from './Components/NoPage';
import UserContent from './Components/UserContent';
import { ViewUser } from './Components/ViewUser';
import EditUser from './Components/EditUser';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route exact path={"/"}  element={<UserContent/>} />
            
          

          <Route path={"/adduser"} element={ <AddUser/>} />
           
          

          <Route path={"/user/:id"} element={<ViewUser/>} />

          <Route path={"/edit/:id"} element={<EditUser/>} />
            

          <Route path={"**"} element={<NoPage/>} />
            
          

        </Routes>
    </div>
  );
}

export default App;
