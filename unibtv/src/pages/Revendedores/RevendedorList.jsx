import React, { useEffect, useState } from 'react';
import axios from '../../services/api';
import '../styles/list.scss';

export default function RevendedorList() {
  const [revendedores, setRevendedores] = useState([]);

  useEffect(() => {
    axios.get('/revendedores').then(res => setRevendedores(res.data));
  }, []);

  return (
    <div className="container list-page">
      <h2>Revendedores</h2>
      <ul>
        {revendedores.map(r => <li key={r.id}>{r.name} ({r.credits} créditos)</li>)}
      </ul>
    </div>
  );
}
