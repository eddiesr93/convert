import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FileUpload } from './FileUpload.tsx';
import { Button } from '@nextui-org/react';

type OptionType = 'option1' | 'option2';

type FormData = {
  file: File | null;
  radioOption: OptionType;
};

export const Form: React.FC = () => {
  const { register, handleSubmit, setValue, watch, reset } = useForm<FormData>({
    mode: 'onChange',
  });

  const selectedFile = watch('file');
  const selectedOption = watch('radioOption');

  const handleFileChange = (file: File | null) => {
    setValue('file', file);
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('radioOption', e.target.value as OptionType);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Form Data:', data);
    reset();
  };

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className="text-sm text-gray-500">Select an option</p>
        <fieldset className="mt-2">
          <label className="flex flex-row gap-1.5 items-center">
            <input
              type="radio"
              value="option1"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              {...register('radioOption', { required: 'Please select an option' })}
              onChange={handleRadioChange}
            />
            Option 1
          </label>
          <label className="flex flex-row gap-1.5 items-center">
            <input
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              value="option2"
              {...register('radioOption', { required: 'Please select an option' })}
              onChange={handleRadioChange}
            />
            Option 2
          </label>
        </fieldset>
      </div>

      <FileUpload
        selectedFile={selectedFile}
        onDrop={handleFileChange}
      />

      <Button
        variant="solid"
        color="primary"
        isDisabled={!selectedFile || !selectedOption}
        type="submit">
        Convert
      </Button>
    </form>
  );
};
