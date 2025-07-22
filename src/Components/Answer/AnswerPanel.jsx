import React from 'react';
import { Link } from 'react-router-dom';

const AnswerPanel = ({ answer, citation }) => {
  if (!answer) return null;

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 shadow-sm text-white">
      <div className="text-sm leading-relaxed whitespace-pre-line font-bold">
        {answer}
      </div>
      {citation && (
        <div className="mt-4 text-sm text-blue-400">
          Source: <Link to={citation.link} className="underline hover:text-blue-300">{citation.label}</Link>
        </div>
      )}
    </div>
  );
};


export default AnswerPanel;
