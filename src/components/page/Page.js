import React, { useState } from 'react';
import Card from '../card/Card';

const Page = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div>
      {currentData.map(({ id, title, url, intro, duration, image, link, type}) => (
        <Card
          key={id}
          title={title}
          url={url}
          intro={intro}
          duration={duration}
          image={image}
          link={link}
          type={type}
        />
      ))}
      <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <span>{currentPage}</span>
      <button onClick={() => setCurrentPage(currentPage + 1)} disabled={endIndex >= data.length}>
        Next
      </button>
    </div>
  );
};

export default Page;
