import React, { useEffect, useState } from 'react';
import axios from '../../services/api';
import '../styles/list.scss';

export default function ServidorList() {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    axios.get('/servers').then(res => setServers(res.data));
  }, []);

  return (
    <div className="container list-page">
      <h2>Servidores IPTV</h2>
      <ul>
        {servers.map(s => <li key={s.id}>{s.name} – {s.url}</li>)}
      </ul>
    </div>
  );
}
