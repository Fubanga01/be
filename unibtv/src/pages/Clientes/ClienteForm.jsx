import React, { useState } from 'react';
import axios from '../../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/form.scss';

export default function ClienteForm() {
  const [name, setName] = useState('');
  const [expiresAt, setExpiresAt] = useState('');
  const [mac, setMac] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('/clientes', { name, expiresAt, mac });
    navigate('/clientes');
  };

  return (
    <div className="container form-page">
      <h2>Novo Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input value={name} onChange={e=>setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Validade (YYYY-MM-DD)</label>
          <input value={expiresAt} onChange={e=>setExpiresAt(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>MAC</label>
          <input value={mac} onChange={e=>setMac(e.target.value)} placeholder="AA:BB:CC:DD:EE:FF"/>
        </div>
        <button type="submit" className="btn">Salvar</button>
      </form>
    </div>
  );
}
