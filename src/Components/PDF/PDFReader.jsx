import React, { useEffect, useState } from 'react';
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist';

// Use PDF.js worker from CDN
GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

const PDFReader = ({ file, query }) => {
  const [matchedText, setMatchedText] = useState('');
  const [loading, setLoading] = useState(false);

  const searchPDF = async () => {
    setLoading(true);
    const loadingTask = getDocument(file);
    const pdf = await loadingTask.promise;

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const text = content.items.map(item => item.str).join(' ');

      if (text.toLowerCase().includes(query.toLowerCase())) {
        setMatchedText(text);
        setLoading(false);
        return;
      }
    }

    setMatchedText('❌ No matching content found.');
    setLoading(false);
  };

  useEffect(() => {
    if (file && query) {
      searchPDF();
    }
  }, [file, query]);

  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">📄 Match from PDF</h2>
      {loading ? <p>Searching PDF...</p> : <p className="text-gray-800">{matchedText}</p>}
    </div>
  );
};

export default PDFReader;
