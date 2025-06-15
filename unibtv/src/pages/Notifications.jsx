import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import '../styles/notifications.scss';

export default function Notifications() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('/notifications').then(res => setNotes(res.data));
  }, []);

  return (
    <div className="container notifications-page">
      <h2>Notificações</h2>
      <ul>
        {notes.map(n => (
          <li key={n.id}>
            {n.message} <small>({new Date(n.date).toLocaleString()})</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
