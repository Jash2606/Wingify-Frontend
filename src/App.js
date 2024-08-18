import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ReportDisplay from './components/ReportDisplay';
import './App.css';

function App() {
  const [analysis, setAnalysis] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalysisComplete = (data) => {
    setAnalysis(data.analysis);
    setRecommendations(data.recommendations);
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blood Report Analyzer</h1>
      </header>
      <main>
        <FileUpload onAnalysisStart={() => setLoading(true)} onAnalysisComplete={handleAnalysisComplete} />
        {loading && <p>Analyzing your report... This may take a few minutes.</p>}
        {analysis && recommendations && <ReportDisplay analysis={analysis} recommendations={recommendations} />}
      </main>
    </div>
  );
}

export default App;