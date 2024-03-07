import React, { useState, useEffect, useRef } from 'react';
import { capitalizeFirstLetter } from '../../helpers/capitalize';
import './card.css';

const Card = ({title, url, intro, duration, image, type, hasSummativeAssessment}) => {
  const [descriptionStyle, setDescriptionStyle] = useState({});
  const titleRef = useRef(null);

  useEffect(() => {
    const titleHeight = titleRef.current.getBoundingClientRect().height;
    const totalHeight = 400;
    const availableHeightForDescription = totalHeight - titleHeight;

    setDescriptionStyle({
      height: `${availableHeightForDescription}px`,
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
    });
  }, [title]);

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={image} alt={title} />
      </div>
      <p className='card-info'>{capitalizeFirstLetter(type)} - {duration}</p>
      <h2 ref={titleRef} className='card-title'>{title}</h2>
      <div className='card-intro' style={descriptionStyle}>{intro}</div>
      <a href={url} target="_blank" rel="noopener noreferrer" className='card-url'>View Pathway</a>
    </div>
  );
}

export default Card;
