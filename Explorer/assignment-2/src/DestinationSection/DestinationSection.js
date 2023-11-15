import React from 'react';
import Card from '../components/Card/Card.js'
import './DestinationSection.css'

export default function DestinationSection({ title, content, data }) {
  return (
    <div className="destination-section">
      <div className="similar-destination-content">
        <p className="similar-destination-heading">{title}</p>
        <p className="similar-destination-message">{content}</p>
      </div>
      <div className="container">
        {data.map((item, index) => (
          <Card key={`${item.place || item.city}-${index}`} {...item}></Card>
        ))}
      </div>
    </div>
  );
};

