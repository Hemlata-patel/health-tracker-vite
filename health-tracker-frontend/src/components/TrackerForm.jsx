import React, { useState } from 'react';

const TrackerForm = ({ onAdd }) => {
  const [date, setDate] = useState('');
  const [weight, setWeight] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !weight || !calories) return;

    onAdd({ date, weight: +weight, calories: +calories });
    setDate('');
    setWeight('');
    setCalories('');
  };

  return (
    <form onSubmit={handleSubmit} className="tracker-form">
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <input type="number" placeholder="Calories" value={calories} onChange={(e) => setCalories(e.target.value)} />
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default TrackerForm;