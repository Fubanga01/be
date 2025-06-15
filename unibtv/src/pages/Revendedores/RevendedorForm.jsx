import React, { useState } from 'react';
import axios from '../../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/form.scss';

export default function RevendedorForm() {
  const [name, setName] = useState('');
  const [credits, setCredits] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('/revendedores', { name, credits });
    navigate('/revendedores');
  };

  return (
    <div className="container form-page">
      <h2>Novo Revendedor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input value={name} onChange={e=>setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Créditos</label>
          <input type="number" value={credits} onChange={e=>setCredits(e.target.value)} required />
        </div>
        <button type="submit" className="btn">Salvar</button>
      </form>
    </div>
  );
}
