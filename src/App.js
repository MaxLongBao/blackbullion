import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Page from './components/page/Page';
import { compareBy } from './helpers/sort';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [pathways, setPathways] = useState([]);
  const [filteredPathways, setFilteredPathways] = useState(pathways);

  useEffect(() => {
    const loadPathways = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://www.blackbullion.com/api/_dev/pathways');
        setPathways(response.data);
        setFilteredPathways(response.data);
      } catch (error) {
        console.error('Failed to fetch pathways:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPathways();
 }, []);

  const handleSortChange = (e) => {
    const value = e.target.value
    setFilteredPathways([...filteredPathways].sort(compareBy(value)));
  }

  const handleFilterChange = (e) => {
    const value = e.target.value
    switch (value) {
      case 'hasSummativeAssessment':
        setFilteredPathways(pathways.filter(pathway => pathway.has_summative_assessment));
        break;
      case 'hasNotSummativeAssessment':
        setFilteredPathways(pathways.filter(pathway => !pathway.has_summative_assessment));
        break;
      case 'removeFilter':
        setFilteredPathways(pathways);
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <Page
          pathways={filteredPathways}
          pathwaysPerPage={12}
          handleSortChange={handleSortChange}
          handleFilterChange={handleFilterChange}
        />
      )}
    </div>
  );
}

export default App;
