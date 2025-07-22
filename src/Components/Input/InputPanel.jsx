import React, { useState } from 'react';

function InputPanel({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleAskClick = () => {
    if (!query.trim()) return;
    onSubmit(query);
    setQuery('');
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
        <div className="text-white text-lg font-semibold mb-4">
          Ask a legal question
        </div>

        <div className="flex flex-col space-y-4">
          <textarea
            className="w-full h-28 p-4 text-white bg-gray-800 border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. What is the punishment for cheque bounce?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            onClick={handleAskClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputPanel;
