import logo from "./logo.svg";
import "./App.css";
import KYC from "./Components/KYC";
import Multiple from "./Components/MultipleShareKYC";
import CTI from "./Components/CTI";
import KYB from "./Components/KYB";
import store from './store'
import {Provider} from 'react-redux'
function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <KYC />
        <CTI />
      </Provider>
      {/* <KYB /> */}
    </div>
  );
}

export default App;
