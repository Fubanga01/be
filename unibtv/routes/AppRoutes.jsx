import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import RevendedorList from '../pages/Revendedores/RevendedorList';
import ClienteList from '../pages/Clientes/ClienteList';
import ServidorList from '../pages/Servidores/ServidorList';
import Notifications from '../pages/Notifications';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/revendedores" element={<RevendedorList />} />
        <Route path="/clientes" element={<ClienteList />} />
        <Route path="/servidores" element={<ServidorList />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  );
}
