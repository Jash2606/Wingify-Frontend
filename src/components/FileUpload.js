import React, { useState } from 'react';
import axios from 'axios';

function FileUpload({ onAnalysisStart, onAnalysisComplete }) {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('blood_report', file);

    try {
      onAnalysisStart();
      const response = await axios.post('https://wingify-backend.onrender.com/analyze', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onAnalysisComplete(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred while analyzing the report');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="file-upload-label">
        {fileName ? fileName : 'Choose File'}
        <input type="file" onChange={handleFileChange} accept=".pdf" />
      </label>
      <button type="submit">Analyze Report</button>
    </form>
  );
}

export default FileUpload;