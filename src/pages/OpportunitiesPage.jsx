import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';

const OpportunitiesPage = () => {
  const [opportunities, setOpportunities] = useState([]);
  const { authState } = useContext(AuthContext);
  const { isAuthenticated } = authState;

  useEffect(() => {
    const fetchOpportunities = async () => {
      const res = await axios.get('/api/opportunities');
      setOpportunities(res.data);
    };
    fetchOpportunities();
  }, []);

  return (
    <div>
    <Navbar />
      <h1>Opportunities</h1>
      <ul>
        {opportunities.map((opportunity) => (
          <li key={opportunity._id}>
            <h2>{opportunity.profileName}</h2>
            <p>{opportunity.companyName}</p>
            <p>{opportunity.stipend}</p>
            <p>{opportunity.location}</p>
            <p>{opportunity.duration}</p>
            <p>{opportunity.startDate}</p>
            {isAuthenticated ? (
              <Link to={`/apply/${opportunity._id}`}>Apply</Link>
            ) : (
              <Link to="/login">Login to Apply</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpportunitiesPage;
