import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router'
import axiosInstance from '../lib/axios'
import { toast } from 'react-hot-toast'
import { LoaderIcon, ArrowLeftIcon, Trash2Icon } from 'lucide-react';

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axiosInstance.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        toast.error('Failed to fetch note');
        console.log('Error fetching note:', error);
      }finally {
        setLoading(false);
      }
    }
    fetchNote();
  }, [id])

  const handleDelete = async () => {

  }

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center"> 
        <LoaderIcon className="size-8 animate-spin" />
      </div>
    )
  }
  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto p-4 py-8'>
        <div className="max-w-2xl mx-auto">
          <div className='flex items-center justify-between mb-6'>
              <Link to="/" className="btn btn-ghost">
                <ArrowLeftIcon className="h-5 w-5" />
                Back to Notes
              </Link>
              <button onClick={handleDelete} className="btn btn-error btn-outline">
                <Trash2Icon className="h-5 w-5"/>
              </button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default NoteDetailPage;
