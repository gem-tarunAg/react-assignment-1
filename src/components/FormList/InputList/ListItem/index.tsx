import { ListItemProps } from '../../../../protocols/props';

export const ListItem = ({ item, index }: ListItemProps) => {
  return (
    <li className={(index + 1) % 5 === 0 ? 'bg-blue-500 px-2 mx-8 rounded-lg' : 'px-10'}>
      {index + 1}. {item}
    </li>
  );
};
