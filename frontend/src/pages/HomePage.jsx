import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { useState, useEffect } from 'react'
import RateLimitedUI from '../components/RateLimitedUI.jsx'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetcNotes = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/notes');
        console.log(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.error('Error fetching notes:', error);
        if (error.response.status === 429) {
          setIsRateLimited(true);
        }else {
          toast.error('Failed to fetch notes. Please try again later.');
        }
      }finally {
        setLoading(false);
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