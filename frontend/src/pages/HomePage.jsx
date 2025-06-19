import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { useState, useEffect } from 'react'
import RateLimitedUI from '../components/RateLimitedUI.jsx'
import axios from 'axios'

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetcNotes = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/notes');
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    }
    fetcNotes();
  },[]);

  return (
    <div className='min-h-screen'>
      <Navbar/>
      {isRateLimited && <RateLimitedUI/>}
    </div>
  )
}

export default HomePage