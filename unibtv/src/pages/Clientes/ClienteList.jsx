import React, { useEffect, useState } from 'react';
import axios from '../../services/api';
import '../styles/list.scss';

export default function ClienteList() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get('/clientes').then(res => setClientes(res.data));
  }, []);

  return (
    <div className="container list-page">
      <h2>Clientes</h2>
      <ul>
        {clientes.map(c => (
          <li key={c.id}>
            {c.name} – expira em {c.expiresAt.split('T')[0]}
            <span className={`status-indicator ${c.active ? 'green' : 'red'}`}></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
