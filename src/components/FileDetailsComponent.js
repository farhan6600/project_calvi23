// FileDetailsComponent.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFileData } from './fileService';

const FileDetailsComponent = () => {
  const { id } = useParams();
  const [fileData, setFileData] = useState([]);

  useEffect(() => {
    const fetchFileData = async () => {
      try {
        const data = await getFileData(id);
        setFileData(data);
      } catch (error) {
        console.error('Error fetching file data:', error.message);
        // Handle error
      }
    };

    fetchFileData();
  }, [id]);

  return (
    <div>
      <h2>File Details</h2>
      <ul>
        {fileData.map((item, index) => (
          <li key={index}>{`Voltage: ${item.voltage}, Time: ${item.time}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileDetailsComponent;
