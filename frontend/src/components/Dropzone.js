import React, { useState, useEffect, useContext } from 'react';
import { DataContext, IndexContext } from '../App.js';
import { DropzoneArea } from 'material-ui-dropzone';

export default function Dropzone() {
    const [data, setData] = useContext(DataContext);
    const [index, setIndex] = useContext(IndexContext);
    const [files, setFiles] = useState([]);
    
    useEffect(() => {
        if (files.length > 0) {
            const file = files[0]
            const reader = new FileReader();
            reader.onload = function() {
                const fileContent = JSON.parse(reader.result);
                setData(fileContent);
                setIndex(0);
            };
            reader.readAsText(file);
        }
    }, [files]);
    
    return (
        <DropzoneArea
          onChange={(files) => setFiles(files)}
        />
    )
}