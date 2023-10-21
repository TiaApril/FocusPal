// src/components/Ribbon.js

import React from 'react';
import './ribbon.css'
import { subjects } from '../../data';

function Ribbon({ handleFilter }) {
  return (
    <div className="ribbon">
    <select onChange={(e) => handleFilter(e.target.value)}>
      {subjects.map((subject) => (
        <option key={subject.id} value={subject.id}>
          {subject.name}
        </option>
      ))}
    </select>
    <a onClick={() => handleFilter('happeningNow')}>Happening Now</a>
    <a onClick={() => handleFilter('upcoming')}>Upcoming</a>
  </div>
  );
}

export default Ribbon;
