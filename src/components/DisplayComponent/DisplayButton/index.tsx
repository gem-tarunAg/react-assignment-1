import { DisplayButtonProps } from '../../../protocols/props';

export const DisplayButton = ({ displayDetails, buttonText }: DisplayButtonProps) => {
  return (
    <button className="w-2/6 h-14 p-2 bg-gray-800 text-xl text-slate-100 rounded-2xl border-2" onClick={displayDetails}>
      {buttonText}
    </button>
  );
};
