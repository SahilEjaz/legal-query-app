import React, { useState } from 'react';

const InputPanel = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!query.trim()) return;
    setLoading(true);
    await onSubmit(query);
    setLoading(false);
  };

  return (
    <div className="bg-gray-900 rounded-xl shadow-md p-6 mb-6 border border-gray-700">
      <textarea
        className="w-full bg-black text-white border border-gray-600 rounded-md p-3 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        rows={4}
        placeholder="Ask a legal question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="text-right">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2 rounded-md disabled:opacity-50"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </div>
    </div>
  );
};


export default InputPanel;
