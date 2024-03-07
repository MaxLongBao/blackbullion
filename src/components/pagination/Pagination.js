import './pagination.css';

const Pagination = ({ currentPage, pages, setCurrentPage }) => {
  return (
    <div className='pagination'>
      <button className='pagination-arrow' onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
        &lt;
      </button>
      <div>
        {Array.from({ length: pages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`pagination-element ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <span className='page-counter'>{currentPage} / {pages}</span>
      </div>
      <button className='pagination-arrow' onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === pages}>
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
