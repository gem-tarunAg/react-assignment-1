import { useState } from 'react';
import { InputForm } from './InputForm';
import { InputList } from './InputList';

export const FormList = () => {
  const [list, setList] = useState<string[]>([]);

  const addToList = (input: string) => {
    console.log('Adding to list', input);
    setList((prevList) => {
      return [...prevList, input];
    });
  };

  return (
    <>
      <InputForm addToList={addToList} />
      <InputList list={list} />
    </>
  );
};
