import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import "../styles/ApplyPage.css"

const ApplyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);
  const { isAuthenticated, loading } = authState;

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      navigate('/login');
    }
  }, [isAuthenticated, loading, navigate]);

  const applyForOpportunity = async () => {
    try {
      await axios.post(`/api/opportunities/apply/${id}`);
      navigate('/opportunities');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='apply-page'>
    <Navbar />
    <div className='apply-container'>
      <h1>Apply for Opportunity</h1>
      <p>Are you sure you want to apply for this opportunity?</p>
      <button onClick={applyForOpportunity}>Apply</button>
    </div>
    </div>
  );
};

export default ApplyPage;