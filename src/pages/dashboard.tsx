// TODO: Definir rutas anidadas
import { Routes, Route } from 'react-router-dom';

import Sidebar from "../components/sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <Routes>
          <Route path='/profile' element={ <h2>Profile</h2> }/>
          <Route path='/appointments' element={ <h2>Appointments</h2> }/>
          <Route path='/patients' element={ <h2>Patients</h2> }/>
          <Route path='/settings' element={ <h2>Settings</h2> }/>
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard