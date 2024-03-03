import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Page from './components/page/Page';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [pathways, setPathways] = useState([]);

  useEffect(() => {
    const loadPathways = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://www.blackbullion.com/api/_dev/pathways');
        setPathways(response.data);
      } catch (error) {
        console.error('Failed to fetch pathways:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPathways();
 }, []);

  return (
    <div className="App">
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <Page data={pathways} itemsPerPage={20} />
      )}
    </div>
  );
}

export default App;
