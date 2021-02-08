import logo from "./logo.svg";
import "./App.css";
import KYC from "./Components/KYC";
import Multiple from "./Components/MultipleShareKYC";
import CTI from "./Components/CTI";
import KYB from "./Components/KYB";
import SDKYB from "./Components/supportingDocKYB";
import CI from "./Components/CI";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import MainDashboard from './Components/MainDashboard'

function App() {
  return (
    <div className="container">
      <Provider store={store}> 
        <Router>
          <Route exact path="/" component={MainDashboard} />
          <Route exact path="/ci" component={CI} />
          <Route exact path="/kyc" component={KYC} />
          <Route exact path="/kyb" component={KYB} />
          <Route exact path="/sdkyb" component={SDKYB} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
