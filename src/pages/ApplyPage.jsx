import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ApplyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);

  const applyForOpportunity = async () => {
    try {
      await axios.post(`/api/opportunities/apply/${id}`);
      navigate('/opportunities');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Apply for Opportunity</h1>
      <p>Are you sure you want to apply for this opportunity?</p>
      <button onClick={applyForOpportunity}>Apply</button>
    </div>
  );
};

export default ApplyPage;