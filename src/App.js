import './App.css';
import Invoices from "./components/Invoices";
import SideBar from './components/SideBar';
import InvoiceDetails from './components/InvoiceDetails';
import InvoiceEdit from './components/InvoiceEdit';
import {InvoiceProvider} from "./context/InvoiceContext"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <InvoiceProvider>
    <div className="container">
      <Router>
        <SideBar/>
        <Routes>
          <Route path="/" exact element={<Invoices/>}/>
          <Route path="invoice/:id" exact element={<InvoiceDetails/>}/>
        </Routes>
        <InvoiceEdit/>
      </Router>
    </div>
    </InvoiceProvider>
  );
}

export default App;
