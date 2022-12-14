import React from 'react';
import './Available.css'

const Available = () => {
    return (
        <div className='available'>
            <div className='available-text-container'>
                <p className='text-5xl text-amber-500'>I'm available </p>
                <p className='text-5xl text-amber-500'>For freelancer Projects!!</p>
                <p className='text-2xl text-white'>Tell me your project and discussion with me click "Hire me" button</p>
            </div>

                <button className=' text-orange-200 text-4xl'>
                    <a className='bg-orange-700 rounded-md text-gray-50 px-5' href="https://www.upwork.com/freelancers/~01603cf9ee2072fd0c" target="_blank">Hire me </a>
                </button>
            
        </div>
    );
};

export default Available;