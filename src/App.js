import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import TamuDasb from './components/TamuDasb';
import ReservasiDasb from './components/ReservasiDasb';
import StaffHotelDasb from './components/StaffHotelDasb';
import PembayaranDasb from './components/PembayaranDasb';

const App = () => {
  return (
    <BrowserRouter basename='/Arasya-uts-FE'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tamu" element={<TamuDasb />} />
        <Route path="/reservasi" element={<ReservasiDasb />} />
        <Route path="/staffhotel" element={<StaffHotelDasb />} />
        <Route path="/pembayaran" element={<PembayaranDasb />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
