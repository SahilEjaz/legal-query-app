import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const SimulatedPDF = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const para = queryParams.get('para');

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-xl shadow-md">
        <h1 className="text-xl font-bold mb-6">📄 Simulated Legal Document</h1>

        {[...Array(10)].map((_, i) => (
          <p
            key={i}
            className={`mb-4 ${
              para === `${i + 1}` ? 'bg-yellow-300 text-black p-2 rounded' : 'text-white'
            }`}
          >
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}

        <Link to="/" className="text-blue-400 underline mt-6 block">
          ← Back to Legal Query
        </Link>
      </div>
    </div>
  );
};

export default SimulatedPDF;
