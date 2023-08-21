import { useState } from 'react';
import { InputFormProps } from '../../../protocols/props';

export const InputForm = ({ addToList }: InputFormProps) => {
  const [newItem, setNewItem] = useState('');

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addToList(newItem);
    setNewItem('');
  };

  return (
    <div className="mt-6 w-full flex justify-around items-center">
      <input
        type="text"
        className="w-1/3 h-12 p-3 bg-gray-700 text-xl text-gray-300 border border-gray-600 rounded-xl ring-1 ring-gray-800 outline outline-offset-1 focus:ring-blue-500 focus:outline-blue-500 focus:border-blue-500 focus:bg-gray-700"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="w-1/6 h-14 p-2 bg-gray-800 text-xl text-slate-100 rounded-2xl border-2" onClick={clickHandler}>
        Add
      </button>
    </div>
  );
};
