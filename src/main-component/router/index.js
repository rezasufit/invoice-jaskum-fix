import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import InvoiceGenerating from '../../components/Invoice/InvoiceGenerator.jsx';

const AllRoute = () => {
  return (
    <div className="App">
      {/* BrowserRouter wajib ada untuk membungkus Routes agar tidak error (layar putih) */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InvoiceGenerating />} />
          <Route path='/home' element={<InvoiceGenerating />} />
          
          {/* Fallback ke InvoiceGenerating jika URL tidak ditemukan */}
          <Route path="*" element={<InvoiceGenerating />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;