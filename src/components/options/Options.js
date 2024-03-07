import './options.css';

const Options = ({ handleSortChange, handleFilterChange }) => {
  return (
    <div className='options'>
      <div className='sort'>
        <p>Sort by</p>
        <select onChange={handleSortChange}>
          <option value="">Select a sort method</option>
          <option value="duration">Duration: Shortest to Longest</option>
          <option value="-duration">Duration: Longest to Shortest</option>
          <option value="title">Title: A to Z</option>
          <option value="-title">Title: Z to A</option>
        </select>
      </div>
      <div className='filter'>
        <p>Filter by</p>
        <select onChange={handleFilterChange}>
          <option value="removeFilter">None</option>
          <option value="hasSummativeAssessment">With Summative Assessment</option>
          <option value="hasNotSummativeAssessment">Without Summative Assessment</option>
        </select>
      </div>
    </div>
  );
}

export default Options;
