import React from 'react';

function Card({title, url, intro, duration, image, link, type}) {
  return (
    <div>
      <img src={image} alt={title} />
      <p>{type}</p>
      <p>{duration}</p>
      <h2>{title}</h2>
      <p>{intro}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">View Pathway</a>
      <hr />
    </div>
  );
}

export default Card;
