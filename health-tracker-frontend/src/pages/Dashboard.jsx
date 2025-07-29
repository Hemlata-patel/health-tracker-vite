import React, { useState, useEffect } from 'react';
import TrackerForm from '../components/TrackerForm';
import TrackerChart from '../components/TrackerChart';
import EntryTable from '../components/EntryTable';
import axios from 'axios';

const Dashboard = () => {
  const [entries, setEntries] = useState([]);

  const fetchEntries = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/entries');
      setEntries(res.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const addEntry = async (entry) => {
    try {
      const res = await axios.post('http://localhost:5000/api/entries', entry);
      setEntries([...entries, res.data]);
    } catch (err) {
      console.error('Error adding entry:', err);
    }
  };

  const deleteEntry = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/entries/${id}`);
      setEntries(entries.filter((entry) => entry._id !== id));
    } catch (err) {
      console.error('Error deleting entry:', err);
    }
  };

  return (
    <div className="dashboard">
      <TrackerForm onAdd={addEntry} />
      <TrackerChart data={entries} />
      <EntryTable entries={entries} onDelete={deleteEntry} />
    </div>
  );
};

export default Dashboard;