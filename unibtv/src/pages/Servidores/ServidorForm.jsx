import React, { useState } from 'react';
import axios from '../../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/form.scss';

export default function ServidorForm() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('/servers', { name, url });
    navigate('/servidores');
  };

  return (
    <div className="container form-page">
      <h2>Novo Servidor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input value={name} onChange={e=>setName(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label>URL</label>
          <input value={url} onChange={e=>setUrl(e.target.value)} required/>
        </div>
        <button type="submit" className="btn">Salvar</button>
      </form>
    </div>
  );
}
