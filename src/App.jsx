import react from 'react';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import InputPanel from './Components/Input/InputPanel.jsx';
import AnswerPanel from './Components/Answer/AnswerPanel.jsx';
import SimulatedPDF from './pages/SimulatedPDF.jsx';
import PDFReader from './Components/PDF/PDFReader.jsx';
import pdfFile from './assets/DaniVsPritam.pdf.pdf';

function App() {
  const [answer, setAnswer] = useState('');
  const [citation, setCitation] = useState(null);
  const [query, setQuery] = useState('');

  const handleQuerySubmit = async (q) => {
    setQuery(q);
    setAnswer(`🧠 Interpreting your query: "${q}" based on legal precedents...`);
    setCitation({
      label: "Dani Devi v. Pritam Singh (P&H High Court)",
      link: "/simulated-pdf?para=7",
    });
  };

  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="w-full max-w-2xl text-center px-4 py-10">
          <h1 className="text-3xl font-bold mb-8">⚖️ Legal Query Assistant</h1>

          <Routes>
            <Route
              path="/"
              element={
                <main className="space-y-6">
                  <InputPanel onSubmit={handleQuerySubmit} />
                  <AnswerPanel answer={answer} citation={citation} />
                  {query && <PDFReader file={pdfFile} query={query} />}
                </main>
              }
            />
            <Route path="/simulated-pdf" element={<SimulatedPDF />} />
          </Routes>

          <footer className="mt-10 text-xs text-gray-400">
            © 2025 LegalBot | Built with 💼 & ⚛️
          </footer>
        </div>
      </div>
    </Router>
  );
}



export default App;
