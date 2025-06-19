import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { useState, useEffect } from 'react'
import RateLimitedUI from '../components/RateLimitedUI.jsx'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import NoteCard from '../components/NoteCard.jsx'

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetcNotes = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/notes');
        console.log(res.data);
        setNotes(res.data);
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
      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {loading && <div className="flex justify-center items-center h-screen"><p className="text-lg">Loading...</p></div>}
        {notes.length > 0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map(note => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage