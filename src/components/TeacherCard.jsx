import React, { useState } from 'react';

const TeacherCard = ({ teacher }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border-4 border-black rounded-2xl overflow-hidden bg-white shadow-neo transition-all duration-300 hover:shadow-neo-hover ${
        isOpen ? 'h-auto' : 'h-[150px]'
      }`}
    >
      <div
        className="p-5 cursor-pointer flex items-start"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-shrink-0 mr-4">
          <img
            src={teacher.image}
            alt={teacher.name}
            className="w-16 h-16 object-cover border-2 border-black rounded-full"
          />
        </div>
        <div className="flex-grow">
          <h3 className="font-bold text-lg">{teacher.name}</h3>
          <p className="text-gray-600 text-sm">{teacher.position}</p>
        </div>
        <span
          className={`text-xl font-bold transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </div>

      <div
        className={`transition-all duration-300 ${
          isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-5 bg-gray-50 border-t-4 border-black">
          <div className="mb-3">
            <span className="font-semibold">Qualification:</span>{' '}
            {teacher.qualification}
          </div>
          <p className="text-gray-700 text-sm">{teacher.experience}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
