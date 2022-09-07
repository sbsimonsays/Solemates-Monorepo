// Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

// Pages
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/apparels" element={<Index />} />
            <Route path="/apparels/:id" element={<Show />} />
            <Route path="/apparels/new" element={<New />} />
            <Route path="/apparels/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
