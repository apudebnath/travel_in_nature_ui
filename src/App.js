import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound/NotFound';
import Navigation from './components/pages/Share/Navigation/Navigation';
import Footer from './components/pages/Share/Footer/Footer';
import Login from './components/pages/Login/Login/Login';
import MyOrder from './components/pages/Login/MyOrder/MyOrder';
import ManageAllOrders from './components/pages/Login/ManageALLOrders/ManageAllOrders';
import AddNewPackage from './components/pages/Login/AddNewPackage/AddNewPackage';
import About from './components/pages/About/About';
import AuthProvider from './context/AuthProvider/AuthProvider';
import OrderSubmission from './components/pages/Login/OrderSubmission/OrderSubmission';
import PrivateRoute from './components/pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className=" App container-fluid p-0 m-0">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/orderSubmission/:packageId">
              <OrderSubmission></OrderSubmission>
            </PrivateRoute>
            <Route path="/addPackage">
              <AddNewPackage></AddNewPackage>
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/manageOrder">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
       
    </div>
  );
}

export default App;
