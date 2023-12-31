"use client";
import { Inbox } from 'lucide-react';
import React from 'react';
import {useDropzone} from 'react-dropzone'


const FileUpload = () => {
    const {getRootProps, getInputProps} = useDropzone({accept:{"application/pdf":[".pdf"]}, maxFiles:1, onDrop:(acceptedFile)=> console.log(acceptedFile)});
  return (
    <div className="p-2 bg-white rounded-xl">
        <div {...getRootProps({className: "border-dashed border-2 rounded-xl cursor-pointer py-8 bg-gray-50 flex items-center justify-center flex-col"})}>
            <input {...getInputProps()}/>
            <>
            <Inbox className='w-10 h-10 text-blue-500'/>
            <p className='text-slate-400 mt-2 text-sm'>upload PDF here.</p>
            </>

        </div>
    </div>
  )
}

export default FileUpload;