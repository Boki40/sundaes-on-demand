import "./App.css";
import SummaryForm from "./pages/summary/SummaryForm";
import OrderEntry from "./pages/entry/OrderEntry";

function App() {
  return (
    <div className="container mt-5">
      <OrderEntry />
      <SummaryForm />
    </div>
  );
}

export default App;
