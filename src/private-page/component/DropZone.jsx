import React, { useState,useCallback } from 'react';
import Axios from 'axios';
import {useDropzone} from 'react-dropzone'

export default function DropZone() {
    Axios.defaults.withCredentials = true;
    const [imageFile, setImageFile] = useState('');

    const onDrop = useCallback((acceptedFiles) => {
        handleFileInputChange(acceptedFiles[0]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accepts: "image/*",
        multiple: false,
    })

    const handleFileInputChange = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
             setImageFile(reader.result);
        }
    }

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!imageFile) return;
        Axios.put(`api url`, { data: imageFile});
    }

    return (
        <div>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>

            <form onSubmit={handleSubmitFile}>
                <button type="submit">
                    submit
                </button>
            </form >
        </div >
    )
}