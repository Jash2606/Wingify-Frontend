import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ReportDisplay({ analysis, recommendations }) {
  return (
    <div className="report-display">
      <h2>Blood Report Analysis</h2>
      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{analysis}</ReactMarkdown>
      </div>
      
      <h2>Health Recommendations</h2>
      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{recommendations}</ReactMarkdown>
      </div>
    </div>
  );
}

export default ReportDisplay;