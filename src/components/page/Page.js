import React, { useState } from 'react';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';
import Options from '../options/Options';
import './page.css';

const Page = ({ pathways, pathwaysPerPage, handleSortChange, handleFilterChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pathwaysPerPage;
  const endIndex = startIndex + pathwaysPerPage;
  const currentPathways = pathways.slice(startIndex, endIndex);
  const pages = Math.ceil(pathways.length / pathwaysPerPage);

  return (
    <div>
      <Options handleSortChange={handleSortChange} handleFilterChange={handleFilterChange} />
      <div className='page'>
        {currentPathways.map(({ id, title, url, intro, duration, image, type, hasSummativeAssessment}) => (
          <Card
            key={id}
            title={title}
            url={url}
            intro={intro}
            duration={duration}
            image={image}
            type={type}
            hasSummativeAssessment={hasSummativeAssessment}
          />
        ))}
      </div>
      <Pagination currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Page;
