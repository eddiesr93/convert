import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { twMerge } from 'tailwind-merge';
import { Button, Tooltip } from '@nextui-org/react';
import { LuTrash2 } from 'react-icons/lu';

type Props = {
  onDrop: (file: File | null) => void;
  selectedFile: File | null;
};

export const FileUpload: React.FC<Props> = ({ onDrop, selectedFile }) => {
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onDrop(acceptedFiles[0]);
      }
    },
    [onDrop]
  );
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop: handleDrop,
  });

  const removeFile = () => {
    onDrop(null);
  };

  return (
    <div className="h-[265px] flex flex-col gap-2">
      <div
        className={twMerge(
          'w-96 h-52 flex justify-center items-center p-5 border border-dashed rounded-xl text-center',
          isDragActive ? 'bg-[#035ffe] text-white animate-pulse' : 'bg-slate-100/50 text-slate-400'
        )}
        {...getRootProps()}>
        <input {...getInputProps()} />
        {!isDragActive && <p>Click here or drop a file to upload</p>}
        {isDragActive && !isDragReject && <p>Drop to upload this file!</p>}
        {isDragReject && <p>File type not accepted, sorry!</p>}
      </div>
      {selectedFile && (
        <div className="px-5 py-1 border bg-slate-100/50 text-slate-400 rounded-xl flex flex-row gap-2 items-center justify-between">
          <p>{selectedFile.name}</p>
          <Tooltip
            closeDelay={0}
            showArrow={true}
            content="Delete">
            <Button
              isIconOnly={true}
              color="danger"
              variant="flat"
              startContent={<LuTrash2 />}
              onPress={removeFile}
            />
          </Tooltip>
        </div>
      )}
    </div>
  );
};
