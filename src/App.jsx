import react from 'react';
import { useState,useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import InputPanel from './Components/Input/InputPanel.jsx';
import AnswerPanel from './Components/Answer/AnswerPanel.jsx';
import SimulatedPDF from './Pages/SimulatedPDF.jsx';
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
      <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">
        <div className="w-full max-w-2xl">
          <h1 className="text-4xl font-bold text-center mb-10">⚖️ Legal Query Assistant</h1>

          <Routes>
            <Route
              path="/"
              element={
                <main className="flex flex-col gap-6 items-center">
                  <InputPanel onSubmit={handleQuerySubmit} />
                  <AnswerPanel answer={answer} citation={citation} />
                  {query && <PDFReader file={pdfFile} query={query} />}
                </main>
              }
            />
            <Route path="/simulated-pdf" element={<SimulatedPDF />} />
          </Routes>

          <footer className="mt-10 text-center text-sm text-gray-400">
            © 2025 LegalBot | Built with 💼 & ⚛️
          </footer>
        </div>
      </div>
    </Router>
  );
}



export default App;
