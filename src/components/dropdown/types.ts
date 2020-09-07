export interface IDropDownItem {
  title: string;
  className?: string;
  children: React.ReactNode;
}

export type TDropDownAlign = 'left' | 'right';

export interface IDropDown {
  className?: string;
  children: React.ReactNode;
  align: TDropDownAlign;
  onClose: () => void;
  isOpen: boolean;
}
