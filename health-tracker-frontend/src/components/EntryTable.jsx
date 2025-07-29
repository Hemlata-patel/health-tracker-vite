import React from 'react';

const EntryTable = ({ entries, onDelete }) => {
  return (
    <div className="entry-table">
      <h2>Entry History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Weight (kg)</th>
            <th>Calories</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry._id}>
              <td>{entry.date}</td>
              <td>{entry.weight}</td>
              <td>{entry.calories}</td>
              <td>
                <button onClick={() => { console.log('clicked delete',entry._id)
                  onDelete(entry._id)}}>🗑 Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EntryTable;