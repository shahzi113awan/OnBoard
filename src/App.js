import logo from "./logo.svg";
import "./App.css";
import KYC from "./Components/KYC";
import Multiple from "./Components/MultipleShareKYC";
import CTI from "./Components/CTI";
import KYB from "./Components/KYB";
import SDKYB from "./Components/supportingDocKYB";

function App() {
  return (
    <div className="container">
      {/* <KYC/> */}
      {/* <CTI /> */}

      <SDKYB />
    </div>
  );
}

export default App;
