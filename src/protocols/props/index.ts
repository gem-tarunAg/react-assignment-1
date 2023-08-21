export type DisplayButtonProps = {
  displayDetails: () => void;
  buttonText: string;
};

export type InputFormProps = {
  addToList: (input: string) => void;
};

export type InputListProps = {
  list: string[];
};

export type ListItemProps = {
  item: string;
  index: number;
};
