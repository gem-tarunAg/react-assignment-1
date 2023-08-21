import { InputListProps } from '../../../protocols/props';
import { ListItem } from './ListItem';

export const InputList = ({ list }: InputListProps) => {
  return (
    <>
      <h1 className="text-xl text-white mt-6 font-mono mx-10">Inputs Entered Above Are:</h1>
      <ul className="my-2 text-white font-mono">
        {list.length === 0 && <p className="px-10">No Items present</p>}
        {list.map((item, index) => {
          return <ListItem key={index} item={item} index={index} />;
        })}
      </ul>
    </>
  );
};
