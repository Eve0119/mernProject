import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeftIcon } from 'lucide-react';

const CreatePage = () => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

  }

  return (
    <div className='min-h-screen bg-base-200'>
        <div className='container mx-auto p-4 py-8'>
          <div className='max-w-2xl mx-auto'>
            <Link to={'/'} className='btn btn-ghost mb-6'>
              <ArrowLeftIcon className='size-5'/>
              Back to Notes
            </Link>
          </div>
        </div>
    </div>
  )
}

export default CreatePage