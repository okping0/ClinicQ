import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home.jsx';
import DoctorPage from './DoctorPage.jsx';
import PatientPage from './PatientPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/doctor" element={<DoctorPage/>} />
        <Route path="/patient" element={<PatientPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
