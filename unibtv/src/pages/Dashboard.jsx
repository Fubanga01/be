import React, { useEffect, useState } from 'react';
import axios from '../../services/api';
import '../styles/dashboard.scss';

export default function Dashboard() {
  const [systemStatus, setSystemStatus] = useState({ server1: false, server2: false });
  const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [{ data: status }, { data: users }] = await Promise.all([
          axios.get('/system/status'),
          axios.get('/users/online'),
        ]);
        setSystemStatus(status);
        setActiveUsers(users);
      } catch (err) {
        console.error('Erro ao buscar dados:', err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container dashboard">
      <h2>Dashboard</h2>

      <section className="status-section">
        <h3>Status dos Servidores</h3>
        <p>
          Servidor 1: <span className={`status-indicator ${systemStatus.server1 ? 'green' : 'red'}`}></span>
        </p>
        <p>
          Servidor 2: <span className={`status-indicator ${systemStatus.server2 ? 'green' : 'red'}`}></span>
        </p>
      </section>

      <section className="users-section">
        <h3>Usuários Ativos</h3>
        <ul>
          {activeUsers.map((u) => (
            <li key={u.id}>
              {u.name} <span className="status-indicator green"></span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
