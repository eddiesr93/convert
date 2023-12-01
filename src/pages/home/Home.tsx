import React, { FormEvent, useState } from 'react';
import { FileUpload } from '../../components/FileUpload.tsx';
import { Button } from '@nextui-org/react';

export const Home: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission with formData, including the selected file.
    const formData = {
      // Your other form fields...
      file: selectedFile,
    };
    console.log('Form Data:', formData);
  };

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={handleSubmit}>
      <FileUpload
        selectedFile={selectedFile}
        onDrop={handleFileChange}
      />
      <Button
        variant="solid"
        color="primary"
        type="submit">
        Convert
      </Button>
    </form>
  );
};
