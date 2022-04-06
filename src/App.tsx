import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Auth from './pages/auth';
import Dashboard from './pages/dashboard';

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Auth type="LOGIN"/>} />
        <Route path="/auth/register" element={<Auth type="REGISTER"/>} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
