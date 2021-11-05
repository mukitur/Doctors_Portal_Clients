import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
        <AuthProvider>
        <BrowserRouter>
          <Switch>
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route path="/home">
                  <Home></Home>
              </Route>
              <Route path = "/about">
                  <About></About>
              </Route>
              <PrivateRoute  path= "/appointment">
                  <Appointment></Appointment>
              </PrivateRoute >
              <Route path="/login">
                  <Login></Login>
              </Route>
              <Route path="/register">
                  <Register></Register>
              </Route>
          </Switch>
      </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
